import { buildSalesScript } from "../data/salesScripts.js";
import { escapeHtml } from "../utils/format.js";
import { renderChips } from "../utils/dom.js";

export const renderAdvisor = ({ segments, cards, promotions, selectedSegmentId }) => {
  const selectedSegment = segments.find((segment) => segment.id === selectedSegmentId) || segments[0];
  const recommendedCards = cards.filter((card) => selectedSegment.cardIds.includes(card.id));
  const script = buildSalesScript(selectedSegment, cards, promotions);

  return `
    <section class="view-stack">
      <header class="page-header compact">
        <div>
          <p class="eyebrow">Trợ lý tư vấn</p>
          <h1>Gợi ý thẻ theo chân dung khách hàng</h1>
          <p>Chọn nhóm khách hàng để nhận sản phẩm phù hợp, lời thoại telesale, tin nhắn Zalo, email và phản hồi từ chối.</p>
        </div>
      </header>

      <div class="advisor-layout">
        <aside class="segment-panel">
          ${segments
            .map(
              (segment) => `
                <button class="segment-card ${segment.id === selectedSegment.id ? "active" : ""}" data-segment-id="${segment.id}">
                  <strong>${escapeHtml(segment.name)}</strong>
                  <span>${segment.needs.map(escapeHtml).join(" / ")}</span>
                </button>
              `,
            )
            .join("")}
        </aside>

        <div class="advisor-main">
          <article class="panel">
            <div class="panel-heading">
              <div>
                <p class="eyebrow">Sản phẩm đề xuất</p>
                <h2>${escapeHtml(selectedSegment.name)}</h2>
              </div>
            </div>
            <div class="recommend-grid">
              ${recommendedCards
                .slice(0, 4)
                .map(
                  (card) => `
                    <button class="recommend-card" data-card-id="${card.id}">
                      <img src="${card.image}" alt="${escapeHtml(card.name)}" />
                      <strong>${escapeHtml(card.name)}</strong>
                      <span>${escapeHtml(card.annualFee)}</span>
                      <div>${renderChips(card.highlights.slice(0, 2))}</div>
                    </button>
                  `,
                )
                .join("")}
            </div>
          </article>

          <div class="script-grid">
            ${renderScriptBox("Lời thoại telesale", script.call)}
            ${renderScriptBox("Tin nhắn Zalo", script.zalo)}
            ${renderScriptBox("Email tư vấn", script.email)}
            ${renderScriptBox("Khi khách từ chối", script.objection)}
          </div>
        </div>
      </div>
    </section>
  `;
};

const renderScriptBox = (title, text) => `
  <article class="script-card">
    <div>
      <h2>${escapeHtml(title)}</h2>
      <p>${escapeHtml(text).replaceAll("\n", "<br>")}</p>
    </div>
    <button class="secondary-action" data-copy="${escapeHtml(text)}">Copy</button>
  </article>
`;
