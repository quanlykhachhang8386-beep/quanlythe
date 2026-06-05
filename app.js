const DATA_URLS = {
  cards: "./bidv_card_web_data/cards.json",
  details: "./bidv_card_web_data/details.json",
  promotions: "./bidv_card_web_data/promotions.json",
  services: "./bidv_card_web_data/services.json",
  showcase: "./bidv_card_web_data/showcase.json",
};

const FILTERS = [
  { id: "all", label: "Tất cả" },
  { id: "visa", label: "Visa" },
  { id: "mastercard", label: "Mastercard" },
  { id: "jcb", label: "JCB" },
  { id: "premium", label: "Cao cấp" },
  { id: "cashback", label: "Hoàn tiền" },
  { id: "travel", label: "Du lịch" },
  { id: "health", label: "Sức khỏe" },
  { id: "online", label: "Online" },
  { id: "lowrate", label: "Lãi suất thấp" },
  { id: "new", label: "Khách hàng mới" },
  { id: "installment", label: "Trả góp" },
];

const DRAWER_TABS = [
  { id: "overview", label: "Tổng quan" },
  { id: "benefits", label: "Đặc quyền" },
  { id: "fees", label: "Biểu phí" },
  { id: "conditions", label: "Điều kiện" },
  { id: "promotions", label: "Khuyến mại" },
  { id: "notes", label: "Lưu ý" },
];

const QUICK_ADVISOR_INPUTS = [
  "Khách hàng hay mua sắm online trên Shopee, Lazada, TikTok Shop và thích hoàn tiền.",
  "Khách hàng thường đi công tác quốc tế, cần bảo hiểm du lịch và đặc quyền sân bay.",
  "Khách hàng quan tâm y tế, bảo hiểm, làm đẹp, sức khỏe gia đình.",
  "Khách hàng cần lãi suất thấp, rút tiền linh hoạt và hỗ trợ trả góp.",
];

const OVERVIEW_ITEMS = [
  {
    id: "cashback",
    icon: "💸",
    title: "Thẻ hoàn tiền",
    description: "Ưu tiên khách thích chi tiêu thực tế, mua sắm online, gia đình hoặc y tế.",
    cta: "Xem ngay",
    span: "medium",
  },
  {
    id: "travel",
    icon: "✈️",
    title: "Thẻ du lịch",
    description: "Tập trung các dòng có bảo hiểm, ưu đãi đặt phòng và quyền lợi sân bay.",
    cta: "Lọc nhóm",
    span: "medium",
  },
  {
    id: "premium",
    icon: "👑",
    title: "Thẻ cao cấp",
    description: "Nhóm sản phẩm có golf, lounge, phong cách sống và tích điểm nổi bật.",
    cta: "Khám phá",
    span: "medium",
  },
  {
    id: "lowrate",
    icon: "📉",
    title: "Lãi suất thấp",
    description: "Phù hợp tư vấn khách cần chi phí vốn thấp và linh hoạt dư nợ.",
    cta: "Xem nhóm",
    span: "medium",
  },
  {
    id: "online",
    icon: "🛍️",
    title: "Nhu cầu online",
    description: "Gợi ý nhanh cho khách giao dịch TMĐT, ví số và mua sắm số hóa.",
    cta: "Tư vấn ngay",
    span: "medium",
  },
  {
    id: "activePromotions",
    icon: "🎯",
    title: "Khuyến mại còn hiệu lực",
    description: "Chỉ giữ spotlight cho các chương trình còn hiệu lực để tránh tư vấn sai.",
    cta: "Xem ưu đãi",
    span: "wide",
  },
  {
    id: "services",
    icon: "⚙️",
    title: "Dịch vụ đi kèm",
    description: "Trả góp, SmartBanking, số đẹp và các dịch vụ mở rộng hỗ trợ bán chéo.",
    cta: "Xem dịch vụ",
    span: "wide",
  },
];

const IMAGE_MAP = {
  BIDV_VISA_INFINITE: "./assets_web/cards/visa-infinite.png",
  BIDV_JCB_ULTIMATE: "./assets_web/cards/jcb-ultimate.png",
  BIDV_MC_WORLD_TRAVEL: "./assets_web/cards/mastercard-world-travel.png",
  BIDV_VISA_CASHBACK_360: "./assets_web/cards/visa-cashback-360.png",
  BIDV_VISA_CASHBACK_ONLINE: "./assets_web/cards/visa-cashback-online.png",
  BIDV_JCB_WELL_BEING: "./assets_web/cards/jcb-well-being.png",
  BIDV_MC_INSPIRE: "./assets_web/cards/mastercard-inspire.png",
  BIDV_VISA_FLEXI: "./assets_web/cards/visa-flexi.png",
  BIDV_VISA_EASY: "./assets_web/cards/visa-easy.png",
  BIDV_VISA_FLEXI_SAO_VANG: "./assets_web/cards/visa-sao-vang.png",
};

