import { escapeHtml, normalizeText } from "../utils/format.js";

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
    <button class="product-showcase" data-card-id="${card.id}" aria-label="Xem chi tiết ${escapeHtml(card.name)}">
      <span class="card-pair" aria-hidden="true">
        <span class="card-render card-render-portrait">
          <img src="${card.image}" alt="" />
        </span>
        <span class="card-render card-render-landscape">
          <img src="${card.image}" alt="" />
        </span>
      </span>
    </button>
    <div class="product-body">
      <div class="product-meta-row">
        <span class="card-badge">${escapeHtml(card.badge)}</span>
        <label class="compare-check">
          <input type="checkbox" data-compare-toggle="${card.id}" ${state.selectedCompareIds.includes(card.id) ? "checked" : ""} />
          So sánh
        </label>
      </div>
      <h2>${escapeHtml(card.name)}</h2>
      <p class="product-audience">${renderAudience(card.audience)}</p>
      <div class="benefit-list">${renderBenefitRows(card)}</div>
      <button class="secondary-action" data-card-id="${card.id}">Xem chi tiết</button>
    </div>
  </article>
`;

const renderAudience = (audience) =>
  audience
    .split("/")
    .map((item) => item.trim())
    .filter(Boolean)
    .slice(0, 4)
    .map(escapeHtml)
    .join("<span>|</span>");

const renderBenefitRows = (card) => {
  const rows = card.highlights.slice(0, 3);
  const fallbackRows = [card.limit, card.annualFee, card.interest].filter(Boolean);
  return (rows.length ? rows : fallbackRows)
    .slice(0, 3)
    .map((benefit, index) => renderBenefitRow(benefit, index))
    .join("");
};

const renderBenefitRow = (benefit, index) => {
  const cleaned = benefit.replace(/\s+/g, " ").trim();
  const valueMatch = cleaned.match(/(\d+(?:[,.]\d+)?\s*%|0%\s*phí|không giới hạn|miễn phí|tối đa\s*[\d,.]+\s*(?:đ|vnđ|điểm)?)/i);
  const value = valueMatch?.[0] || ["01", "02", "03"][index];
  const description = valueMatch ? cleaned.replace(valueMatch[0], "").replace(/^[:—–\-\s]+/, "").trim() : cleaned;

  return `
    <div class="benefit-row">
      <span class="benefit-icon">${index + 1}</span>
      <strong>${escapeHtml(value)}</strong>
      <span>${escapeHtml(description || cleaned)}</span>
    </div>
  `;
};

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
