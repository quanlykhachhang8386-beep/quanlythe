import { escapeHtml, normalizeText } from "../utils/format.js";
import { renderChips } from "../utils/dom.js";

export const filterCards = (cards, state) => {
  const query = normalizeText(state.search);
  return cards.filter((card) => {
    const searchable = normalizeText([
      card.name,
      card.network,
      card.type,
      card.tier,
      card.audience,
      card.highlights.join(" "),
      card.annualFee,
      card.limit,
    ].join(" "));
    const matchesQuery = !query || searchable.includes(query);
    const matchesNetwork = state.network === "all" || card.network === state.network;
    const matchesTier = state.tier === "all" || card.tier === state.tier;
    const matchesType = state.type === "all" || card.type === state.type;
    return matchesQuery && matchesNetwork && matchesTier && matchesType;
  });
};

export const renderCardCatalog = ({ cards, state }) => {
  const networks = ["all", ...new Set(cards.map((card) => card.network))];
  const tiers = ["all", ...new Set(cards.map((card) => card.tier))];
  const types = ["all", ...new Set(cards.map((card) => card.type))];
  const filteredCards = filterCards(cards, state);

  return `
    <section class="view-stack">
      <header class="page-header compact">
        <div>
          <p class="eyebrow">Kho sản phẩm</p>
          <h1>Danh mục thẻ BIDV</h1>
          <p>Tra cứu theo tên thẻ, mạng thẻ, hạng thẻ, loại thẻ, phí và nhóm khách hàng phù hợp.</p>
        </div>
      </header>

      <div class="toolbar">
        <label class="search-box">
          <span>Tìm kiếm</span>
          <input data-filter="search" value="${escapeHtml(state.search)}" placeholder="Nhập tên thẻ, ưu đãi, phí, hạn mức..." />
        </label>
        <label>
          Mạng thẻ
          <select data-filter="network">
            ${networks.map((value) => `<option value="${escapeHtml(value)}" ${state.network === value ? "selected" : ""}>${value === "all" ? "Tất cả" : escapeHtml(value)}</option>`).join("")}
          </select>
        </label>
        <label>
          Hạng
          <select data-filter="tier">
            ${tiers.map((value) => `<option value="${escapeHtml(value)}" ${state.tier === value ? "selected" : ""}>${value === "all" ? "Tất cả" : escapeHtml(value)}</option>`).join("")}
          </select>
        </label>
        <label>
          Loại thẻ
          <select data-filter="type">
            ${types.map((value) => `<option value="${escapeHtml(value)}" ${state.type === value ? "selected" : ""}>${value === "all" ? "Tất cả" : escapeHtml(value)}</option>`).join("")}
          </select>
        </label>
        <div class="segmented">
          <button class="${state.cardView === "grid" ? "active" : ""}" data-card-view="grid">Card</button>
          <button class="${state.cardView === "table" ? "active" : ""}" data-card-view="table">Bảng</button>
        </div>
      </div>

      <div class="result-line">${filteredCards.length} sản phẩm phù hợp</div>

      ${
        state.cardView === "table"
          ? renderCardTable(filteredCards)
          : `<div class="card-grid">${filteredCards.map((card) => renderProductCard(card, state)).join("")}</div>`
      }
    </section>
  `;
};

const renderProductCard = (card, state) => `
  <article class="product-card">
    <button class="product-image" data-card-id="${card.id}">
      <span class="card-visual">
        <img src="${card.image}" alt="${escapeHtml(card.name)}" />
      </span>
    </button>
    <div class="product-body">
      <div class="product-title-row">
        <div>
          <span class="card-badge">${escapeHtml(card.badge)}</span>
          <h2>${escapeHtml(card.name)}</h2>
        </div>
        <label class="compare-check">
          <input type="checkbox" data-compare-toggle="${card.id}" ${state.selectedCompareIds.includes(card.id) ? "checked" : ""} />
          So sánh
        </label>
      </div>
      <p>${escapeHtml(card.audience)}</p>
      <div class="info-strip">
        <span>${escapeHtml(card.annualFee)}</span>
        <span>${escapeHtml(card.limit)}</span>
      </div>
      <div class="chip-row">${renderChips(card.highlights.slice(0, 4))}</div>
      <button class="secondary-action" data-card-id="${card.id}">Xem chi tiết</button>
    </div>
  </article>
`;

const renderCardTable = (cards) => `
  <div class="table-wrap">
    <table>
      <thead>
        <tr>
          <th>Sản phẩm</th>
          <th>Loại</th>
          <th>Hạng</th>
          <th>Phí thường niên</th>
          <th>Hạn mức</th>
          <th>Thao tác</th>
        </tr>
      </thead>
      <tbody>
        ${cards
          .map(
            (card) => `
              <tr>
                <td>
                  <div class="table-product">
                    <img src="${card.image}" alt="${escapeHtml(card.name)}" />
                    <strong>${escapeHtml(card.name)}</strong>
                  </div>
                </td>
                <td>${escapeHtml(card.type)}</td>
                <td>${escapeHtml(card.tier)}</td>
                <td>${escapeHtml(card.annualFee)}</td>
                <td>${escapeHtml(card.limit)}</td>
                <td><button class="table-action" data-card-id="${card.id}">Chi tiết</button></td>
              </tr>
            `,
          )
          .join("")}
      </tbody>
    </table>
  </div>
`;