const CARD_PROFILE = {
  BIDV_VISA_INFINITE: {
    categories: ["premium", "travel"],
    keywords: ["cao cấp", "golf", "resort", "lounge", "premium", "private", "đặc quyền"],
    consultPoints: [
      "Chốt đúng gói phí thường niên phù hợp với mức độ sử dụng đặc quyền.",
      "Nhấn mạnh lifestyle, golf, lounge và ưu thế miễn phạt chậm thanh toán.",
    ],
  },
  BIDV_JCB_ULTIMATE: {
    categories: ["premium", "travel", "cashback"],
    keywords: ["jcb", "nhật", "ẩm thực", "golf", "du lịch", "nhà hàng"],
    consultPoints: [
      "Hiệu quả khi khách hay chi tiêu ẩm thực, đặc biệt có liên quan Nhật Bản.",
      "Nên tư vấn thêm điều kiện miễn phí thường niên năm tiếp theo.",
    ],
  },
  BIDV_MC_WORLD_TRAVEL: {
    categories: ["travel", "premium"],
    keywords: ["du lịch", "công tác", "nước ngoài", "khách sạn", "sân bay", "bảo hiểm"],
    consultPoints: [
      "Phù hợp khách giao dịch ngoại tệ và có lịch công tác thường xuyên.",
      "Cần nhắc kỹ phí phạt chậm trả và điều kiện hoàn phí giao dịch nước ngoài.",
    ],
  },
  BIDV_VISA_CASHBACK_360: {
    categories: ["cashback", "health"],
    keywords: ["siêu thị", "gia đình", "giáo dục", "y tế", "chi tiêu định kỳ", "hoàn tiền"],
    consultPoints: [
      "Bán tốt khi khách có dòng chi tiêu gia đình đều hằng tháng.",
      "Nhấn vào hạn mức hoàn tiền theo tháng để đặt kỳ vọng đúng.",
    ],
  },
  BIDV_VISA_CASHBACK_ONLINE: {
    categories: ["cashback", "online", "new"],
    keywords: ["online", "shopee", "lazada", "tiki", "tiktok", "tmđt", "mua sắm"],
    consultPoints: [
      "Phù hợp nhóm khách trẻ, giao dịch TMĐT thường xuyên và chuộng hoàn tiền.",
      "Cần nói rõ nhóm giao dịch không nằm trong diện hoàn tiền nếu có.",
    ],
  },
  BIDV_JCB_WELL_BEING: {
    categories: ["cashback", "health"],
    keywords: ["sức khỏe", "bệnh viện", "bảo hiểm", "làm đẹp", "y tế", "thời trang"],
    consultPoints: [
      "Rất hợp để chốt theo nhu cầu chăm sóc gia đình và bảo hiểm.",
      "Tư vấn thêm ưu đãi y tế và điều kiện doanh số để nhận mức hoàn cao.",
    ],
  },
  BIDV_MC_INSPIRE: {
    categories: ["travel", "new"],
    keywords: ["du lịch", "khám phá", "người trẻ", "dặm bay"],
    consultPoints: [
      "Nên kiểm tra trạng thái phát hành mới trước khi tư vấn chốt.",
      "Phù hợp câu chuyện lifestyle và du lịch tự túc cho khách trẻ.",
    ],
  },
  BIDV_VISA_FLEXI: {
    categories: ["new", "installment"],
    keywords: ["cơ bản", "linh hoạt", "lần đầu", "trả góp", "phổ thông"],
    consultPoints: [
      "Giữ thông điệp đơn giản: phí dễ tiếp cận, miễn lãi tối đa 45 ngày.",
      "Cần nhắc khách về mặt bằng lãi suất hiện tại 22%/năm.",
    ],
  },
  BIDV_VISA_EASY: {
    categories: ["lowrate", "installment", "new"],
    keywords: ["lãi suất thấp", "rút tiền", "xoay vòng", "trả góp", "easy"],
    consultPoints: [
      "Điểm mạnh số 1 là lãi suất 12%/năm và phí rút tiền BIDV 1%.",
      "Phù hợp khách có nhu cầu giữ dư nợ hoặc cần tiền mặt linh hoạt.",
    ],
  },
  BIDV_VISA_FLEXI_SAO_VANG: {
    categories: ["new", "installment"],
    keywords: ["sao vàng", "chuyên biệt", "lực lượng vũ trang"],
    consultPoints: [
      "Phải kiểm chứng điều kiện phát hành đúng đối tượng chuyên biệt.",
      "Không nên tư vấn vượt ngoài phạm vi chính sách riêng của dòng thẻ này.",
    ],
  },
};

const state = {
  cards: [],
  promotions: [],
  services: [],
  detailsByCard: new Map(),
  showcaseByCard: new Map(),
  activeFilter: "all",
  query: "",
  segment: "all",
  compareIds: [],
  drawerCardId: null,
  drawerTab: "overview",
};

const el = {};

document.addEventListener("DOMContentLoaded", init);

async function init() {
  cacheElements();
  bindEvents();

  try {
    const [cards, details, promotions, services, showcase] = await Promise.all([
      fetchJson(DATA_URLS.cards),
      fetchJson(DATA_URLS.details),
      fetchJson(DATA_URLS.promotions),
      fetchJson(DATA_URLS.services),
      fetchJson(DATA_URLS.showcase),
    ]);

    state.detailsByCard = groupBy(details, "card_id");
    state.promotions = enrichPromotions(promotions);
    state.services = services;
    state.showcaseByCard = new Map(showcase.map((item) => [item.cardId, item]));
    state.cards = cards
      .map((card) => enrichCard(card))
      .sort((a, b) => (a.order || 0) - (b.order || 0));

    hydrateStaticUI();
    renderAll();
  } catch (error) {
    console.error(error);
    el.cardsGrid.innerHTML = "";
    el.cardsEmpty.hidden = false;
    el.cardsEmpty.innerHTML = `
      <strong>Không thể tải dữ liệu</strong>
      <span>Vui lòng chạy qua server tĩnh và kiểm tra đường dẫn tới thư mục <code>bidv_card_web_data</code>.</span>
    `;
  }
}

function cacheElements() {
  const ids = [
    "mobileMenuButton",
    "mobileNav",
    "heroSearch",
    "heroSearchButton",
    "heroMetrics",
    "overviewGrid",
    "catalogSearch",
    "segmentFilter",
    "filterChips",
    "catalogCount",
    "catalogMeta",
    "cardsGrid",
    "cardsEmpty",
    "advisorInput",
    "advisorButton",
    "advisorResult",
    "quickAdvisorPills",
    "clearCompareButton",
    "compareNotice",
    "compareDesktop",
    "compareMobile",
    "promotionSpotlight",
    "promotionList",
    "usageNotes",
    "serviceTags",
    "drawerOverlay",
    "cardDrawer",
    "drawerClose",
    "drawerMeta",
    "drawerTitle",
    "drawerHero",
    "drawerTabs",
    "drawerBody",
    "metricTemplate",
  ];

  ids.forEach((id) => {
    el[id] = document.getElementById(id);
  });
}

function bindEvents() {
  el.mobileMenuButton.addEventListener("click", toggleMobileMenu);
  el.mobileNav.addEventListener("click", onMobileNavClick);
  el.heroSearchButton.addEventListener("click", handleHeroSearch);
  el.heroSearch.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleHeroSearch();
    }
  });

  el.catalogSearch.addEventListener("input", (event) => {
    state.query = event.target.value.trim().toLowerCase();
    renderCatalog();
  });

  el.segmentFilter.addEventListener("change", (event) => {
    state.segment = event.target.value;
    renderCatalog();
  });

  el.advisorButton.addEventListener("click", runAdvisor);
  el.clearCompareButton.addEventListener("click", () => {
    state.compareIds = [];
    renderCatalog();
    renderCompare();
    setCompareNotice("");
  });

  el.drawerOverlay.addEventListener("click", closeDrawer);
  el.drawerClose.addEventListener("click", closeDrawer);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && state.drawerCardId) {
      closeDrawer();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 860 && !el.mobileNav.hidden) {
      toggleMobileMenu(false);
    }
  });
}

