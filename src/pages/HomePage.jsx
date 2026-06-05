import { AlertTriangle, ArrowRight, CreditCard, Gift, Users } from "lucide-react";
import CardTile from "../components/CardTile";
import PromotionTile from "../components/PromotionTile";
import QuickCategories from "../components/QuickCategories";
import SearchHero from "../components/SearchHero";

export default function HomePage({ cards, promotions, categories, compareIds, onCompare }) {
  const activePromotions = promotions.filter((promotion) => promotion.status !== "ended");
  const endingPromotions = promotions.filter((promotion) => promotion.status === "ending");
  const featuredCards = cards.slice(0, 6);
  const featuredPromotions = activePromotions.slice(0, 3);

  return (
    <>
      <SearchHero categories={categories} />
      <QuickCategories categories={categories} />

      <section className="container-app grid gap-4 py-10 sm:grid-cols-2 lg:grid-cols-4">
        {[
          ["Tổng sản phẩm", cards.length, CreditCard],
          ["Khuyến mại", promotions.length, Gift],
          ["Sắp hết hạn", endingPromotions.length, AlertTriangle],
          ["Nhóm nhu cầu", categories.length, Users]
        ].map(([label, value, Icon]) => (
          <article className="surface reveal-card group relative overflow-hidden p-6 transition duration-500 hover:-translate-y-1" key={label}>
            <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-bidv-teal/10 transition duration-500 group-hover:scale-150" />
            <Icon className="relative text-bidv-teal" size={24} />
            <div className="mt-4 text-sm font-bold text-slate-500">{label}</div>
            <div className="mt-1 text-3xl font-black text-bidv-ink">{value}</div>
          </article>
        ))}
      </section>

      <section className="container-app pb-10">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <div className="section-kicker">Sản phẩm nổi bật</div>
            <h2 className="premium-title mt-2">Tra cứu nhanh thẻ BIDV</h2>
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {featuredCards.map((card) => (
            <CardTile
              key={card.id}
              card={card}
              promotions={promotions}
              selected={compareIds.includes(card.id)}
              onCompare={onCompare}
            />
          ))}
        </div>
      </section>

      <section className="container-app pb-10">
        <div className="relative overflow-hidden rounded-[2rem] bg-bidv-deep p-5 text-white shadow-soft sm:p-8 lg:p-10">
          <img src="./assets/ui-kit/promotions/promo-travel-1600x900.webp" alt="" className="absolute inset-0 h-full w-full object-cover opacity-35" />
          <div className="absolute inset-0 bg-gradient-to-r from-bidv-deep via-bidv-deep/80 to-bidv-teal/50" />
          <div className="relative grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-3xl">
              <div className="text-sm font-black uppercase tracking-[0.22em] text-bidv-gold">Campaign spotlight</div>
              <h2 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">Đừng bỏ lỡ các ưu đãi sắp hết hạn.</h2>
              <p className="mt-4 text-lg leading-8 text-white/75">
                Các chương trình có thời hạn ngắn được cảnh báo tự động để đội tư vấn ưu tiên nhắc khách đúng thời điểm.
              </p>
            </div>
            <a className="btn-primary" href="#/promotions">
              Xem khuyến mại
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <section className="container-app pb-16">
        <div className="mb-6">
          <div className="section-kicker">Khuyến mại đang áp dụng</div>
          <h2 className="premium-title mt-2">Ưu đãi cần nắm hôm nay</h2>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {featuredPromotions.map((promotion) => (
            <PromotionTile key={promotion.id} promotion={promotion} />
          ))}
        </div>
      </section>
    </>
  );
}
