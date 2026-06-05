const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const source = JSON.parse(fs.readFileSync(path.join(root, "du lieu the", "du-lieu-the-bidv.json"), "utf8"));
const dataDir = path.join(root, "public", "data");
fs.mkdirSync(dataDir, { recursive: true });

const today = new Date("2026-06-05T00:00:00+07:00");

const categorySeeds = [
  {
    id: "du-lich",
    name: "Du lịch",
    description: "Phòng chờ, fasttrack, bảo hiểm, đặt phòng và chi tiêu nước ngoài.",
    icon: "/assets/ui-kit/icons/icon-travel.svg",
    keywords: ["du lịch", "phòng chờ", "fasttrack", "nước ngoài", "khách sạn", "dặm", "bảo hiểm"]
  },
  {
    id: "hoan-tien",
    name: "Hoàn tiền",
    description: "Cashback theo nhóm chi tiêu, mở thẻ và giao dịch đầu tiên.",
    icon: "/assets/ui-kit/icons/icon-cashback.svg",
    keywords: ["hoàn tiền", "cashback", "hoàn", "tích điểm"]
  },
  {
    id: "an-uong",
    name: "Ăn uống",
    description: "Nhà hàng, cafe, ShopeeFood, fine dining và đặc quyền ẩm thực.",
    icon: "/assets/ui-kit/icons/icon-dining.svg",
    keywords: ["nhà hàng", "ẩm thực", "ăn", "cafe", "food", "dining", "starbucks", "koi"]
  },
  {
    id: "mua-sam",
    name: "Mua sắm",
    description: "Sàn thương mại điện tử, thời trang, thể thao và cửa hàng đối tác.",
    icon: "/assets/ui-kit/icons/icon-online.svg",
    keywords: ["mua sắm", "online", "shopee", "tiktok", "lazada", "uniqlo", "nitori", "thời trang"]
  },
  {
    id: "tra-gop",
    name: "Trả góp",
    description: "Trả góp 0% và chuyển đổi giao dịch từ 3 triệu đồng.",
    icon: "/assets/ui-kit/icons/icon-new-card.svg",
    keywords: ["trả góp", "0%", "chuyển đổi trả góp"]
  },
  {
    id: "khach-hang-cao-cap",
    name: "Khách hàng cao cấp",
    description: "Private, Infinite, Premier, golf, nghỉ dưỡng và dịch vụ ưu tiên.",
    icon: "/assets/ui-kit/icons/icon-wellbeing.svg",
    keywords: ["cao cấp", "private", "infinite", "premier", "golf", "nghỉ dưỡng", "ưu tiên"]
  }
];

const partners = [
  { id: "agoda", name: "Agoda", group: "Du lịch", logo: "/assets/ui-kit/partners/partner-agoda.svg" },
  { id: "grab", name: "Grab", group: "Di chuyển", logo: "/assets/ui-kit/partners/partner-grab.svg" },
  { id: "shopee", name: "Shopee", group: "Mua sắm", logo: "/assets/ui-kit/partners/partner-shopee.svg" },
  { id: "starbucks", name: "Starbucks", group: "Ăn uống", logo: "/assets/ui-kit/partners/partner-starbucks.svg" },
  { id: "cgv", name: "CGV", group: "Giải trí", logo: "/assets/ui-kit/partners/partner-cgv.svg" },
  { id: "be", name: "Be", group: "Di chuyển", logo: "/assets/ui-kit/partners/partner-be.svg" }
];

