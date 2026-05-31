import { escapeHtml } from "../utils/format.js";

export const renderCompare = ({ cards, selectedIds }) => {
  const selectedCards = cards.filter((card) => selectedIds.includes(card.id));
  return `
    <section class="view-stack">
      <header class="page-header compact">
        <div>
          <p class="eyebrow">So sánh thẻ</p>
          <h1>Chọn 2-4 sản phẩm để chốt tư vấn</h1>
          <p>So sánh phí, hạn mức, ưu đãi, nhóm khách hàng và điểm mạnh để tránh chọn nhầm sản phẩm.</p>
        </div>
      </header>

      <div class="compare-picker">
        ${cards
          .map(
            (card) => `
              <label class="compare-option ${selectedIds.includes(card.id) ? "active" : ""}">
                <input type="checkbox" data-compare-toggle="${card.id}" ${selectedIds.includes(card.id) ? "checked" : ""} />
                <img src="${card.image}" alt="${escapeHtml(card.name)}" />
                <span>${escapeHtml(card.name)}</span>
              </label>
            `,
          )
          .join("")}
      </div>

      ${
        selectedCards.length < 2
          ? `<div class="empty-state"><h2>Chọn ít nhất 2 thẻ</h2><p>Bảng so sánh sẽ hiển thị ngay sau khi chọn đủ sản phẩm.</p></div>`
          : renderCompareTable(selectedCards)
      }
    </section>
  `;
};

const renderCompareTable = (cards) => `
  <div class="table-wrap compare-table">
    <table>
      <thead>
        <tr>
          <th>Tiêu chí</th>
          ${cards.map((card) => `<th>${escapeHtml(card.name)}</th>`).join("")}
        </tr>
      </thead>
      <tbody>
        ${renderRow("Ảnh thẻ", cards.map((card) => `<img class="compare-img" src="${card.image}" alt="${escapeHtml(card.name)}" />`))}
        ${renderRow("Loại / Hạng", cards.map((card) => `${escapeHtml(card.type)}<br><strong>${escapeHtml(card.tier)}</strong>`))}
        ${renderRow("Phí thường niên", cards.map((card) => escapeHtml(card.annualFee)))}
        ${renderRow("Hạn mức", cards.map((card) => escapeHtml(card.limit)))}
        ${renderRow("Phù hợp", cards.map((card) => escapeHtml(card.audience)))}
        ${renderRow("Điểm mạnh", cards.map((card) => `<ul>${card.highlights.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`))}
      </tbody>
    </table>
    <button class="primary-action" data-copy="${escapeHtml(buildCompareScript(cards))}">Copy gợi ý tư vấn</button>
  </div>
`;

const renderRow = (label, values) => `
  <tr>
    <td><strong>${label}</strong></td>
    ${values.map((value) => `<td>${value}</td>`).join("")}
  </tr>
`;

const buildCompareScript = (cards) => {
  const [first, second] = cards;
  return `Nếu khách ưu tiên ${first.highlights.slice(0, 2).join(", ")}, nên tư vấn ${first.name}. Nếu khách quan tâm ${second.highlights.slice(0, 2).join(", ")}, có thể chuyển sang ${second.name}. Các lựa chọn còn lại phù hợp khi nhu cầu cụ thể hơn về ${cards.map((card) => card.audience).join(" / ")}.`;
};
