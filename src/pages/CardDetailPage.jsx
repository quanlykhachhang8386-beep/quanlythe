import { ArrowLeft, ExternalLink, GitCompare } from "lucide-react";
import PromotionTile from "../components/PromotionTile";
import { navigate } from "../utils/useHashRoute";

export default function CardDetailPage({ card, promotions, selected, onCompare }) {
  if (!card) {
    return (
      <section className="container-app py-10">
        <div className="surface p-8 text-center">
          <h1 className="text-2xl font-black">Không tìm thấy thẻ</h1>
          <button className="btn-primary mt-4" type="button" onClick={() => navigate("cards")}>Quay lại danh sách</button>
        </div>
      </section>
    );
  }

  const relatedPromotions = promotions.filter((promotion) => card.promotionIds.includes(promotion.id));

  return (
    <section className="container-app py-8">
      <button className="btn-secondary mb-5" type="button" onClick={() => navigate("cards")}>
        <ArrowLeft size={18} />
        Danh sách thẻ
      </button>
      <div className="surface overflow-hidden">
        <div className="grid gap-6 bg-gradient-to-br from-white via-white to-bidv-teal/10 p-5 lg:grid-cols-[0.95fr_1.05fr] lg:p-8">
          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-bidv-deep to-bidv-teal/70 p-5">
            <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-bidv-gold/25 blur-3xl" />
            <img
              src={`.${card.image}`}
              alt={card.name}
              className="floating-card-slow relative mx-auto aspect-[1.58] w-full object-contain drop-shadow-2xl"
              onError={(event) => {
                event.currentTarget.src = `.${card.fallbackImage}`;
              }}
            />
          </div>
          <div>
            <div className="flex flex-wrap gap-2">
              <span className="chip">{card.organization}</span>
              <span className="chip bg-bidv-gold/20 text-amber-800">{card.tier}</span>
              <span className="chip bg-slate-100 text-slate-700">{card.type}</span>
            </div>
            <h1 className="mt-4 text-3xl font-black text-bidv-ink sm:text-5xl">{card.name}</h1>
            <p className="mt-4 text-lg leading-8 text-slate-600">{card.positioning}</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-bidv-teal/10 p-4">
                <div className="text-xs font-bold uppercase tracking-wide text-slate-500">Phí thường niên</div>
                <div className="mt-2 font-black text-bidv-deep">{card.annualFee}</div>
              </div>
              <div className="rounded-2xl bg-bidv-teal/10 p-4">
                <div className="text-xs font-bold uppercase tracking-wide text-slate-500">Lãi suất</div>
                <div className="mt-2 font-black text-bidv-deep">{card.interestRate}</div>
              </div>
              <div className="rounded-2xl bg-bidv-teal/10 p-4 sm:col-span-2">
                <div className="text-xs font-bold uppercase tracking-wide text-slate-500">Hoàn tiền/Tích điểm</div>
                <div className="mt-2 font-black text-bidv-deep">{card.rewardLimit}</div>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-2">
              <button className="btn-primary" type="button" onClick={() => onCompare(card.id)}>
                <GitCompare size={18} />
                {selected ? "Bỏ khỏi so sánh" : "Thêm vào so sánh"}
              </button>
              {card.sourceUrl && (
                <a className="btn-secondary" href={card.sourceUrl} target="_blank" rel="noreferrer">
                  Nguồn tham chiếu
                  <ExternalLink size={18} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <section className="surface p-5 lg:p-6">
          <h2 className="text-2xl font-black text-bidv-ink">Quyền lợi nổi bật</h2>
          <div className="mt-4 grid gap-3">
            {card.highlights.map((item) => (
              <div className="rounded-2xl border border-slate-100 bg-white p-4 text-slate-700" key={item}>{item}</div>
            ))}
          </div>
        </section>

        <section className="surface p-5 lg:p-6">
          <h2 className="text-2xl font-black text-bidv-ink">Khách hàng phù hợp</h2>
          <div className="mt-4 grid gap-3">
            {card.customerSegments.map((segment) => (
              <article className="rounded-2xl border border-slate-100 p-4" key={segment.name}>
                <h3 className="font-black text-bidv-deep">{segment.name}</h3>
                <p className="mt-2 text-sm font-bold text-slate-500">{segment.needs.join(", ")}</p>
                <p className="mt-3 text-sm leading-6 text-slate-700">{segment.advice}</p>
              </article>
            ))}
          </div>
        </section>
      </div>

      <section className="mt-6">
        <div className="mb-4">
          <div className="text-sm font-bold uppercase tracking-wide text-bidv-teal">Đang áp dụng cho thẻ</div>
          <h2 className="text-3xl font-black text-bidv-ink">Khuyến mại liên quan</h2>
        </div>
        <div className="grid gap-4 lg:grid-cols-3">
          {relatedPromotions.map((promotion) => (
            <PromotionTile key={promotion.id} promotion={promotion} />
          ))}
        </div>
      </section>
    </section>
  );
}