function fetchJson(url) {
  return fetch(url).then((response) => {
    if (!response.ok) {
      throw new Error(`Không tải được ${url}`);
    }
    return response.json();
  });
}

function groupBy(items, key) {
  const map = new Map();
  items.forEach((item) => {
    const bucket = map.get(item[key]) || [];
    bucket.push(item);
    map.set(item[key], bucket);
  });
  return map;
}

function enrichCard(rawCard) {
  const profile = CARD_PROFILE[rawCard.id] || { categories: [], keywords: [], consultPoints: [] };
  const detailItems = state.detailsByCard.get(rawCard.id) || [];
  const feeDetail = detailItems.find((item) => item.group === "fee");
  const benefitItems = detailItems.filter((item) => item.group === "feature" || item.group === "policy");
  const conditionItems = detailItems.filter((item) => item.group === "condition");
  const cardPromotions = state.promotions.filter(
    (promotion) => promotion.card_id === rawCard.id || promotion.card_id === "ALL_CREDIT_CARDS"
  );

  const annualFee = extractLine(feeDetail?.content_items, "Phí thường niên thẻ chính") || "Theo quy định";
  const interestRate =
    extractLine(feeDetail?.content_items, "Lãi suất") ||
    extractLine(feeDetail?.content_items, "Lãi suất tín dụng") ||
    "Theo quy định";

  const highlight = rawCard.diem_noi_bat_ngan || rawCard.title || rawCard.tag;
  const suitableFor = rawCard.doi_tuong_phu_hop || rawCard.target_items?.join(", ") || "Đang cập nhật";
  const allTags = unique(
    [
      rawCard.to_chuc_the,
      rawCard.phan_khuc,
      rawCard.tag,
      ...profile.categories.map(filterIdToLabel),
    ].filter(Boolean)
  );

  const searchable = [
    rawCard.ten_the,
    rawCard.ten_ngan,
    rawCard.loai_the,
    rawCard.to_chuc_the,
    rawCard.phan_khuc,
    rawCard.tag,
    rawCard.description,
    rawCard.diem_noi_bat_ngan,
    suitableFor,
    detailItems.map((item) => item.title).join(" "),
    benefitItems.map((item) => (item.content_items || []).join(" ")).join(" "),
    profile.keywords.join(" "),
  ]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();

  const showcase = getShowcaseData(rawCard, allTags, detailItems);

  return {
    id: rawCard.id,
    order: rawCard.order || 999,
    name: rawCard.ten_the,
    shortName: rawCard.ten_ngan || rawCard.ten_the,
    network: rawCard.to_chuc_the,
    segment: rawCard.phan_khuc,
    category: profile.categories,
    tags: allTags,
    annualFee,
    interestRate,
    highlight,
    description: rawCard.description || "",
    suitableFor,
    note: unique([rawCard.ghi_chu_kiem_chung, feeDetail?.ghi_chu, ...profile.consultPoints]).filter(Boolean),
    highlightItems: rawCard.highlight_items || [],
    targetItems: rawCard.target_items || [],
    benefits: benefitItems,
    conditions: conditionItems,
    promotions: cardPromotions,
    image: IMAGE_MAP[rawCard.id] || "",
    posterName: showcase.cardName,
    posterPortrait: showcase.cardImagePortrait,
    posterLandscape: showcase.cardImageLandscape,
    posterCategories: showcase.categories,
    posterBenefits: showcase.benefits,
    searchable,
    profileKeywords: profile.keywords,
    consultPoints: profile.consultPoints,
  };
}

function enrichPromotions(promotions) {
  return promotions.map((promotion) => {
    const status = getPromotionStatus(promotion.to_date_iso);
    return {
      ...promotion,
      computedStatus: status,
      cardLabel: promotion.card_id === "ALL_CREDIT_CARDS" ? "Toàn bộ thẻ tín dụng" : promotion.card_id,
    };
  });
}

function hydrateStaticUI() {
  const segments = unique(state.cards.map((card) => card.segment));
  segments.forEach((segment) => {
    const option = document.createElement("option");
    option.value = segment;
    option.textContent = segment;
    el.segmentFilter.appendChild(option);
  });

  el.filterChips.innerHTML = FILTERS.map(
    (filter) => `
      <button class="filter-chip ${filter.id === state.activeFilter ? "active" : ""}" type="button" data-filter="${filter.id}">
        ${filter.label}
      </button>
    `
  ).join("");
  el.filterChips.addEventListener("click", onFilterChipClick);

  el.overviewGrid.innerHTML = OVERVIEW_ITEMS.map(
    (item) => `
      <button class="overview-card" type="button" data-overview="${item.id}" data-span="${item.span}">
        <span class="overview-icon">${item.icon}</span>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <span>${item.cta}</span>
      </button>
    `
  ).join("");
  el.overviewGrid.addEventListener("click", onOverviewClick);

  el.quickAdvisorPills.innerHTML = QUICK_ADVISOR_INPUTS.map(
    (text) => `<button class="quick-pill" type="button" data-advisor="${escapeHtml(text)}">${escapeHtml(shorten(text, 70))}</button>`
  ).join("");
  el.quickAdvisorPills.addEventListener("click", onQuickAdvisorClick);

  el.usageNotes.innerHTML = [
    "Thông tin biểu phí, lãi suất, ưu đãi cần được kiểm chứng theo văn bản BIDV từng thời kỳ.",
    "Các chương trình khuyến mại cần kiểm tra ngày hiệu lực trước khi tư vấn khách hàng.",
    "Một số sản phẩm có thể đã dừng phát hành mới nhưng vẫn duy trì với khách hàng hiện hữu.",
    "Không tự ý tư vấn điều kiện ngoài quy định.",
  ]
    .map((item) => `<li>${item}</li>`)
    .join("");

  el.serviceTags.innerHTML = unique(
    state.services.map((service) => `${groupLabel(service.group)}: ${service.title}`)
  )
    .slice(0, 12)
    .map((tag) => `<span class="cloud-pill">${escapeHtml(tag)}</span>`)
    .join("");
}

function renderAll() {
  renderHeroMetrics();
  renderCatalog();
  renderCompare();
  renderPromotions();
}

function renderHeroMetrics() {
  const metrics = [
    { value: `${state.cards.length}`, label: "Số sản phẩm thẻ" },
    { value: `${countNeedGroups()}`, label: "Số nhóm nhu cầu" },
    { value: `${state.promotions.filter((item) => item.computedStatus === "active").length}`, label: "Khuyến mại còn hiệu lực" },
  ];

  el.heroMetrics.innerHTML = "";
  metrics.forEach((metric) => {
    const node = el.metricTemplate.content.firstElementChild.cloneNode(true);
    node.querySelector(".metric-value").textContent = metric.value;
    node.querySelector(".metric-label").textContent = metric.label;
    el.heroMetrics.appendChild(node);
  });
}