const promotionSeeds = [
  {
    id: "visa-private",
    title: "Đặc quyền BIDV Visa Private Banking",
    cardIds: ["bidv-private-banking"],
    cardNames: ["BIDV Private Banking"],
    organization: "Visa",
    group: "Khách hàng cao cấp",
    needGroups: ["du-lich", "an-uong", "khach-hang-cao-cap"],
    status: "active",
    startDate: "2025-06-01",
    endDate: "2026-12-31",
    image: "/assets/ui-kit/promotions/promo-travel-1600x900.webp",
    sourceUrl: "https://docs.google.com/presentation/d/1f0C2Dj6urWYWdC8MS1kS4rDvRQRX9_SO/edit?slide=id.p9#slide=id.p9",
    summary: "Bộ đặc quyền cao cấp cho khách hàng Private Banking: golf, phòng chờ, fasttrack, bảo hiểm du lịch, dining và ưu đãi Visa toàn cầu.",
    benefits: [
      "Miễn phí phát hành, thường niên và phạt chậm thanh toán theo gói Private Banking.",
      "Tặng 10 lượt chơi golf tại 30 sân golf hàng đầu Việt Nam.",
      "Không giới hạn phòng chờ và dịch vụ fasttrack theo điều kiện chương trình.",
      "Tích điểm 6% tối đa 4 triệu điểm tại spa, golf, nghỉ dưỡng, cửa hàng miễn thuế nước ngoài.",
      "Bảo hiểm du lịch toàn cầu đến 1.000.000 USD."
    ],
    conditions: [
      "Điều kiện sử dụng theo hạng thẻ và chính sách từng thời kỳ.",
      "Một số ưu đãi Visa áp dụng theo đối tác, quốc gia và thời gian riêng."
    ],
    tags: ["Private", "Golf", "Fasttrack", "Dining", "Visa"]
  },
  {
    id: "visa-infinite-lifestyle",
    title: "Đặc quyền BIDV Visa Infinite",
    cardIds: ["bidv-visa-infinite"],
    cardNames: ["BIDV Visa Infinite"],
    organization: "Visa",
    group: "Khách hàng cao cấp",
    needGroups: ["du-lich", "an-uong", "khach-hang-cao-cap"],
    status: "active",
    startDate: "2025-06-01",
    endDate: "2026-12-31",
    image: "/assets/ui-kit/promotions/promo-travel-1600x900.webp",
    sourceUrl: "https://docs.google.com/presentation/d/1Rej70edZ4Km3cwhmEK3MEgdAtflRW6hO/edit?slide=id.p1#slide=id.p1",
    summary: "Gói Lifestyle/Golfer cho Visa Infinite với phòng chờ, fasttrack, ẩm thực, sức khỏe, nghỉ dưỡng, golf và tích điểm cao cấp.",
    benefits: [
      "Gói phí thường niên 5 triệu, 15 triệu và 30 triệu với quyền lợi khác nhau.",
      "Lifestyle: phòng chờ, fasttrack, ẩm thực, sức khỏe, nghỉ dưỡng.",
      "Golfer: tặng tới 10 lượt chơi golf theo gói phí.",
      "Miễn phí thường niên khi đạt doanh số 200 triệu, 500 triệu hoặc 1 tỷ tùy gói.",
      "Tích điểm 6% tối đa 4 triệu điểm và bảo hiểm du lịch toàn cầu đến 1.000.000 USD."
    ],
    conditions: [
      "Quyền lợi phụ thuộc gói phí thường niên đã chọn.",
      "Ưu đãi theo doanh số tính theo quý hoặc năm phí tùy chương trình."
    ],
    tags: ["Infinite", "Lifestyle", "Golfer", "Phòng chờ"]
  },
  {
    id: "bidv-premier-privileges",
    title: "Đặc quyền BIDV Premier",
    cardIds: ["bidv-premier"],
    cardNames: ["BIDV Premier"],
    organization: "BIDV",
    group: "Khách hàng cao cấp",
    needGroups: ["du-lich", "an-uong", "khach-hang-cao-cap"],
    status: "active",
    startDate: "2025-06-01",
    endDate: "2026-12-31",
    image: "/assets/ui-kit/promotions/promo-wellbeing-1600x900.webp",
    sourceUrl: "https://docs.google.com/presentation/d/1fkbfxL0cQF40Vbx3hLAZyXOkdiak5dNR/edit",
    summary: "Đặc quyền dành cho khách hàng BIDV Premier/Premier Elite: bảo hiểm, phòng chờ, sức khỏe, nghỉ dưỡng và ưu đãi Visa cao cấp.",
    benefits: [
      "Miễn phí phát hành, thường niên và phạt chậm theo chính sách Premier.",
      "Tặng bảo hiểm du lịch toàn cầu trị giá 500.000 USD.",
      "Premier Elite tích điểm 3% ở golf, spa, nghỉ dưỡng, giải trí và miễn thuế nước ngoài.",
      "Premier tích điểm 5% tại bệnh viện/fitness và 2% cho bảo hiểm.",
      "Quyền lợi phòng chờ trong nước, chăm sóc sức khỏe và nghỉ dưỡng."
    ],
    conditions: [
      "Áp dụng theo phân hạng Premier/Premier Elite.",
      "Cần kiểm tra chính sách tại thời điểm tư vấn."
    ],
    tags: ["Premier", "Elite", "Sức khỏe", "Nghỉ dưỡng"]
  },
  {
    id: "visa-platinum-cashback",
    title: "Ưu đãi thẻ Visa hạng Platinum",
    cardIds: ["bidv-visa-cashback-360", "bidv-visa-cashback-online"],
    cardNames: ["BIDV Visa Cashback 360", "BIDV Visa Cashback Online"],
    organization: "Visa",
    group: "Hoàn tiền",
    needGroups: ["hoan-tien", "mua-sam", "an-uong", "du-lich"],
    status: "active",
    startDate: "2026-04-01",
    endDate: "2026-09-30",
    image: "/assets/ui-kit/promotions/promo-cashback-1600x900.webp",
    sourceUrl: "https://docs.google.com/presentation/d/1DvD9FgwdWbSQ-ziBb47URMPNh4szO_3MB1SUo8BEF-U/edit?hl=en-GB&slide=id.g3d5bac58b3c_2_41#slide=id.g3d5bac58b3c_2_41",
    summary: "Ưu đãi mở thẻ, hoàn tiền, trả góp và hệ sinh thái Visa cho nhóm Cashback 360/Cashback Online.",
    benefits: [
      "Mở thẻ 0 phí và hoàn tới 1.000.000 VND khi gán Apple Pay/Google Pay, phát sinh giao dịch trong 30 ngày đầu.",
      "Cashback 360 hoàn tới 10% lĩnh vực siêu thị.",
      "Cashback Online hoàn 6% tại Tiki, Shopee, Lazada, TikTok Shop.",
      "Trả góp 0% cho giao dịch từ 3 triệu đồng.",
      "Ưu đãi Starbucks, Trip, CGV, Metro Hà Nội, Shopee, Klook, Agoda, Hotels.com, IHG, Expedia."
    ],
    conditions: [
      "Một số chương trình có ngân sách và khung giờ áp dụng.",
      "Ưu đãi Visa có thể thay đổi theo chính sách từng thời kỳ."
    ],
    tags: ["Platinum", "Cashback", "Apple Pay", "Google Pay"]
  },
  {
    id: "visa-classic-starter",
    title: "Ưu đãi thẻ tín dụng hạng Classic",
    cardIds: ["bidv-visa-easy", "bidv-visa-flexi", "bidv-mastercard-ready"],
    cardNames: ["BIDV Visa Easy", "BIDV Visa Flexi", "BIDV Mastercard Ready"],
    organization: "Visa/Mastercard",
    group: "Trả góp",
    needGroups: ["tra-gop", "hoan-tien", "mua-sam"],
    status: "active",
    startDate: "2026-04-01",
    endDate: "2026-09-30",
    image: "/assets/ui-kit/promotions/promo-new-card-1600x900.webp",
    sourceUrl: "https://docs.google.com/presentation/d/1RlQpQ1HqPnkevBL4RquF6bqvT_VIrbBJWuWQiyHnaJE/edit?slide=id.g366d6ed8d97_2_77#slide=id.g366d6ed8d97_2_77",
    summary: "Gói ưu đãi dễ tiếp cận cho khách mới: miễn phí, hoàn tiền ví, hoàn tới 2% và trả góp 0%.",
    benefits: [
      "Miễn phí phát hành.",
      "Miễn phí thường niên năm đầu khi chi tiêu tối thiểu 500.000 VND trong 30 ngày.",
      "Miễn phí thường niên trọn đời khi chi tiêu thẻ từ 10 triệu VND/năm theo chính sách từng thời kỳ.",
      "Hoàn tới 500.000 VND khi gán Apple Pay/Google Pay và chi tiêu trong 30 ngày đầu.",
      "Hoàn tới 2% tại nhà hàng, đại lý du lịch online, sàn TMĐT và bảo hiểm Metlife."
    ],
    conditions: [
      "Điều kiện miễn phí thường niên theo đối tượng khách hàng và địa bàn từng thời kỳ.",
      "Phí chuyển đổi trả góp chủ động chỉ từ 1,99%."
    ],
    tags: ["Classic", "Mở thẻ", "Trả góp", "Phí thấp"]
  },
  {
    id: "jcb-happy-weekend",
    title: "Tổng hợp ưu đãi JCB Happy Weekend",
    cardIds: ["bidv-jcb-ultimate", "bidv-jcb-well-being", "bidv-jcb-hybrid"],
    cardNames: ["BIDV JCB Ultimate", "BIDV JCB Well-Being", "BIDV JCB Hybrid"],
    organization: "JCB",
    group: "Ăn uống",
    needGroups: ["an-uong", "mua-sam", "hoan-tien"],
    status: "ending",
    startDate: "2026-04-11",
    endDate: "2026-06-30",
    image: "/assets/ui-kit/promotions/promo-dining-1600x900.webp",
    sourceUrl: "https://docs.google.com/presentation/d/1hkuj9WuJBMJc7JVm0lF18kqo4Viy_J1q/edit?slide=id.g3d3d7bc7aa0_2_48#slide=id.g3d3d7bc7aa0_2_48",
    summary: "Các ưu đãi JCB nổi bật cuối tuần: KOI Thé, NITORI, Jollibee, Apple Pay JCB, ẩm thực và chăm sóc sức khỏe.",
    benefits: [
      "KOI Thé/KOI Cafe: ưu đãi 30% tối đa 50K cho hóa đơn từ 100K.",
      "NITORI: ưu đãi 300K cho hóa đơn từ 2 triệu đồng.",
      "Jollibee: ưu đãi 30% tối đa 100K cho hóa đơn từ 200K.",
      "Apple Pay JCB: Gong Cha giảm 40K, CGV mua 2 vé 2D giá 89K, Sushi Hokkaido Sachi giảm 200K.",
      "Ẩm thực tới 30% tại hơn 100 nhà hàng và sức khỏe tới 50% tại hơn 100 địa điểm."
    ],
    conditions: [
      "Nhiều ưu đãi áp dụng thứ Bảy, Chủ nhật hằng tuần đến 30/06/2026.",
      "Cần kiểm tra số lượt tối đa theo tuần/tháng/thẻ."
    ],
    tags: ["JCB", "Happy Weekend", "KOI", "CGV", "Sức khỏe"]
  },
  {
    id: "jcb-ultimate-dining",
    title: "Ưu đãi BIDV JCB Ultimate",
    cardIds: ["bidv-jcb-ultimate"],
    cardNames: ["BIDV JCB Ultimate"],
    organization: "JCB",
    group: "Ăn uống",
    needGroups: ["an-uong", "hoan-tien", "du-lich"],
    status: "active",
    startDate: "2026-04-01",
    endDate: "2026-12-31",
    image: "/assets/ui-kit/promotions/promo-dining-1600x900.webp",
    sourceUrl: "https://docs.google.com/presentation/d/1lb0UHV3dsPGBAZcUd8mqzPAmfL9xbVqhHtkRId_yP9I/edit?slide=id.g3d5f1f49c9a_0_108#slide=id.g3d5f1f49c9a_0_108",
    summary: "Ưu đãi ẩm thực và hoàn tiền nổi bật cho JCB Ultimate, đặc biệt trong tháng sinh nhật và khi chi tiêu tại Nhật Bản.",
    benefits: [
      "Miễn phí thường niên năm đầu khi chi tiêu từ 1.000.000 VND trong 30 ngày.",
      "Hoàn đến 1.000.000 VND khi gán Apple Pay/Google Pay và chi tiêu từ 200.000 VND trong 30 ngày.",
      "Tích điểm 20% chi tiêu ẩm thực tại Việt Nam trong tháng sinh nhật.",
      "Tích điểm 10% chi tiêu ẩm thực tại Việt Nam các tháng còn lại.",
      "Tích điểm 15% chi tiêu ẩm thực tại Nhật Bản và hoàn 100% phí chuyển đổi ngoại tệ khi giao dịch tại Nhật."
    ],
    conditions: [
      "Hoàn tiền tối đa 800.000 VND/tháng.",
      "Điều kiện giao dịch áp dụng theo thể lệ BIDV/JCB."
    ],
    tags: ["Ultimate", "Ẩm thực", "Nhật Bản", "Sinh nhật"]
  },
  {
    id: "jcb-wellbeing-care",
    title: "Ưu đãi BIDV JCB Well-Being",
    cardIds: ["bidv-jcb-well-being"],
    cardNames: ["BIDV JCB Well-Being"],
    organization: "JCB",
    group: "Hoàn tiền",
    needGroups: ["hoan-tien", "an-uong", "mua-sam"],
    status: "active",
    startDate: "2026-04-01",
    endDate: "2027-01-14",
    image: "/assets/ui-kit/promotions/promo-wellbeing-1600x900.webp",
    sourceUrl: "https://docs.google.com/presentation/d/1-vVP0xYW2i9wxuxIPiukEA34ATyNaV3nrHojnZaD7LM/edit?slide=id.g36b9114b5fd_2_138#slide=id.g36b9114b5fd_2_138",
    summary: "Ưu đãi cho nhóm sức khỏe, y tế, bảo hiểm, thời trang, chăm sóc bản thân và hệ sinh thái JCB.",
    benefits: [
      "Định vị tư vấn cho khách hàng gia đình có chi tiêu khám bệnh, nhà thuốc, bảo hiểm.",
      "Có thể kết hợp kho ưu đãi JCB về ăn uống, mua sắm và chăm sóc sức khỏe.",
      "Nhiều ưu đãi sức khỏe kéo dài đến 14/01/2027 theo đối tác.",
      "Dễ bán cho khách muốn tối ưu chi phí sức khỏe định kỳ."
    ],
    conditions: [
      "Cần kiểm tra đối tác y tế/chăm sóc sức khỏe và mức giảm cụ thể trước khi tư vấn.",
      "Ưu đãi áp dụng theo ngân sách từng đối tác."
    ],
    tags: ["Well-Being", "Y tế", "Sức khỏe", "Gia đình"]
  },
  {
    id: "mastercard-travel-priceless",
    title: "Ưu đãi BIDV Mastercard",
    cardIds: [
      "bidv-mastercard-ready",
      "bidv-mastercard-moneyverse",
      "bidv-mastercard-discovery",
      "bidv-mastercard-world-travel",
      "bidv-mastercard-business"
    ],
    cardNames: [
      "BIDV Mastercard Ready",
      "BIDV Mastercard Moneyverse",
      "BIDV Mastercard Discovery",
      "BIDV Mastercard World Travel",
      "BIDV Mastercard Business"
    ],
    organization: "Mastercard",
    group: "Du lịch",
    needGroups: ["du-lich", "mua-sam", "khach-hang-cao-cap"],
    status: "active",
    startDate: "2026-01-01",
    endDate: "2027-01-31",
    image: "/assets/ui-kit/promotions/promo-travel-1600x900.webp",
    sourceUrl: "https://docs.google.com/presentation/d/1e34oknV53scGk9yZqq11EALMVjh72VwZgDzIthBvmTs/edit?slide=id.g36088922b6a_2_237#slide=id.g36088922b6a_2_237",
    summary: "Ưu đãi du lịch và phong cách sống Mastercard: Expedia, Hotels.com, Qatar Airways, Seoul Sky, Grab Thailand, golf và mua sắm.",
    benefits: [
      "Expedia/Hotels.com giảm 7% khi đặt phòng toàn cầu theo mã ưu đãi.",
      "Qatar Airways giảm đến 10% cho vé Economy và Business.",
      "Seoul Sky, Grab Thailand, Olive Young, Lotte Mart có ưu đãi theo từng thị trường.",
      "Một số chuỗi khách sạn/resort có đêm miễn phí hoặc giảm giá khi đặt bằng thẻ Mastercard.",
      "Moneyverse nhấn mạnh miễn phí thường niên 2 năm đầu, miễn phí rút tiền ATM BIDV và tích B-Point không giới hạn."
    ],
    conditions: [
      "Nhiều ưu đãi nằm trên Mastercard Priceless, cần kiểm tra issuer/product trước khi áp dụng.",
      "Thời hạn thay đổi theo từng đối tác."
    ],
    tags: ["Mastercard", "Priceless", "Du lịch", "Moneyverse"]
  }
];

