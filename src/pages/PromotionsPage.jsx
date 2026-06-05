import { useMemo, useState } from "react";
import Filters from "../components/Filters";
import PromotionTile from "../components/PromotionTile";
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

export default function PromotionsPage({ cards, promotions, categories }) {
  const [filters, setFilters] = useState(emptyFilters);

  const options = useMemo(() => ({
    types: [...new Set(cards.map((card) => card.type))].sort(),
    tiers: [...new Set(cards.map((card) => card.tier))].sort(),
    organizations: [...new Set(promotions.map((promotion) => promotion.organization))].sort(),
    groups: [...new Set(promotions.map((promotion) => promotion.group))].sort(),
    categories
  }), [cards, categories, promotions]);

  const filtered = useMemo(() => {
    return promotions.filter((promotion) => {
      const relatedCards = cards.filter((card) => promotion.cardIds.includes(card.id));
      const queryMatch = !filters.query || joinSearchText({ promotion, relatedCards }).includes(joinSearchText(filters.query));
      const typeMatch = !filters.type || relatedCards.some((card) => card.type === filters.type);
      const tierMatch = !filters.tier || relatedCards.some((card) => card.tier === filters.tier);
      const organizationMatch = !filters.organization || promotion.organization === filters.organization;
      const needMatch = !filters.needGroup || promotion.needGroups.includes(filters.needGroup);
      const groupMatch = !filters.group || promotion.group === filters.group;
      const statusMatch = !filters.status || promotion.status === filters.status;
      return queryMatch && typeMatch && tierMatch && organizationMatch && needMatch && groupMatch && statusMatch;
    });
  }, [cards, filters, promotions]);

  return (
    <section className="container-app py-8">
      <div className="relative mb-6 overflow-hidden rounded-[2rem] bg-bidv-deep p-6 text-white shadow-soft sm:p-8">
        <img src="./assets/ui-kit/promotions/promo-cashback-1600x900.webp" alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-bidv-deep via-bidv-deep/90 to-bidv-teal/50" />
        <div className="relative max-w-4xl">
          <div className="text-sm font-black uppercase tracking-[0.22em] text-bidv-gold">Khuyến mại</div>
          <h1 className="mt-2 text-4xl font-black leading-tight sm:text-6xl">Danh sách chương trình ưu đãi</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-white/75">
            Theo dõi trạng thái, thời gian hiệu lực, điều kiện chính và các thẻ được áp dụng. Chương trình sắp hết hạn được cảnh báo nổi bật.
          </p>
        </div>
      </div>
      <Filters value={filters} onChange={setFilters} options={options} includeStatus />
      <div className="mt-4 text-sm font-bold text-slate-500">{filtered.length} chương trình phù hợp</div>
      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        {filtered.map((promotion) => (
          <PromotionTile key={promotion.id} promotion={promotion} />
        ))}
      </div>
      {!filtered.length && <div className="surface mt-4 p-8 text-center text-slate-600">Không tìm thấy chương trình phù hợp.</div>}
    </section>
  );
}