function renderCatalog() {
  const list = getFilteredCards();

  el.catalogCount.textContent = `${list.length}/${state.cards.length} thẻ`;
  el.catalogMeta.textContent =
    list.length > 0
      ? `Lọc bởi: ${filterIdToLabel(state.activeFilter)}${state.segment !== "all" ? ` · ${state.segment}` : ""}${state.query ? ` · "${state.query}"` : ""}`
      : "Không có thẻ phù hợp bộ lọc hiện tại";

  document.querySelectorAll(".filter-chip").forEach((button) => {
    button.classList.toggle("active", button.dataset.filter === state.activeFilter);
  });

  if (list.length === 0) {
    el.cardsGrid.innerHTML = "";
    el.cardsEmpty.hidden = false;
    el.cardsEmpty.innerHTML = `
      <strong>Không tìm thấy thẻ phù hợp</strong>
      <span>Thử đổi tổ chức thẻ, phân khúc hoặc rút ngắn từ khóa để mở rộng kết quả.</span>
    `;
    return;
  }

  el.cardsEmpty.hidden = true;
  el.cardsGrid.innerHTML = list.map(renderCardItem).join("");
  el.cardsGrid.querySelectorAll("[data-detail]").forEach((button) => {
    button.addEventListener("click", () => openDrawer(button.dataset.detail));
  });
  el.cardsGrid.querySelectorAll("[data-compare]").forEach((button) => {
    button.addEventListener("click", () => toggleCompare(button.dataset.compare));
  });
}

function renderCardItem(card) {
  const compareActive = state.compareIds.includes(card.id);
  const image = card.posterLandscape || card.posterPortrait || card.image || "";
  const summary =
    card.posterBenefits
      .slice(0, 2)
      .map((benefit) => `${benefit.value} ${benefit.title}`.trim())
      .join(" · ") || card.highlight;

  return `
    <article class="card-item showcase-poster">
      <div class="showcase-layout">
        <div class="showcase-head">
          <span class="showcase-network">${escapeHtml(card.network)}</span>
          <span class="showcase-meta">${escapeHtml(card.segment)}</span>
        </div>

        <div class="showcase-body">
          <div class="showcase-art">
            ${image ? `<img src="${image}" alt="${escapeHtml(card.posterName)}" loading="lazy" />` : ""}
          </div>
          <div class="showcase-copy">
            <h3>${escapeHtml(card.posterName)}</h3>
            <p class="showcase-highlight">${escapeHtml(card.highlight)}</p>
            <div class="showcase-categories" aria-label="Nhóm nhu cầu sử dụng">
              ${card.posterCategories.map((category) => `<span>${escapeHtml(category)}</span>`).join("")}
            </div>
            <p class="showcase-summary">${escapeHtml(shorten(summary, 180))}</p>
          </div>
        </div>

        <div class="showcase-footer">
          <div class="showcase-spec-grid">
            <div class="showcase-spec">
              <span>Phí</span>
              <strong>${escapeHtml(card.annualFee)}</strong>
            </div>
            <div class="showcase-spec">
              <span>Lãi suất</span>
              <strong>${escapeHtml(card.interestRate)}</strong>
            </div>
          </div>
          <p class="showcase-audience"><strong>Phù hợp:</strong> ${escapeHtml(card.suitableFor)}</p>
          <div class="card-footer">
            <div class="showcase-actions">
              <button type="button" class="card-action" data-detail="${card.id}">Xem chi tiết</button>
              <button
                type="button"
                class="compare-chip ${compareActive ? "active" : ""}"
                data-compare="${card.id}"
                aria-pressed="${compareActive}"
                title="${compareActive ? "Bỏ khỏi so sánh" : "Thêm vào so sánh"}"
              >
                ${compareActive ? "✓" : "+"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  `;
}

function getShowcaseData(rawCard, allTags, detailItems) {
  const showcase = state.showcaseByCard.get(rawCard.id);
  if (showcase) {
    return {
      cardName: showcase.cardName || compactCardTitle(rawCard.ten_the),
      cardImagePortrait: showcase.cardImagePortrait || IMAGE_MAP[rawCard.id] || "",
      cardImageLandscape: showcase.cardImageLandscape || IMAGE_MAP[rawCard.id] || "",
      categories: normalizeCategories(showcase.categories, allTags),
      benefits: normalizeBenefits(showcase.benefits, detailItems),
    };
  }

  return {
    cardName: compactCardTitle(rawCard.ten_the),
    cardImagePortrait: IMAGE_MAP[rawCard.id] || "",
    cardImageLandscape: IMAGE_MAP[rawCard.id] || "",
    categories: normalizeCategories([], allTags),
    benefits: normalizeBenefits([], detailItems),
  };
}

function normalizeCategories(categories = [], fallbackTags = []) {
  const finalCategories = unique([...(categories || []), ...fallbackTags]).filter(Boolean).slice(0, 4);
  return finalCategories.length ? finalCategories : ["BIDV", "Thẻ quốc tế"];
}

function normalizeBenefits(benefits = [], detailItems = []) {
  if (benefits.length) return benefits.slice(0, 4);

  const fallback = detailItems
    .flatMap((item) => item.content_items || [])
    .slice(0, 3)
    .map((content) => ({
      icon: "star",
      value: extractBenefitValue(content),
      title: shorten(content.split("(")[0].split(";")[0], 46),
      condition: content.includes("(") ? content.slice(content.indexOf("(")).replace(/[()]/g, "") : "Theo chính sách hiện hành của BIDV",
    }));

  return fallback.length
    ? fallback
    : [
        {
          icon: "star",
          value: "Ưu đãi",
          title: "Đặc quyền sản phẩm",
          condition: "Xem thêm trong phần chi tiết để đối chiếu chính sách mới nhất",
        },
      ];
}

function compactCardTitle(name = "") {
  return name
    .replace(/^Thẻ tín dụng quốc tế\s+/i, "")
    .replace(/^Thẻ ghi nợ quốc tế\s+/i, "")
    .replace(/^Thẻ tín dụng\s+/i, "")
    .replace(/^Thẻ ghi nợ\s+/i, "");
}

