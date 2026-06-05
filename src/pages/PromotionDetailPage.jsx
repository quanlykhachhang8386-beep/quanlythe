import { ArrowLeft, CalendarDays, ExternalLink } from "lucide-react";
import CardTile from "../components/CardTile";
import { formatDate, getPromotionStatus, hasEndingWarning } from "../utils/format";
import { navigate } from "../utils/useHashRoute";

export default function PromotionDetailPage({ promotion, cards, promotions, compareIds, onCompare }) {
  if (!promotion) {
    return (
      <section className="container-app py-10">
        <div className="surface p-8 text-center">
          <h1 className="text-2xl font-black">Không tìm thấy khuyến mại</h1>
          <button className="btn-primary mt-4" type="button" onClick={() => navigate("promotions")}>Quay lại danh sách</button>
        </div>
      </section>
    );
  }

  const meta = getPromotionStatus(promotion);
  const relatedCards = cards.filter((card) => promotion.cardIds.includes(card.id));

  return (
    <section className="container-app py-8">
      <button className="btn-secondary mb-5" type="button" onClick={() => navigate("promotions")}>
        <ArrowLeft size={18} />
        Danh sách khuyến mại
      </button>

      <article className="surface overflow-hidden">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative min-h-72 overflow-hidden">
            <img src={`.${promotion.image}`} alt={promotion.title} className="h-full min-h-72 w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-bidv-deep/80 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 text-white">
              <div className="text-5xl font-black leading-none">{promotion.tags?.[0] || promotion.group}</div>
              <div className="mt-1 text-sm font-bold text-white/70">{promotion.organization}</div>
            </div>
          </div>
          <div className="p-5 lg:p-8">
            <div className="flex flex-wrap gap-2">
              <span className={`inline-flex min-h-8 items-center rounded-full px-3 text-xs font-black ${meta.className}`}>{meta.label}</span>
              {hasEndingWarning(promotion) && <span className="warning-chip">Còn {promotion.daysLeft} ngày</span>}
              <span className="chip">{promotion.organization}</span>
              <span className="chip bg-bidv-gold/20 text-amber-800">{promotion.group}</span>
            </div>
            <h1 className="mt-4 text-3xl font-black text-bidv-ink sm:text-5xl">{promotion.title}</h1>
            <p className="mt-4 text-lg leading-8 text-slate-600">{promotion.summary}</p>
            <div className="mt-5 flex items-start gap-2 rounded-2xl bg-bidv-teal/10 p-4 font-bold text-bidv-deep">
              <CalendarDays className="mt-0.5 shrink-0" size={19} />
              {formatDate(promotion.startDate)} - {formatDate(promotion.endDate)}
            </div>
            {promotion.sourceUrl && (
              <a className="btn-primary mt-5" href={promotion.sourceUrl} target="_blank" rel="noreferrer">
                Mở nguồn chương trình
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </div>
      </article>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <section className="surface p-5 lg:p-6">
          <h2 className="text-2xl font-black text-bidv-ink">Quyền lợi chính</h2>
          <ul className="mt-4 grid gap-3">
            {promotion.benefits.map((item) => (
              <li className="rounded-2xl border border-slate-100 bg-white p-4 leading-6 text-slate-700" key={item}>{item}</li>
            ))}
          </ul>
        </section>
        <section className="surface p-5 lg:p-6">
          <h2 className="text-2xl font-black text-bidv-ink">Điều kiện áp dụng</h2>
          <ul className="mt-4 grid gap-3">
            {promotion.conditions.map((item) => (
              <li className="rounded-2xl border border-slate-100 bg-white p-4 leading-6 text-slate-700" key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </div>

      <section className="mt-6">
        <div className="mb-4">
          <div className="text-sm font-bold uppercase tracking-wide text-bidv-teal">Sản phẩm áp dụng</div>
          <h2 className="text-3xl font-black text-bidv-ink">Thẻ liên quan</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {relatedCards.map((card) => (
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
    </section>
  );
}
