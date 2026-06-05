import { ArrowRight, BadgeCheck, Search, Sparkles } from "lucide-react";
import { useState } from "react";
import { navigate } from "../utils/useHashRoute";

export default function SearchHero({ categories }) {
  const [query, setQuery] = useState("");

  const submit = (event) => {
    event.preventDefault();
    window.sessionStorage.setItem("bidv:search", query);
    navigate("cards");
    window.setTimeout(() => {
      window.dispatchEvent(new CustomEvent("bidv:set-search", { detail: query }));
    }, 30);
  };

  return (
    <section className="relative isolate overflow-hidden bg-[#002f38] text-white">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-35"
        style={{ backgroundImage: 'url("./assets/ui-kit/hero/hero-bg-desktop-1920x1080.webp")' }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,166,166,0.42),transparent_30%),radial-gradient(circle_at_78%_18%,rgba(243,181,34,0.22),transparent_28%),linear-gradient(135deg,rgba(0,75,90,0.98),rgba(0,36,47,0.92)_45%,rgba(0,107,87,0.78))]" />
      <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-bidv-teal/20 blur-3xl" />
      <div className="container-app relative grid min-h-[calc(100vh-4rem)] items-center gap-10 pb-24 pt-12 lg:grid-cols-[1.02fr_0.98fr] lg:pb-20">
        <div className="reveal-card max-w-3xl">
          <span className="mb-5 inline-flex min-h-10 items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 text-sm font-black text-bidv-gold shadow-lg shadow-black/10 backdrop-blur-xl">
            <Sparkles size={17} />
            Premium BIDV Card Intelligence
          </span>
          <h1 className="text-5xl font-black leading-[0.94] tracking-tight sm:text-6xl lg:text-8xl">
            Tìm thẻ BIDV phù hợp trong một trải nghiệm cao cấp.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/80 sm:text-xl">
            Một landing page tra cứu thông tin thẻ, biểu phí, điều kiện và khuyến mại theo cách trực quan, tinh gọn, dễ dùng cho cả tư vấn tại quầy lẫn trên điện thoại.
          </p>

          <form className="mt-8 rounded-[1.35rem] border border-white/25 bg-white/10 p-2 shadow-2xl shadow-black/20 backdrop-blur-2xl sm:flex" onSubmit={submit}>
            <label className="flex min-h-14 flex-1 items-center gap-3 px-3 text-bidv-ink">
              <Search className="shrink-0 text-bidv-gold" size={22} />
              <input
                className="w-full bg-transparent text-base font-semibold text-white outline-none placeholder:text-white/50"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Nhập tên thẻ, ưu đãi, nhu cầu..."
              />
            </label>
            <button className="btn-primary mt-2 w-full sm:mt-0 sm:w-auto" type="submit">
              Tìm kiếm
              <ArrowRight size={18} />
            </button>
          </form>

          <div className="mt-6 flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-bold text-white/90 backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:bg-white/20"
                type="button"
                onClick={() => {
                  window.sessionStorage.setItem("bidv:category", category.id);
                  navigate("cards");
                  window.setTimeout(() => {
                    window.dispatchEvent(new CustomEvent("bidv:set-category", { detail: category.id }));
                  }, 30);
                }}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="mt-8 grid max-w-xl grid-cols-3 gap-3">
            {[
              ["17+", "Sản phẩm"],
              ["14", "Ưu đãi"],
              ["3D", "Tra cứu"]
            ].map(([value, label]) => (
              <div className="glass-panel p-4" key={label}>
                <div className="text-2xl font-black text-white">{value}</div>
                <div className="mt-1 text-xs font-bold uppercase tracking-wide text-white/60">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal-card relative mx-auto h-[440px] w-full max-w-xl sm:h-[560px] lg:h-[650px]" style={{ animationDelay: "120ms" }}>
          <div className="absolute inset-x-8 bottom-12 h-24 rounded-full bg-black/30 blur-3xl" />
          <div className="glass-panel absolute right-0 top-8 z-20 hidden w-52 p-4 text-white sm:block">
            <div className="flex items-center gap-2 text-sm font-black">
              <BadgeCheck size={18} className="text-bidv-gold" />
              Đang áp dụng
            </div>
            <div className="mt-2 text-3xl font-black">14</div>
            <div className="text-sm text-white/60">campaign & đặc quyền</div>
          </div>
          <div className="floating-card absolute left-0 top-14 z-30 w-[78%] max-w-[440px] rounded-[2rem] bg-white/10 p-3 shadow-2xl shadow-black/30 backdrop-blur-xl">
            <div className="relative overflow-hidden rounded-[1.5rem]">
              <div className="shine-layer absolute inset-y-0 left-0 z-10 w-1/2" />
              <img src="./assets/ui-kit/cards/bidv-private-banking-1200x760.webp" alt="BIDV Private Banking" className="w-full" />
            </div>
          </div>
          <div className="floating-card-slow absolute bottom-20 right-0 z-20 w-[68%] max-w-[390px] rounded-[2rem] bg-white/10 p-3 shadow-2xl shadow-black/25 backdrop-blur-xl" style={{ animationDelay: "800ms" }}>
            <div className="relative overflow-hidden rounded-[1.5rem]">
              <div className="shine-layer absolute inset-y-0 left-0 z-10 w-1/2" />
              <img src="./assets/ui-kit/cards/bidv-visa-infinite-1200x760.webp" alt="BIDV Visa Infinite" className="w-full" />
            </div>
          </div>
          <div className="floating-card absolute bottom-4 left-12 z-10 w-[56%] max-w-[320px] rounded-[1.7rem] bg-white/10 p-3 shadow-2xl shadow-black/20 backdrop-blur-xl" style={{ animationDelay: "1400ms" }}>
            <div className="relative overflow-hidden rounded-[1.25rem]">
              <div className="shine-layer absolute inset-y-0 left-0 z-10 w-1/2" />
              <img src="./assets/ui-kit/cards/bidv-jcb-ultimate-1200x760.webp" alt="BIDV JCB Ultimate" className="w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