function extractBenefitValue(text = "") {
  const match =
    text.match(/\d+%/) ||
    text.match(/\d+(?:[.,]\d+)?\s*tỷ/i) ||
    text.match(/\d+\s*lượt(?:\/năm)?/i) ||
    text.match(/\d+\+\s*/i) ||
    text.match(/\d+\s*ngày/i) ||
    text.match(/\d+\s*[Kk]/);

  return match ? match[0].trim() : "Ưu đãi";
}

function renderBenefitIcon(icon) {
  const icons = {
    lounge:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5V10a2 2 0 0 1 2-2h1.5a2 2 0 0 1 2 2v2.5"></path><path d="M12.5 12.5V9.5A2.5 2.5 0 0 1 15 7h1a3 3 0 0 1 3 3v2.5"></path><path d="M4 12.5h16"></path><path d="M6 15.5h12"></path><path d="M6 15.5v1.5"></path><path d="M18 15.5v1.5"></path></svg>',
    golf:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M11 3v12"></path><path d="M11 4c1.5 0 3 .6 4 1.8-1 1.2-2.5 1.8-4 1.8"></path><path d="M5 21c2.5-2.5 11.5-2.5 14 0"></path><circle cx="9" cy="18" r="1.4" fill="currentColor" stroke="none"></circle></svg>',
    shield:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7 3v5c0 5-3.4 8.9-7 10-3.6-1.1-7-5-7-10V6l7-3z"></path><path d="M9.5 12l1.7 1.8 3.3-3.5"></path></svg>',
    dining:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3v8"></path><path d="M10 3v8"></path><path d="M7 7H5.5A1.5 1.5 0 0 0 4 8.5V11"></path><path d="M10 7h1.5A1.5 1.5 0 0 1 13 8.5V11"></path><path d="M8.5 11v10"></path><path d="M18 3v18"></path><path d="M18 3c-2 1.4-3 3.2-3 5.4v2.6h3"></path></svg>',
    japan:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8"></circle><circle cx="12" cy="12" r="2.8" fill="currentColor" stroke="none"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="M2 12h2"></path><path d="M20 12h2"></path></svg>',
    global:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M3 12h18"></path><path d="M12 3a14 14 0 0 1 0 18"></path><path d="M12 3a14 14 0 0 0 0 18"></path></svg>',
    airport:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M3 14l8.5-2.5L21 4l-2-2-7.5 9.5L9 20l-2-2 1.5-3L5 16l-2-2z"></path></svg>',
    cart:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="20" r="1.4"></circle><circle cx="18" cy="20" r="1.4"></circle><path d="M3 4h2l2.2 10.2a1 1 0 0 0 1 .8h8.9a1 1 0 0 0 1-.8L20 7H7"></path></svg>',
    bag:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M6 8h12l-1 11H7L6 8z"></path><path d="M9 8V6a3 3 0 0 1 6 0v2"></path></svg>',
    health:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21s-6.8-4.4-8.6-8.3C2.2 10.2 3.6 7 7.1 7c2 0 3.1 1 4.9 3 1.8-2 2.9-3 4.9-3 3.5 0 4.9 3.2 3.7 5.7C18.8 16.6 12 21 12 21z"></path><path d="M12 9v6"></path><path d="M9 12h6"></path></svg>',
    school:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-4 9 4-9 4-9-4z"></path><path d="M7 11.5V15c0 1.7 2.2 3 5 3s5-1.3 5-3v-3.5"></path><path d="M21 9v6"></path></svg>',
    online:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="5" width="16" height="11" rx="2"></rect><path d="M8 19h8"></path><path d="M12 16v3"></path><path d="M7 9h10"></path></svg>',
    spark:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3z"></path><path d="M18.5 3.5l.7 2 .8.3-1.6.6-.6 1.6-.6-1.6-1.6-.6 1.6-.6.7-1.7z"></path><path d="M5.5 15.5l.6 1.8 1.8.6-1.8.6-.6 1.8-.6-1.8-1.8-.6 1.8-.6.6-1.8z"></path></svg>',
    "medical-badge":
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="8"></circle><path d="M12 8v8"></path><path d="M8 12h8"></path></svg>',
    miles:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15l7-3 9-7-4 9-3 7-2.5-5.5L4 15z"></path></svg>',
    salary:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="6" width="18" height="12" rx="2"></rect><path d="M7 12h10"></path><path d="M7 9h4"></path><path d="M7 15h3"></path></svg>',
    wallet:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M4 7.5A2.5 2.5 0 0 1 6.5 5H18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6.5A2.5 2.5 0 0 1 4 16.5v-9z"></path><path d="M4 8h12"></path><path d="M15.5 13h3"></path></svg>',
    rate:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M5 15l4-4 3 3 7-7"></path><path d="M14 7h5v5"></path><path d="M4 20h16"></path></svg>',
    installment:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="M7 10h10"></path><path d="M7 14h4"></path><path d="M16 14h1"></path></svg>',
    army:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4l7 3.5L12 11 5 7.5 12 4z"></path><path d="M5 11l7 3.5 7-3.5"></path><path d="M5 14.5l7 3.5 7-3.5"></path></svg>',
    star:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3.5l2.7 5.5 6.1.9-4.4 4.3 1 6.1L12 17.4l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9L12 3.5z"></path></svg>',
  };

  return icons[icon] || icons.star;
}

