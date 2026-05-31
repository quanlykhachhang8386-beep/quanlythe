import { daysBetween, escapeHtml, formatDate, promotionStatusLabel } from "../utils/format.js";
import { renderChips, renderList } from "../utils/dom.js";

export const renderPromotions = ({ promotions, cards, state }) => {
  const categories = ["all", ...new Set(promotions.map((promotion) => promotion.category))];
  const statuses = ["all", "active", "ending", "ended"];
  const filtered = promotions.filter((promotion) => {
    const categoryMatch = state.promotionCategory === "all" || promotion.category === state.promotionCategory;
    const statusMatch = state.promotionStatus === "all" || promotion.status === state.promotionStatus;
    return categoryMatch && statusMatch;
  });

  return `
    <section class="view-stack">
      <header class="page-header compact">
        <div>
          <p class="eyebrow">Quản lý khuyến mại</p>
          <h1>Chương trình thẻ</h1>
          <p>Theo dõi trạng thái, thể lệ, thẻ áp dụng và cảnh báo sắp hết hạn.</p>
        </div>
      </header>

      <div class="toolbar">
        <label>
          Nhóm chương trình
          <select data-filter="promotionCategory">
            ${categories.map((value) => `<option value="${escapeHtml(value)}" ${state.promotionCategory === value ? "selected" : ""}>${value === "all" ? "Tất cả" : escapeHtml(value)}</option>`).join("")}
          </select>
        </label>
        <label>
          Trạng thái
          <select data-filter="promotionStatus">
            ${statuses.map((value) => `<option value="${value}" ${state.promotionStatus === value ? "selected" : ""}>${statusText(value)}</option>`).join("")}
          </select>
        </label>
      </div>

      <div class="promotion-grid">
        ${filtered.map((promotion) => renderPromotionCard(promotion, cards)).join("")}
      </div>
    </section>
  `;
};

const statusText = (status) =>
  ({
    all: "Tất cả",
    active: "Đang chạy",
    ending: "Sắp hết hạn",
    ended: "Đã kết thúc",
  })[status] || status;

const renderPromotionCard = (promotion, cards) => {
  const linkedCards = cards.filter((card) => promotion.cardIds.includes(card.id));
  const days = daysBetween(promotion.endDate);
  return `
    <article class="promotion-card ${days <= 7 && days >= 0 ? "warning" : ""}">
      <div class="promotion-top">
        <span class="status-pill ${promotion.status}">${promotionStatusLabel(promotion)}</span>
        <span>${formatDate(promotion.startDate)} - ${formatDate(promotion.endDate)}</span>
      </div>
      <h2>${escapeHtml(promotion.title)}</h2>
      <p>${escapeHtml(promotion.summary)}</p>
      <div class="detail-box flat">
        <h3>Cơ chế</h3>
        <ul>${renderList(promotion.mechanics)}</ul>
      </div>
      <div class="chip-row">${renderChips(linkedCards.slice(0, 5).map((card) => card.name))}</div>
      <a class="source-link" href="${escapeHtml(promotion.source)}" target="_blank" rel="noreferrer">Xem nguồn/ thể lệ</a>
    </article>
  `;
};
