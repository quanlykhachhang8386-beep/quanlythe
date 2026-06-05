import { ArrowLeft, BadgeCheck, BookOpen, ExternalLink, GitCompare, ShieldCheck, Sparkles, WalletCards } from "lucide-react";
import { useState } from "react";
import PromotionTile from "../components/PromotionTile";
import { navigate } from "../utils/useHashRoute";

export default function CardDetailPage({ card, promotions, selected, onCompare }) {
  const [activeTab, setActiveTab] = useState("overview");

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
  const handbook = card.handbook || {};
  const cardImage = card.portraitImage || card.fallbackImage || card.image;
  const tabs = [
    { id: "overview", label: "Tổng quan", icon: BadgeCheck },
    { id: "fees", label: "Biểu phí & điều kiện", icon: WalletCards },
    { id: "services", label: "Dịch vụ & bảo mật", icon: ShieldCheck },
    { id: "customers", label: "Khách hàng", icon: Sparkles }
  ];

  return (
    <section className="container-app py-8">
      <button className="btn-secondary mb-5" type="button" onClick={() => navigate("cards")}>
        <ArrowLeft size={18} />
        Danh sách thẻ
      </button>
      <div className="surface overflow-hidden">
        <div className="grid gap-6 bg-gradient-to-br from-white via-white to-bidv-teal/10 p-5 lg:grid-cols-[0.82fr_1.18fr] lg:p-8">
          <div className="relative grid min-h-[28rem] place-items-center overflow-hidden rounded-[2rem] bg-[radial-gradient(circle_at_52%_16%,rgba(243,181,34,0.28),transparent_34%),linear-gradient(145deg,#00343d,#006b66_72%)] p-8">
            <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-bidv-gold/25 blur-3xl" />
            <div className="absolute inset-x-14 bottom-12 h-20 rounded-full bg-black/25 blur-3xl" />
            <div className="floating-card-slow relative grid h-80 w-52 place-items-center rounded-[1.85rem] border border-white/20 bg-white/15 shadow-2xl shadow-black/25 backdrop-blur-xl">
              <div className="shine-layer absolute inset-y-0 left-0 z-10 w-1/2" />
              <img
                src={`.${cardImage}`}
                alt={card.name}
                className="portrait-card-img relative z-20"
                onError={(event) => {
                  event.currentTarget.src = `.${card.image}`;
                }}
              />
            </div>
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

      <section className="surface mt-6 overflow-hidden">
        <div className="border-b border-slate-100 bg-white/80 p-3">
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const active = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  className={active ? "tab-button tab-button-active" : "tab-button"}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                >
                  <Icon size={18} />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="p-5 lg:p-7">
          {activeTab === "overview" && (
            <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
              <div>
                <div className="section-kicker">Theo cẩm nang thẻ</div>
                <h2 className="mt-2 text-3xl font-black text-bidv-ink">Mô hình sản phẩm</h2>
                <p className="mt-4 rounded-3xl bg-bidv-teal/10 p-5 leading-8 text-slate-700">{handbook.productModel}</p>
                <p className="mt-3 rounded-3xl bg-slate-50 p-5 leading-8 text-slate-700">{handbook.operatingSystem}</p>
              </div>
              <div>
                <h3 className="flex items-center gap-2 text-xl font-black text-bidv-ink">
                  <BookOpen size={20} className="text-bidv-teal" />
                  Quyền lợi nổi bật
                </h3>
                <div className="mt-4 grid gap-3">
                  {card.highlights.map((item) => (
                    <div className="rounded-2xl border border-slate-100 bg-white p-4 text-sm leading-6 text-slate-700 shadow-sm" key={item}>{item}</div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "fees" && (
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="grid gap-3">
                {[
                  ["Phí thường niên", card.annualFee],
                  ["Lãi suất", card.interestRate],
                  ["Hoàn tiền/Tích điểm", card.rewardLimit]
                ].map(([label, value]) => (
                  <div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm" key={label}>
                    <div className="text-xs font-black uppercase tracking-wide text-slate-500">{label}</div>
                    <div className="mt-2 font-black leading-7 text-bidv-deep">{value}</div>
                  </div>
                ))}
              </div>
              <div>
                <h2 className="text-2xl font-black text-bidv-ink">Lưu ý triển khai</h2>
                <div className="mt-4 grid gap-3">
                  {[...(card.cautions || []), ...(handbook.implementationNotes || [])].map((item) => (
                    <div className="rounded-2xl bg-amber-50 p-4 text-sm leading-6 text-amber-900" key={item}>{item}</div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "services" && (
            <div className="grid gap-6 lg:grid-cols-2">
              <div>
                <h2 className="text-2xl font-black text-bidv-ink">Dịch vụ gia tăng</h2>
                <div className="mt-4 grid gap-3">
                  {(handbook.valueAddedServices || []).map((item) => (
                    <div className="rounded-2xl border border-bidv-teal/10 bg-bidv-teal/10 p-4 text-sm leading-6 text-slate-700" key={item}>{item}</div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-black text-bidv-ink">Bảo mật & an toàn thẻ</h2>
                <div className="mt-4 grid gap-3">
                  {(handbook.securityNotes || []).map((item) => (
                    <div className="rounded-2xl border border-slate-100 bg-white p-4 text-sm leading-6 text-slate-700 shadow-sm" key={item}>{item}</div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === "customers" && (
            <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
              <div>
                <h2 className="text-2xl font-black text-bidv-ink">Khách hàng phù hợp</h2>
                <div className="mt-4 grid gap-3">
                  {card.customerSegments.map((segment) => (
                    <article className="rounded-2xl border border-slate-100 p-4 shadow-sm" key={segment.name}>
                      <h3 className="font-black text-bidv-deep">{segment.name}</h3>
                      <p className="mt-2 text-sm font-bold text-slate-500">{segment.needs.join(", ")}</p>
                      <p className="mt-3 text-sm leading-6 text-slate-700">{segment.advice}</p>
                    </article>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-black text-bidv-ink">Trọng tâm tư vấn</h2>
                <div className="mt-4 grid gap-3">
                  {(handbook.advisoryFocus || []).map((item) => (
                    <div className="rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-700" key={item}>{item}</div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

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