function renderCompare() {
  if (state.compareIds.length === 0) {
    const empty = `
        <div class="empty-state">
        <strong>Chưa có thẻ nào trong bảng so sánh</strong>
        <span>Nhấn dấu <b>+</b> trong từng card để thêm sản phẩm vào matrix so sánh.</span>
      </div>
    `;
    el.compareDesktop.innerHTML = empty;
    el.compareMobile.innerHTML = empty;
    return;
  }

  const selected = state.compareIds.map((id) => getCardById(id)).filter(Boolean);
  const rows = [
    ["Tổ chức thẻ", "network"],
    ["Phân khúc", "segment"],
    ["Phí thường niên", "annualFee"],
    ["Lãi suất", "interestRate"],
    ["Điểm nổi bật", "highlight"],
    ["Khách hàng phù hợp", "suitableFor"],
    ["Lưu ý tư vấn", "noteText"],
  ];

  el.compareDesktop.innerHTML = `
    <div class="compare-table-wrap">
      <table class="compare-table">
        <thead>
          <tr>
            <th>Tiêu chí</th>
            ${selected
              .map(
                (card) => `
                  <th>
                    ${escapeHtml(card.network)}
                    <strong>${escapeHtml(card.shortName)}</strong>
                  </th>
                `
              )
              .join("")}
          </tr>
        </thead>
        <tbody>
          ${rows
            .map(
              ([label, key]) => `
                <tr>
                  <td>${escapeHtml(label)}</td>
                  ${selected
                    .map(
                      (card) => `<td><div class="compare-cell">${escapeHtml(getCompareValue(card, key))}</div></td>`
                    )
                    .join("")}
                </tr>
              `
            )
            .join("")}
        </tbody>
      </table>
    </div>
  `;

  el.compareMobile.innerHTML = `
    <div class="compare-mobile-list">
      ${selected
        .map(
          (card) => `
            <article class="compare-mobile-card">
              <h3>${escapeHtml(card.shortName)}</h3>
              <div class="compare-mobile-grid">
                ${rows
                  .map(
                    ([label, key]) => `
                      <div class="compare-mobile-item">
                        <span>${escapeHtml(label)}</span>
                        <strong>${escapeHtml(getCompareValue(card, key))}</strong>
                      </div>
                    `
                  )
                  .join("")}
              </div>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function renderPromotions() {
  const active = state.promotions.filter((promotion) => promotion.computedStatus === "active");
  const all = [...state.promotions].sort((a, b) => (a.to_date_iso < b.to_date_iso ? 1 : -1));

  el.promotionSpotlight.innerHTML = active.length
    ? active.slice(0, 4).map((promotion) => renderPromotionCard(promotion)).join("")
    : `
        <div class="empty-state">
          <strong>Không có khuyến mại nổi bật</strong>
          <span>Hiện không có chương trình còn hiệu lực để đẩy lên khu spotlight.</span>
        </div>
      `;

  el.promotionList.innerHTML = all.map((promotion) => renderPromotionCard(promotion)).join("");
}

function renderPromotionCard(promotion) {
  const cardNames = promotion.card_id === "ALL_CREDIT_CARDS"
    ? ["Toàn bộ thẻ tín dụng"]
    : [getCardById(promotion.card_id)?.shortName || promotion.card_id];

  return `
    <article class="promotion-card ${promotion.computedStatus === "expired" ? "expired" : ""}">
      <div class="promotion-head">
        <strong>${escapeHtml(promotion.title)}</strong>
        <span class="status-pill ${promotion.computedStatus}">
          ${promotion.computedStatus === "active" ? "Còn hiệu lực" : "Đã hết hạn"}
        </span>
      </div>
      <div class="promo-meta">
        ${cardNames.map((name) => `<span class="promo-chip">${escapeHtml(name)}</span>`).join("")}
        <span class="promo-chip">${formatDateRange(promotion.from_date_iso, promotion.to_date_iso)}</span>
      </div>
      <p class="promo-copy">${escapeHtml(promotion.description)}</p>
      <ul>
        <li><strong>Quyền lợi:</strong> ${escapeHtml(promotion.benefit)}</li>
        <li><strong>Điều kiện:</strong> ${escapeHtml(promotion.condition)}</li>
      </ul>
    </article>
  `;
}

function renderDrawer() {
  const card = getCardById(state.drawerCardId);
  if (!card) return;

  el.drawerMeta.textContent = `${card.network} · ${card.segment}`;
  el.drawerTitle.textContent = card.name;
  el.drawerHero.innerHTML = `
    <div class="drawer-card-visual">
      ${card.image ? `<img src="${card.image}" alt="${escapeHtml(card.shortName)}" />` : ""}
    </div>
  `;

  el.drawerTabs.innerHTML = DRAWER_TABS.map(
    (tab) => `
      <button type="button" class="drawer-tab ${tab.id === state.drawerTab ? "active" : ""}" data-tab="${tab.id}">
        ${tab.label}
      </button>
    `
  ).join("");
  el.drawerTabs.querySelectorAll("[data-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      state.drawerTab = button.dataset.tab;
      renderDrawer();
    });
  });

  el.drawerBody.innerHTML = renderDrawerBody(card);
}

