import { cards } from "./data/cards.js";
import { promotions } from "./data/promotions.js";
import { customerSegments } from "./data/customerSegments.js";
import { renderNavigation } from "./components/navigation.js";
import { renderDashboard } from "./components/dashboard.js";
import { renderCardCatalog } from "./components/cardCatalog.js";
import { renderCardDetailModal } from "./components/cardDetailModal.js";
import { renderPromotions } from "./components/promotions.js";
import { renderCompare } from "./components/compare.js";
import { renderAdvisor } from "./components/advisor.js";
import { copyText, showToast } from "./utils/dom.js";

const state = {
  activeView: "dashboard",
  search: "",
  network: "all",
  tier: "all",
  type: "all",
  cardView: "grid",
  promotionCategory: "all",
  promotionStatus: "all",
  selectedCompareIds: ["cashback-online", "cashback-360"],
  selectedSegmentId: "online-shopper",
  selectedCardId: null,
  modalTab: "overview",
};

const app = document.querySelector("#app");

const render = (focusSelector = null, cursorPosition = null) => {
  app.innerHTML = `
    <div class="app-shell">
      ${renderNavigation(state.activeView)}
      <main class="content">
        ${renderView()}
      </main>
      ${state.selectedCardId ? renderCardDetailModal(cards.find((card) => card.id === state.selectedCardId), promotions, state.modalTab) : ""}
    </div>
  `;

  if (focusSelector) {
    requestAnimationFrame(() => {
      const element = document.querySelector(focusSelector);
      element?.focus();
      if (Number.isInteger(cursorPosition) && "setSelectionRange" in element) {
        element.setSelectionRange(cursorPosition, cursorPosition);
      }
    });
  }
};

const renderView = () => {
  if (state.activeView === "cards") return renderCardCatalog({ cards, state });
  if (state.activeView === "promotions") return renderPromotions({ promotions, cards, state });
  if (state.activeView === "compare") return renderCompare({ cards, selectedIds: state.selectedCompareIds });
  if (state.activeView === "advisor") return renderAdvisor({ segments: customerSegments, cards, promotions, selectedSegmentId: state.selectedSegmentId });
  return renderDashboard({ cards, promotions, segments: customerSegments });
};

document.addEventListener("click", async (event) => {
  const target = event.target.closest("button, a, input, [data-view], [data-card-id], [data-close-modal], [data-modal-tab], [data-copy]");
  if (!target) return;

  if (target.dataset.view) {
    state.activeView = target.dataset.view;
    render();
    return;
  }

  if (target.dataset.cardView) {
    state.cardView = target.dataset.cardView;
    render();
    return;
  }

  if (target.dataset.cardId) {
    state.selectedCardId = target.dataset.cardId;
    state.modalTab = "overview";
    render();
    return;
  }

  if (target.dataset.promotionId) {
    state.activeView = "promotions";
    render();
    return;
  }

  if (target.dataset.segmentId) {
    state.selectedSegmentId = target.dataset.segmentId;
    if (target.dataset.view) state.activeView = target.dataset.view;
    render();
    return;
  }

  if (target.dataset.modalTab) {
    state.modalTab = target.dataset.modalTab;
    state.selectedCardId = target.dataset.cardId;
    render();
    return;
  }

  if (target.dataset.closeModal) {
    state.selectedCardId = null;
    render();
    return;
  }

  if (target.dataset.copy) {
    await copyText(target.dataset.copy);
    showToast("Đã copy nội dung tư vấn");
  }
});

document.addEventListener("change", (event) => {
  const filter = event.target.dataset.filter;
  if (filter) {
    state[filter] = event.target.value;
    render();
    return;
  }

  const compareId = event.target.dataset.compareToggle;
  if (compareId) {
    if (event.target.checked) {
      if (state.selectedCompareIds.length >= 4) {
        event.target.checked = false;
        showToast("Chỉ chọn tối đa 4 thẻ để so sánh");
        return;
      }
      state.selectedCompareIds = [...state.selectedCompareIds, compareId];
    } else {
      state.selectedCompareIds = state.selectedCompareIds.filter((id) => id !== compareId);
    }
    render();
  }
});

document.addEventListener("input", (event) => {
  const filter = event.target.dataset.filter;
  if (!filter) return;
  const cursorPosition = event.target.selectionStart;
  state[filter] = event.target.value;
  render(`[data-filter="${filter}"]`, cursorPosition);
});

render();
