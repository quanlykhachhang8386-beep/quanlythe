import { useEffect, useMemo, useState } from "react";
import CardTile from "../components/CardTile";
import Filters from "../components/Filters";
import { joinSearchText } from "../utils/format";

const emptyFilters = {
  query: "",
  type: "",
  tier: "",
  organization: "",
  group: "",
  needGroup: "",
  status: ""
};

export default function CardsPage({ cards, promotions, categories, compareIds, onCompare }) {
  const [filters, setFilters] = useState(() => ({
    ...emptyFilters,
    query: window.sessionStorage.getItem("bidv:search") || "",
    needGroup: window.sessionStorage.getItem("bidv:category") || ""
  }));

  useEffect(() => {
    window.sessionStorage.removeItem("bidv:search");
    window.sessionStorage.removeItem("bidv:category");
    const searchHandler = (event) => setFilters((current) => ({ ...current, query: event.detail || "" }));
    const categoryHandler = (event) => setFilters((current) => ({ ...current, needGroup: event.detail || "" }));
    window.addEventListener("bidv:set-search", searchHandler);
    window.addEventListener("bidv:set-category", categoryHandler);
    return () => {
      window.removeEventListener("bidv:set-search", searchHandler);
      window.removeEventListener("bidv:set-category", categoryHandler);
    };
  }, []);

  const options = useMemo(() => {
    const promoGroups = [...new Set(promotions.map((promotion) => promotion.group))].sort();
    return {
      types: [...new Set(cards.map((card) => card.type))].sort(),
      tiers: [...new Set(cards.map((card) => card.tier))].sort(),
      organizations: [...new Set(cards.map((card) => card.organization))].sort(),
      groups: promoGroups,
      categories
    };
  }, [cards, categories, promotions]);

  const filtered = useMemo(() => {
    return cards.filter((card) => {
      const relatedPromotions = promotions.filter((promotion) => card.promotionIds.includes(promotion.id));
      const queryMatch = !filters.query || joinSearchText({ card, relatedPromotions }).includes(joinSearchText(filters.query));
      const typeMatch = !filters.type || card.type === filters.type;
      const tierMatch = !filters.tier || card.tier === filters.tier;
      const organizationMatch = !filters.organization || card.organization === filters.organization;
      const needMatch = !filters.needGroup || card.needGroups.includes(filters.needGroup);
      const groupMatch = !filters.group || relatedPromotions.some((promotion) => promotion.group === filters.group);
      return queryMatch && typeMatch && tierMatch && organizationMatch && needMatch && groupMatch;
    });
  }, [cards, filters, promotions]);

  return (
    <section className="container-app py-8">
      <div className="relative mb-6 overflow-hidden rounded-[2rem] bg-bidv-deep p-6 text-white shadow-soft sm:p-8">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-bidv-teal/30 blur-3xl" />
        <div className="absolute -bottom-24 left-1/3 h-56 w-56 rounded-full bg-bidv-gold/20 blur-3xl" />
        <div className="relative max-w-4xl">
          <div className="text-sm font-black uppercase tracking-[0.22em] text-bidv-gold">Danh sách thẻ</div>
          <h1 className="mt-2 text-4xl font-black leading-tight sm:text-6xl">Tra cứu sản phẩm thẻ BIDV</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-white/75">
            Lọc theo loại thẻ, hạng thẻ, tổ chức thẻ, nhóm ưu đãi và nhu cầu khách hàng. Mỗi sản phẩm liên kết trực tiếp với khuyến mại đang áp dụng.
          </p>
        </div>
      </div>
      <Filters value={filters} onChange={setFilters} options={options} />
      <div className="mt-4 text-sm font-bold text-slate-500">{filtered.length} thẻ phù hợp</div>
      <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((card) => (
          <CardTile
            key={card.id}
            card={card}
            promotions={promotions}
            selected={compareIds.includes(card.id)}
            onCompare={onCompare}
          />
        ))}
      </div>
      {!filtered.length && <div className="surface mt-4 p-8 text-center text-slate-600">Không tìm thấy thẻ phù hợp.</div>}
    </section>
  );
}
