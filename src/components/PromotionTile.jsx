import { AlertTriangle, CalendarDays, ExternalLink } from "lucide-react";
import { formatDate, getPromotionStatus, hasEndingWarning } from "../utils/format";
import { navigate } from "../utils/useHashRoute";

export default function PromotionTile({ promotion }) {
  const meta = getPromotionStatus(promotion);
  const headline = promotion.tags?.[0] || promotion.group;

  return (
    <article className="surface group overflow-hidden transition duration-500 hover:-translate-y-2 hover:border-bidv-teal/50 hover:shadow-2xl hover:shadow-bidv-deep/10">
      <button className="relative block w-full overflow-hidden text-left" type="button" onClick={() => navigate("promotions", promotion.id)}>
        <img src={`.${promotion.image}`} alt={promotion.title} className="aspect-[16/9] w-full object-cover transition duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-bidv-deep/80 via-bidv-deep/10 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <div className="text-3xl font-black leading-none sm:text-4xl">{headline}</div>
          <div className="mt-1 text-sm font-bold text-white/75">{promotion.group}</div>
        </div>
      </button>
      <div className="grid gap-4 p-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className={`inline-flex min-h-8 items-center rounded-full px-3 text-xs font-black ${meta.className}`}>{meta.label}</span>
          {hasEndingWarning(promotion) && (
            <span className="warning-chip">
              <AlertTriangle size={14} />
              Còn {promotion.daysLeft} ngày
            </span>
          )}
        </div>
        <div>
          <button className="text-left text-xl font-black text-bidv-ink hover:text-bidv-blue" type="button" onClick={() => navigate("promotions", promotion.id)}>
            {promotion.title}
          </button>
          <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-600">{promotion.summary}</p>
        </div>
        <div className="flex items-start gap-2 rounded-2xl bg-slate-50 p-3 text-sm font-bold text-slate-700">
          <CalendarDays size={17} className="mt-0.5 shrink-0 text-bidv-teal" />
          <span>{formatDate(promotion.startDate)} - {formatDate(promotion.endDate)}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {promotion.tags.slice(0, 4).map((tag) => (
            <span className="chip" key={tag}>{tag}</span>
          ))}
        </div>
        <div className="grid grid-cols-[1fr_auto] gap-2">
          <button className="btn-primary" type="button" onClick={() => navigate("promotions", promotion.id)}>
            Xem thể lệ
          </button>
          {promotion.sourceUrl && (
            <a className="btn-secondary px-3" href={promotion.sourceUrl} target="_blank" rel="noreferrer" aria-label="Mở nguồn">
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
