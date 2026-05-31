import { escapeHtml } from "../utils/format.js";
import { renderChips, renderList } from "../utils/dom.js";

export const renderCardDetailModal = (card, promotions, activeTab = "overview") => {
  const linkedPromotions = promotions.filter((promotion) => promotion.cardIds.includes(card.id));
  const tabs = [
    ["overview", "Tổng quan"],
    ["conditions", "Điều kiện"],
    ["benefits", "Ưu đãi"],
    ["script", "Kịch bản"],
    ["documents", "Tài liệu"],
  ];

  return `
    <div class="modal-backdrop" data-close-modal="true">
      <article class="modal-panel" role="dialog" aria-modal="true">
        <button class="modal-close" data-close-modal="true">Đóng</button>
        <div class="modal-hero">
          <img src="${card.image}" alt="${escapeHtml(card.name)}" />
          <div>
            <span class="card-badge">${escapeHtml(card.badge)}</span>
            <h2>${escapeHtml(card.name)}</h2>
            <p>${escapeHtml(card.audience)}</p>
            <div class="chip-row">${renderChips(card.highlights)}</div>
          </div>
        </div>
        <div class="modal-tabs">
          ${tabs.map(([id, label]) => `<button class="${activeTab === id ? "active" : ""}" data-modal-tab="${id}" data-card-id="${card.id}">${label}</button>`).join("")}
        </div>
        <div class="modal-content">
          ${renderModalTab(card, linkedPromotions, activeTab)}
        </div>
      </article>
    </div>
  `;
};

const renderModalTab = (card, promotions, activeTab) => {
  if (activeTab === "conditions") {
    return `
      <div class="two-column">
        <div class="detail-box">
          <h3>Điều kiện phát hành</h3>
          <ul>${renderList(card.conditions)}</ul>
        </div>
        <div class="detail-box">
          <h3>Thông số chính</h3>
          <dl>
            <dt>Loại thẻ</dt><dd>${escapeHtml(card.type)}</dd>
            <dt>Hạng thẻ</dt><dd>${escapeHtml(card.tier)}</dd>
            <dt>Phí thường niên</dt><dd>${escapeHtml(card.annualFee)}</dd>
            <dt>Hạn mức</dt><dd>${escapeHtml(card.limit)}</dd>
            <dt>Lãi suất</dt><dd>${escapeHtml(card.interest)}</dd>
          </dl>
        </div>
      </div>
    `;
  }

  if (activeTab === "benefits") {
    return `
      <div class="detail-box">
        <h3>Ưu đãi và điểm bán hàng</h3>
        <ul>${renderList(card.benefits)}</ul>
      </div>
      <div class="detail-box">
        <h3>Khuyến mại liên quan</h3>
        <div class="mini-list">
          ${
            promotions
              .map(
                (promotion) => `
                  <div>
                    <strong>${escapeHtml(promotion.title)}</strong>
                    <span>${escapeHtml(promotion.summary)}</span>
                  </div>
                `,
              )
              .join("") || `<p class="muted">Chưa gắn chương trình khuyến mại.</p>`
          }
        </div>
      </div>
    `;
  }

  if (activeTab === "script") {
    const script = `Em đề xuất ${card.name} cho nhóm khách ${card.audience}. Điểm mạnh chính là ${card.highlights.join(", ")}. Với nhu cầu hiện tại, thẻ giúp khách hàng tối ưu chi tiêu và có thể kết hợp các chương trình ưu đãi BIDV đang áp dụng nếu giao dịch đạt điều kiện.`;
    return `
      <div class="detail-box script-box">
        <h3>Kịch bản tư vấn nhanh</h3>
        <p>${escapeHtml(script)}</p>
        <button class="primary-action" data-copy="${escapeHtml(script)}">Copy kịch bản</button>
      </div>
    `;
  }

  if (activeTab === "documents") {
    return `
      <div class="detail-box">
        <h3>Tài liệu</h3>
        ${
          card.documents.length
            ? `<ul>${card.documents.map((doc) => `<li>${escapeHtml(doc)}</li>`).join("")}</ul>`
            : `<p class="muted">Chưa có tài liệu riêng cho sản phẩm này trong thư mục dự án.</p>`
        }
        <a class="source-link" href="${escapeHtml(card.source)}" target="_blank" rel="noreferrer">Mở nguồn tham chiếu</a>
      </div>
    `;
  }

  return `
    <div class="two-column">
      <div class="detail-box">
        <h3>Tổng quan</h3>
        <p>${escapeHtml(card.audience)}</p>
        <div class="stats-inline">
          <span><b>${escapeHtml(card.network)}</b>Mạng thẻ</span>
          <span><b>${escapeHtml(card.tier)}</b>Hạng thẻ</span>
          <span><b>${escapeHtml(card.annualFee)}</b>Phí</span>
        </div>
      </div>
      <div class="detail-box">
        <h3>Điểm nổi bật</h3>
        <ul>${renderList(card.highlights)}</ul>
      </div>
    </div>
  `;
};