function renderDrawerBody(card) {
  const noteText = card.note.length ? card.note.join(" ") : "Luôn đối chiếu chính sách hiện hành của BIDV trước khi tư vấn.";
  const feeDetail = getDetailByGroup(card.id, "fee");
  const conditionItems = card.conditions.flatMap((item) => item.content_items || []);
  const benefits = card.benefits.flatMap((item) => item.content_items || []);

  switch (state.drawerTab) {
    case "overview":
      return `
        <div class="drawer-panel">
          <div class="drawer-panel-grid">
            <div class="drawer-stat"><span>Phí thường niên</span><strong>${escapeHtml(card.annualFee)}</strong></div>
            <div class="drawer-stat"><span>Lãi suất</span><strong>${escapeHtml(card.interestRate)}</strong></div>
            <div class="drawer-stat"><span>Điểm nổi bật</span><strong>${escapeHtml(card.highlight)}</strong></div>
            <div class="drawer-stat"><span>Phù hợp với</span><strong>${escapeHtml(card.suitableFor)}</strong></div>
          </div>
          <section class="drawer-section">
            <h3>Mô tả nhanh</h3>
            <p>${escapeHtml(card.description)}</p>
          </section>
          <section class="drawer-section">
            <h3>Điểm nổi bật</h3>
            <ul class="drawer-list">${card.highlightItems.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
          </section>
        </div>
      `;
    case "benefits":
      return `
        <div class="drawer-panel">
          <section class="drawer-section">
            <h3>Đặc quyền & lợi ích</h3>
            <ul class="drawer-list">
              ${(benefits.length ? benefits : card.highlightItems).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
            </ul>
          </section>
          <section class="drawer-callout">
            <strong>Điểm bán hàng nên nhấn mạnh</strong>
            ${escapeHtml(card.consultPoints.join(" "))}
          </section>
        </div>
      `;
    case "fees":
      return `
        <div class="drawer-panel">
          <section class="drawer-section">
            <h3>${escapeHtml(feeDetail?.title || "Biểu phí & lãi suất")}</h3>
            <ul class="drawer-list">
              ${(feeDetail?.content_items || ["Đang cập nhật biểu phí."]).map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
            </ul>
          </section>
        </div>
      `;
    case "conditions":
      return `
        <div class="drawer-panel">
          <section class="drawer-section">
            <h3>Điều kiện phát hành</h3>
            ${
              conditionItems.length
                ? `<ul class="drawer-list">${conditionItems.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`
                : `<p>Chưa có điều kiện chi tiết riêng trong bộ dữ liệu. Tạm thời ưu tiên nhóm khách hàng phù hợp: ${escapeHtml(card.suitableFor)}.</p>`
            }
          </section>
          <section class="drawer-section">
            <h3>Đối tượng trọng tâm</h3>
            <ul class="drawer-list">${card.targetItems.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
          </section>
        </div>
      `;
    case "promotions":
      return `
        <div class="drawer-panel">
          ${
            card.promotions.length
              ? `
                  <div class="drawer-promo-list">
                    ${card.promotions
                      .map(
                        (promotion) => `
                          <article class="drawer-promo-item">
                            <h4>${escapeHtml(promotion.title)}</h4>
                            <p><strong>Thời gian:</strong> ${escapeHtml(formatDateRange(promotion.from_date_iso, promotion.to_date_iso))}</p>
                            <p><strong>Quyền lợi:</strong> ${escapeHtml(promotion.benefit)}</p>
                            <p><strong>Điều kiện:</strong> ${escapeHtml(promotion.condition)}</p>
                          </article>
                        `
                      )
                      .join("")}
                  </div>
                `
              : `
                  <div class="empty-state">
                    <strong>Chưa có khuyến mại gắn riêng</strong>
                    <span>Hiện chưa có chương trình liên kết riêng trong tập dữ liệu cho thẻ này.</span>
                  </div>
                `
          }
        </div>
      `;
    case "notes":
      return `
        <div class="drawer-panel">
          <section class="drawer-callout">
            <strong>Lưu ý tư vấn</strong>
            ${escapeHtml(noteText)}
          </section>
          <section class="drawer-section">
            <h3>Checklist trước khi chốt</h3>
            <ul class="drawer-list">
              <li>Kiểm tra biểu phí và lãi suất mới nhất theo văn bản BIDV đang hiệu lực.</li>
              <li>Xác nhận điều kiện miễn phí thường niên, hoàn tiền hoặc ưu đãi đi kèm theo kỳ.</li>
              <li>Đối chiếu trạng thái phát hành mới và phân khúc khách hàng trước khi tư vấn.</li>
            </ul>
          </section>
        </div>
      `;
    default:
      return "";
  }
}

function openDrawer(cardId) {
  state.drawerCardId = cardId;
  state.drawerTab = "overview";
  renderDrawer();
  el.cardDrawer.classList.add("open");
  el.cardDrawer.setAttribute("aria-hidden", "false");
  el.drawerOverlay.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeDrawer() {
  state.drawerCardId = null;
  el.cardDrawer.classList.remove("open");
  el.cardDrawer.setAttribute("aria-hidden", "true");
  el.drawerOverlay.hidden = true;
  document.body.style.overflow = "";
}

function runAdvisor() {
  const query = el.advisorInput.value.trim().toLowerCase();
  if (!query) {
    el.advisorResult.innerHTML = `
      <div class="empty-state advisor-placeholder">
        <strong>Nhập mô tả khách hàng trước</strong>
        <span>Ví dụ: khách hàng thu nhập 20 triệu, thích mua sắm online, cần hoàn tiền và dùng Apple Pay.</span>
      </div>
    `;
    return;
  }

  const suggestions = state.cards
    .map((card) => {
      const matchedTerms = card.profileKeywords.filter((term) => query.includes(term.toLowerCase()));
      const fullTextHits = scoreAdvisorMatch(card, query);
      return {
        card,
        matchedTerms,
        score: fullTextHits + matchedTerms.length * 2,
      };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);

  if (!suggestions.length) {
    el.advisorResult.innerHTML = `
      <div class="empty-state advisor-placeholder">
        <strong>Chưa có gợi ý thật sát</strong>
        <span>Thử thêm các từ khóa như online, hoàn tiền, du lịch, Nhật, sức khỏe, trả góp hoặc lãi suất thấp.</span>
      </div>
    `;
    return;
  }

  el.advisorResult.innerHTML = `
    <div class="advisor-list">
      ${suggestions
        .map(({ card, matchedTerms }) => {
          const reasons = buildAdvisorReasons(card, matchedTerms, query);
          return `
            <article class="advisor-card">
              <div class="advisor-card-head">
                <div>
                  <strong>${escapeHtml(card.shortName)}</strong>
                  <div class="meta-row">
                    <span class="meta-pill">${escapeHtml(card.network)}</span>
                    <span class="meta-pill">${escapeHtml(card.segment)}</span>
                  </div>
                </div>
                <button type="button" class="ghost-button" data-detail="${card.id}">Xem chi tiết</button>
              </div>
              <p class="advisor-reason">${escapeHtml(reasons.main)}</p>
              <div class="showcase-spec-grid">
                <div class="showcase-spec">
                  <span>Phí</span>
                  <strong>${escapeHtml(card.annualFee)}</strong>
                </div>
                <div class="showcase-spec">
                  <span>Lãi suất</span>
                  <strong>${escapeHtml(card.interestRate)}</strong>
                </div>
              </div>
              <ul class="bullet-list">
                ${reasons.points.map((point) => `<li>${escapeHtml(point)}</li>`).join("")}
              </ul>
            </article>
          `;
        })
        .join("")}
    </div>
  `;

  el.advisorResult.querySelectorAll("[data-detail]").forEach((button) => {
    button.addEventListener("click", () => openDrawer(button.dataset.detail));
  });
}

function toggleCompare(cardId) {
  if (state.compareIds.includes(cardId)) {
    state.compareIds = state.compareIds.filter((id) => id !== cardId);
    setCompareNotice("");
  } else {
    if (state.compareIds.length >= 4) {
      setCompareNotice("Chỉ chọn tối đa 4 thẻ để so sánh. Hãy bỏ bớt một thẻ trước khi thêm mới.");
      return;
    }
    state.compareIds = [...state.compareIds, cardId];
    setCompareNotice("");
  }
  renderCatalog();
  renderCompare();
}

function setCompareNotice(message) {
  if (!message) {
    el.compareNotice.hidden = true;
    el.compareNotice.textContent = "";
    return;
  }
  el.compareNotice.hidden = false;
  el.compareNotice.textContent = message;
}

function getFilteredCards() {
  return state.cards.filter((card) => {
    const matchesFilter = cardMatchesFilter(card, state.activeFilter);
    const matchesSegment = state.segment === "all" || card.segment === state.segment;
    const matchesQuery = !state.query || card.searchable.includes(state.query);
    return matchesFilter && matchesSegment && matchesQuery;
  });
}

function cardMatchesFilter(card, filterId) {
  if (filterId === "all") return true;
  if (["visa", "mastercard", "jcb"].includes(filterId)) {
    return card.network.toLowerCase() === filterId;
  }
  return card.category.includes(filterId);
}

function onFilterChipClick(event) {
  const button = event.target.closest("[data-filter]");
  if (!button) return;
  state.activeFilter = button.dataset.filter;
  renderCatalog();
}

function onOverviewClick(event) {
  const button = event.target.closest("[data-overview]");
  if (!button) return;

  const key = button.dataset.overview;
  if (key === "activePromotions") {
    document.getElementById("promotions").scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }
  if (key === "services") {
    document.getElementById("notes").scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  state.activeFilter = key;
  renderCatalog();
  document.getElementById("catalog").scrollIntoView({ behavior: "smooth", block: "start" });
}

function onQuickAdvisorClick(event) {
  const button = event.target.closest("[data-advisor]");
  if (!button) return;
  el.advisorInput.value = button.dataset.advisor;
  runAdvisor();
}

function handleHeroSearch() {
  const value = el.heroSearch.value.trim();
  el.catalogSearch.value = value;
  state.query = value.toLowerCase();
  renderCatalog();
  document.getElementById("catalog").scrollIntoView({ behavior: "smooth", block: "start" });
}

function toggleMobileMenu(forceState) {
  const willOpen = typeof forceState === "boolean" ? forceState : el.mobileNav.hidden;
  el.mobileNav.hidden = !willOpen;
  el.mobileMenuButton.setAttribute("aria-expanded", String(willOpen));
}

function onMobileNavClick(event) {
  const anchor = event.target.closest("a");
  if (!anchor) return;
  toggleMobileMenu(false);
}

function getCardById(cardId) {
  return state.cards.find((card) => card.id === cardId);
}

function getDetailByGroup(cardId, group) {
  return (state.detailsByCard.get(cardId) || []).find((item) => item.group === group);
}

function extractLine(items = [], label) {
  return items.find((item) => item.includes(label)) || "";
}

function getPromotionStatus(toDateIso) {
  if (!toDateIso) return "expired";
  const today = new Date();
  const end = new Date(`${toDateIso}T23:59:59`);
  return today <= end ? "active" : "expired";
}

function formatDateRange(fromDateIso, toDateIso) {
  return `${formatDate(fromDateIso)} - ${formatDate(toDateIso)}`;
}

function formatDate(dateIso) {
  if (!dateIso) return "Đang cập nhật";
  const date = new Date(`${dateIso}T00:00:00`);
  return new Intl.DateTimeFormat("vi-VN").format(date);
}

function filterIdToLabel(filterId) {
  return FILTERS.find((item) => item.id === filterId)?.label || filterId;
}

function groupLabel(group) {
  return (
    {
      installment: "Trả góp",
      smartbanking: "SmartBanking",
      pretty_card_number: "Số thẻ đẹp",
    }[group] || group
  );
}

function countNeedGroups() {
  const keys = new Set();
  state.cards.forEach((card) => card.category.forEach((item) => keys.add(item)));
  return keys.size;
}

function unique(items) {
  return [...new Set(items)];
}

function getCompareValue(card, key) {
  if (key === "noteText") return card.note.join(" ");
  return Array.isArray(card[key]) ? card[key].join(", ") : card[key] || "Đang cập nhật";
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function shorten(text, maxLength) {
  if (!text) return "";
  return text.length > maxLength ? `${text.slice(0, maxLength - 1)}…` : text;
}

function scoreAdvisorMatch(card, query) {
  let score = 0;
  const groups = {
    online: ["online", "shopee", "lazada", "tiki", "tiktok", "tmđt"],
    cashback: ["hoàn tiền", "cashback", "siêu thị", "gia đình", "giáo dục"],
    health: ["sức khỏe", "y tế", "bệnh viện", "làm đẹp", "bảo hiểm"],
    travel: ["du lịch", "công tác", "nước ngoài", "khách sạn", "resort", "golf", "lounge"],
    japan: ["nhật", "jcb", "ẩm thực nhật"],
    lowrate: ["lãi suất thấp", "rút tiền", "xoay vòng", "trả góp", "cash"],
    premium: ["cao cấp", "vip", "private", "premier", "phòng chờ"],
  };

  Object.entries(groups).forEach(([group, words]) => {
    if (words.some((word) => query.includes(word))) {
      if (group === "japan" && card.network === "JCB") score += 3;
      if (group === "premium" && card.category.includes("premium")) score += 2;
      if (card.category.includes(group) || card.searchable.includes(group)) score += 2;
    }
  });

  if (query.includes("apple pay") && /online|visa/i.test(card.searchable)) score += 1;
  return score;
}

function buildAdvisorReasons(card, matchedTerms, query) {
  const points = unique([...card.consultPoints, ...card.note]).slice(0, 3);
  const mainParts = [];

  if (matchedTerms.length) {
    mainParts.push(`Khớp mạnh với các tín hiệu: ${matchedTerms.join(", ")}.`);
  }
  if (query.includes("online") || query.includes("shopee") || query.includes("lazada") || query.includes("tiktok")) {
    if (card.id === "BIDV_VISA_CASHBACK_ONLINE") {
      mainParts.push("Dòng thẻ này được tối ưu cho chi tiêu trực tuyến và hoàn tiền TMĐT.");
    }
  }
  if (query.includes("du lịch") || query.includes("công tác") || query.includes("nước ngoài")) {
    if (["BIDV_MC_WORLD_TRAVEL", "BIDV_VISA_INFINITE", "BIDV_JCB_ULTIMATE"].includes(card.id)) {
      mainParts.push("Phù hợp hành vi chi tiêu du lịch, ngoại tệ và nhóm đặc quyền đi lại.");
    }
  }
  if (query.includes("sức khỏe") || query.includes("bệnh viện") || query.includes("bảo hiểm")) {
    if (card.id === "BIDV_JCB_WELL_BEING" || card.id === "BIDV_VISA_CASHBACK_360") {
      mainParts.push("Hỗ trợ tốt cho chi tiêu y tế, bảo hiểm hoặc chăm sóc gia đình.");
    }
  }
  if (query.includes("lãi suất") || query.includes("rút tiền") || query.includes("xoay vòng")) {
    if (card.id === "BIDV_VISA_EASY") {
      mainParts.push("Đây là lựa chọn mạnh nhất cho nhu cầu chi phí vốn thấp và rút tiền linh hoạt.");
    }
  }

  return {
    main: mainParts.join(" ") || `Phù hợp với hồ sơ khách hàng nhờ định vị ${card.highlight.toLowerCase()}.`,
    points,
  };
}
