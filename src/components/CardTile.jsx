import { ArrowUpRight, GitCompare, ShieldCheck, Sparkles } from "lucide-react";
import { navigate } from "../utils/useHashRoute";

export default function CardTile({ card, promotions, selected, onCompare }) {
  const activePromos = promotions.filter((promo) => card.promotionIds.includes(promo.id) && promo.status !== "ended");

  return (
    <article className="surface group overflow-hidden transition duration-500 hover:-translate-y-2 hover:border-bidv-teal/50 hover:shadow-2xl hover:shadow-bidv-deep/10">
      <button className="relative block w-full overflow-hidden bg-gradient-to-br from-white via-bidv-teal/10 to-bidv-gold/20 p-5" type="button" onClick={() => navigate("cards", card.id)}>
        <div className="absolute left-6 top-6 rounded-full bg-white/70 px-3 py-1 text-xs font-black text-bidv-deep shadow-sm">{card.organization}</div>
        <div className="absolute -right-14 -top-14 h-36 w-36 rounded-full bg-bidv-teal/20 blur-2xl transition duration-500 group-hover:scale-125" />
        <img
          src={`.${card.image}`}
          alt={card.name}
          className="relative mx-auto aspect-[1.58] h-44 w-full object-contain drop-shadow-2xl transition duration-500 group-hover:-translate-y-2 group-hover:scale-[1.03]"
          onError={(event) => {
            event.currentTarget.src = `.${card.fallbackImage}`;
          }}
        />
      </button>
      <div className="grid gap-4 p-5">
        <div className="flex flex-wrap gap-2">
          <span className="chip bg-bidv-gold/20 text-amber-800">{card.tier}</span>
          <span className="chip bg-slate-100 text-slate-700">{card.type}</span>
        </div>
        <div>
          <button className="text-left text-xl font-black text-bidv-ink hover:text-bidv-blue" type="button" onClick={() => navigate("cards", card.id)}>
            {card.name}
          </button>
          <p className="mt-2 line-clamp-3 text-sm leading-6 text-slate-600">{card.highlights.slice(0, 3).join(" · ")}</p>
        </div>
        <div className="grid gap-2 text-sm">
          <div className="flex items-start gap-2 text-slate-700">
            <ShieldCheck size={17} className="mt-0.5 shrink-0 text-bidv-teal" />
            <span>{card.rewardLimit}</span>
          </div>
          <div className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-bidv-teal/10 to-bidv-gold/15 p-3 font-black text-bidv-deep">
            <Sparkles size={16} className="text-bidv-gold" />
            {activePromos.length} khuyến mại đang/sắp áp dụng
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <button className="btn-primary" type="button" onClick={() => navigate("cards", card.id)}>
            Chi tiết
            <ArrowUpRight size={17} />
          </button>
          <button className={selected ? "btn-secondary border-bidv-teal bg-bidv-teal/10" : "btn-secondary"} type="button" onClick={() => onCompare(card.id)}>
            <GitCompare size={17} />
            {selected ? "Đã chọn" : "So sánh"}
          </button>
        </div>
      </div>
    </article>
  );
}
