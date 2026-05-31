import { daysBetween, escapeHtml, formatDate, promotionStatusLabel } from "../utils/format.js";
import { renderChips } from "../utils/dom.js";

export const renderDashboard = ({ cards, promotions, segments }) => {
  const activePromotions = promotions.filter((promotion) => daysBetween(promotion.endDate) >= 0);
  const endingPromotions = activePromotions.filter((promotion) => daysBetween(promotion.endDate) <= 7);
  const priorityCards = cards.filter((card) =>
    ["bidv-visa-cashback-online", "bidv-visa-cashback-360", "bidv-mastercard-world-travel", "bidv-jcb-hybrid"].includes(card.id),
  );
  const networks = [...new Set(cards.map((card) => card.network))];

  return `
    <section class="view-stack">
      <header class="page-header">
        <div>
          <p class="eyebrow">Ngày dữ liệu: 31/05/2026</p>
          <h1>Cổng quản lý sản phẩm thẻ và khuyến mại</h1>
          <p>Tra cứu nhanh, tư vấn đúng sản phẩm, kiểm soát chương trình đang chạy và sắp hết hạn.</p>
        </div>
        <button class="primary-action" data-view="advisor">Mở trợ lý tư vấn</button>
      </header>

      <div class="metric-grid">
        <article class="metric-card">
          <span>Sản phẩm thẻ</span>
          <strong>${cards.length}</strong>
          <small>${networks.join(", ")}</small>
        </article>
        <article class="metric-card">
          <span>Khuyến mại còn hiệu lực</span>
          <strong>${activePromotions.length}</strong>
          <small>${endingPromotions.length} chương trình cần theo dõi sát</small>
        </article>
        <article class="metric-card">
          <span>Nhóm khách hàng</span>
          <strong>${segments.length}</strong>
          <small>Có kịch bản tư vấn mẫu</small>
        </article>
        <article class="metric-card urgent">
          <span>Cảnh báo</span>
          <strong>${endingPromotions.length}</strong>
          <small>Khuyến mại sắp hết hạn</small>
        </article>
      </div>

      <div class="dashboard-grid">
        <article class="panel large-panel">
          <div class="panel-heading">
            <div>
              <p class="eyebrow">Ưu tiên bán hôm nay</p>
              <h2>Thẻ có câu chuyện tư vấn rõ</h2>
            </div>
            <button class="ghost-action" data-view="cards">Xem kho thẻ</button>
          </div>
          <div class="priority-list">
            ${priorityCards
              .map(
                (card) => `
                  <button class="priority-card" data-card-id="${card.id}">
                    <img src="${card.image}" alt="${escapeHtml(card.name)}" />
                    <div>
                      <strong>${escapeHtml(card.name)}</strong>
                      <span>${escapeHtml(card.audience)}</span>
                      <div>${renderChips(card.highlights.slice(0, 3))}</div>
                    </div>
                  </button>
                `,
              )
              .join("")}
          </div>
        </article>

        <article class="panel">
          <div class="panel-heading">
            <div>
              <p class="eyebrow">Khuyến mại</p>
              <h2>Sắp hết hạn</h2>
            </div>
          </div>
          <div class="timeline-list">
            ${endingPromotions
              .map(
                (promotion) => `
                  <button class="timeline-item" data-promotion-id="${promotion.id}">
                    <span class="status-dot"></span>
                    <div>
                      <strong>${escapeHtml(promotion.title)}</strong>
                      <small>${formatDate(promotion.endDate)} - ${promotionStatusLabel(promotion)}</small>
                    </div>
                  </button>
                `,
              )
              .join("") || `<p class="muted">Không có chương trình sắp hết hạn.</p>`}
          </div>
        </article>

        <article class="panel">
          <div class="panel-heading">
            <div>
              <p class="eyebrow">Gợi ý nhanh</p>
              <h2>Chân dung khách hàng</h2>
            </div>
          </div>
          <div class="segment-list">
            ${segments
              .map(
                (segment) => `
                  <button class="segment-row" data-segment-id="${segment.id}" data-view="advisor">
                    <strong>${escapeHtml(segment.name)}</strong>
                    <span>${segment.needs.slice(0, 3).map(escapeHtml).join(" / ")}</span>
                  </button>
                `,
              )
              .join("")}
          </div>
        </article>
      </div>
    </section>
  `;
};