function daysBetween(a, b) {
  return Math.ceil((b.getTime() - a.getTime()) / 86400000);
}

function statusFromDates(seed) {
  const end = new Date(`${seed.endDate}T23:59:59+07:00`);
  if (end < today) return "ended";
  if (daysBetween(today, end) <= 30) return "ending";
  return seed.status || "active";
}

function normalize(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function categoryIdsFor(card) {
  const text = normalize(JSON.stringify(card));
  const matches = categorySeeds
    .filter((category) => category.keywords.some((keyword) => text.includes(normalize(keyword))))
    .map((category) => category.id);
  if (card.thongTinPhanLoai?.hangThe?.match(/Infinite|Premier|Private/i)) matches.push("khach-hang-cao-cap");
  return [...new Set(matches.length ? matches : ["hoan-tien"])];
}

const promotions = promotionSeeds.map((promo) => ({
  ...promo,
  status: statusFromDates(promo),
  daysLeft: Math.max(0, daysBetween(today, new Date(`${promo.endDate}T23:59:59+07:00`))),
  partnerIds: partners
    .filter((partner) => {
      const haystack = normalize(`${promo.title} ${promo.summary} ${promo.benefits.join(" ")} ${promo.tags.join(" ")}`);
      return haystack.includes(normalize(partner.name));
    })
    .map((partner) => partner.id)
}));

const legacyPromotions = new Map();
for (const card of source.danhSachThe) {
  for (const promo of card.chuongTrinhKhuyenMaiLienQuan || []) {
    if (!promo.maChuongTrinh || legacyPromotions.has(promo.maChuongTrinh)) continue;
    const seed = {
      id: promo.maChuongTrinh,
      title: promo.tenChuongTrinh,
      cardIds: [],
      cardNames: [],
      organization: "BIDV",
      group: promo.nhom || "Khuyến mại",
      needGroups: ["hoan-tien"],
      status: promo.trangThai === "dang_hieu_luc" ? "active" : promo.trangThai || "active",
      startDate: promo.thoiGian?.batDau || "2026-01-01",
      endDate: promo.thoiGian?.ketThuc || "2026-12-31",
      image: "/assets/ui-kit/promotions/promo-new-card-1600x900.webp",
      sourceUrl: promo.nguon || "",
      summary: promo.tomTat || promo.tenChuongTrinh,
      benefits: promo.coChe || [],
      conditions: ["Theo thể lệ chương trình BIDV tại nguồn tham chiếu."],
      tags: [promo.nhom || "BIDV"]
    };
    legacyPromotions.set(promo.maChuongTrinh, seed);
  }
}

for (const card of source.danhSachThe) {
  for (const promo of card.chuongTrinhKhuyenMaiLienQuan || []) {
    const target = legacyPromotions.get(promo.maChuongTrinh);
    if (!target) continue;
    if (!target.cardIds.includes(card.maThe)) target.cardIds.push(card.maThe);
    if (!target.cardNames.includes(card.tenThe)) target.cardNames.push(card.tenThe);
  }
}

for (const promo of legacyPromotions.values()) {
  promotions.push({
    ...promo,
    status: statusFromDates(promo),
    daysLeft: Math.max(0, daysBetween(today, new Date(`${promo.endDate}T23:59:59+07:00`))),
    partnerIds: []
  });
}

const promoByCard = new Map();
for (const promo of promotions) {
  for (const cardId of promo.cardIds) {
    const items = promoByCard.get(cardId) || [];
    items.push(promo.id);
    promoByCard.set(cardId, items);
  }
}

const cards = source.danhSachThe.map((card) => {
  const info = card.thongTinPhanLoai || {};
  const details = card.chiTietThe || {};
  const imageSlug = card.maThe.replace("bidv-", "bidv-");
  return {
    id: card.maThe,
    name: card.tenThe,
    type: info.loaiThe || "Thẻ BIDV",
    tier: info.hangThe || "Tiêu chuẩn",
    organization: info.mangThe || "BIDV",
    status: info.trangThai || "active",
    positioning: info.nhanDien || "Chi tiêu thông minh",
    image: `/assets/ui-kit/cards/${imageSlug}-1200x760.webp`,
    fallbackImage: `/assets/cards/${encodeURIComponent(card.tenThe)}.png`,
    annualFee: details.phiThuongNien || "Cần kiểm chứng theo biểu phí BIDV",
    interestRate: details.laiSuat || "Cần kiểm chứng theo biểu phí BIDV",
    rewardLimit: details.hanMucHoanTienTichDiem || "Đang cập nhật",
    highlights: card.tinhNangDacTrung || [],
    details: details.quyenLoiVaTinhNangKhac || [],
    cautions: details.dieuKienCanLuuY || [],
    customerSegments: (card.khachHangTiemNang || []).map((item) => ({
      name: item.nhom,
      needs: item.nhuCau || [],
      objection: item.phanVanThuongGap || "",
      advice: item.goiYTuVan || ""
    })),
    needGroups: categoryIdsFor(card),
    promotionIds: promoByCard.get(card.maThe) || [],
    sourceUrl: details.nguonThamChieu || "https://card.nganhangso-hadong.online/"
  };
});

const categories = categorySeeds.map((category) => ({
  id: category.id,
  name: category.name,
  description: category.description,
  icon: category.icon,
  cardCount: cards.filter((card) => card.needGroups.includes(category.id)).length,
  promotionCount: promotions.filter((promo) => promo.needGroups.includes(category.id)).length
}));

for (const [file, payload] of [
  ["cards.json", cards],
  ["promotions.json", promotions],
  ["categories.json", categories],
  ["partners.json", partners]
]) {
  fs.writeFileSync(path.join(dataDir, file), `${JSON.stringify(payload, null, 2)}\n`, "utf8");
}

console.log(`Generated ${cards.length} cards, ${promotions.length} promotions, ${categories.length} categories, ${partners.length} partners.`);
