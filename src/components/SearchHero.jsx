import { ArrowRight, BadgeCheck, ChevronRight, Search, Sparkles } from "lucide-react";
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

  const chooseCategory = (categoryId) => {
    window.sessionStorage.setItem("bidv:category", categoryId);
    navigate("cards");
    window.setTimeout(() => {
      window.dispatchEvent(new CustomEvent("bidv:set-category", { detail: categoryId }));
    }, 30);
  };

  return (
    <section className="relative isolate overflow-hidden bg-[#eef8f7]">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#f8fffe_0%,#dff4f2_36%,#f8fbf6_62%,#ffffff_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_12%,rgba(0,166,166,0.24),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(243,181,34,0.20),transparent_26%),linear-gradient(115deg,transparent_0%,rgba(0,60,74,0.08)_58%,rgba(0,60,74,0.16)_100%)]" />
      <div className="absolute right-0 top-0 hidden h-full w-[44%] bg-bidv-deep lg:block" />
      <div className="absolute right-[10%] top-16 hidden h-72 w-72 rounded-full bg-bidv-teal/30 blur-3xl lg:block" />

      <div className="container-app relative grid min-h-[calc(100vh-4rem)] items-center gap-10 pb-16 pt-10 lg:grid-cols-[0.92fr_1.08fr] lg:pb-20">
        <div className="reveal-card max-w-3xl">
          <span className="mb-5 inline-flex min-h-10 items-center gap-2 rounded-full border border-bidv-teal/15 bg-white/70 px-4 text-sm font-black text-bidv-deep shadow-sm backdrop-blur-xl">
            <Sparkles size={17} />
            BIDV Card Lookup Studio
          </span>
          <h1 className="max-w-4xl text-5xl font-black leading-[0.98] tracking-tight text-bidv-ink sm:text-6xl lg:text-7xl">
            Một màn hình, nắm trọn sản phẩm thẻ BIDV.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-xl">
            Tra cứu thẻ, ưu đãi, biểu phí, điều kiện áp dụng và gợi ý tư vấn theo nhu cầu khách hàng trong một giao diện gọn như dashboard, nổi bật như landing page premium.
          </p>

          <form className="mt-8 rounded-[1.35rem] border border-white/80 bg-white/90 p-2 shadow-2xl shadow-bidv-deep/10 backdrop-blur-2xl sm:flex" onSubmit={submit}>
            <label className="flex min-h-14 flex-1 items-center gap-3 px-3 text-bidv-ink">
              <Search className="shrink-0 text-bidv-teal" size={22} />
              <input
                className="w-full bg-transparent text-base font-semibold text-bidv-ink outline-none placeholder:text-slate-400"
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

          <div className="mt-6 grid gap-2 sm:grid-cols-2">
            {categories.slice(0, 4).map((category) => (
              <button
                key={category.id}
                className="group flex min-h-14 items-center justify-between rounded-2xl border border-white/80 bg-white/70 px-4 text-left text-sm font-black text-bidv-deep shadow-sm backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:border-bidv-teal/40 hover:bg-white"
                type="button"
                onClick={() => chooseCategory(category.id)}
              >
                <span>{category.name}</span>
                <ChevronRight className="text-bidv-teal transition group-hover:translate-x-1" size={18} />
              </button>
            ))}
          </div>

          <div className="mt-8 grid max-w-xl grid-cols-3 gap-3">
            {[
              ["17+", "Sản phẩm"],
              ["14", "Ưu đãi"],
              ["3D", "Tra cứu"]
            ].map(([value, label]) => (
              <div className="rounded-2xl border border-white/80 bg-white/65 p-4 shadow-sm backdrop-blur-xl" key={label}>
                <div className="text-2xl font-black text-bidv-deep">{value}</div>
                <div className="mt-1 text-xs font-bold uppercase tracking-wide text-slate-500">{label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal-card relative mx-auto h-[560px] w-full max-w-2xl lg:h-[660px]" style={{ animationDelay: "120ms" }}>
          <div className="absolute inset-x-10 bottom-16 h-28 rounded-full bg-bidv-deep/25 blur-3xl" />
          <div className="absolute left-1/2 top-8 h-[500px] w-[78%] -translate-x-1/2 rounded-[2.4rem] border border-white/25 bg-white/20 shadow-2xl shadow-bidv-deep/20 backdrop-blur-2xl lg:bg-white/10" />
          <div className="absolute right-2 top-20 z-30 w-48 rounded-[1.4rem] border border-white/40 bg-white/80 p-4 text-bidv-deep shadow-xl backdrop-blur-xl sm:right-10">
            <div className="flex items-center gap-2 text-sm font-black">
              <BadgeCheck size={18} className="text-bidv-teal" />
              Cảnh báo ưu đãi
            </div>
            <div className="mt-2 text-3xl font-black">Live</div>
            <div className="text-sm text-slate-500">sắp hết hạn, đang áp dụng</div>
          </div>
          <div className="floating-card absolute left-[10%] top-20 z-30 grid h-80 w-52 place-items-center rounded-[2rem] border border-white/25 bg-white/20 p-4 shadow-2xl shadow-black/20 backdrop-blur-xl">
            <div className="shine-layer absolute inset-y-0 left-0 z-10 w-1/2" />
            <img src="./assets/cards/BIDV%20Private%20Banking.png" alt="BIDV Private Banking" className="portrait-card-img relative z-20" />
          </div>
          <div className="floating-card-slow absolute bottom-16 right-[8%] z-20 grid h-72 w-48 place-items-center rounded-[1.8rem] border border-white/25 bg-white/20 p-4 shadow-2xl shadow-black/20 backdrop-blur-xl" style={{ animationDelay: "700ms" }}>
            <div className="shine-layer absolute inset-y-0 left-0 z-10 w-1/2" />
            <img src="./assets/cards/BIDV%20Visa%20Infinite.png" alt="BIDV Visa Infinite" className="portrait-card-img relative z-20" />
          </div>
          <div className="absolute bottom-28 left-3 z-40 max-w-[15rem] rounded-[1.4rem] border border-white/70 bg-white/90 p-4 shadow-xl shadow-bidv-deep/10 backdrop-blur-xl sm:left-10">
            <div className="text-xs font-black uppercase tracking-wide text-bidv-teal">Tư vấn nhanh</div>
            <div className="mt-2 text-lg font-black text-bidv-ink">Chọn theo nhu cầu, xem ngay thẻ và ưu đãi phù hợp.</div>
          </div>
          <div className="absolute bottom-8 left-1/2 z-10 w-[88%] -translate-x-1/2 overflow-hidden rounded-[1.6rem] border border-white/40 bg-white/75 p-4 shadow-2xl shadow-bidv-deep/10 backdrop-blur-xl">
            <div className="grid grid-cols-3 gap-3">
              {["Du lịch", "Hoàn tiền", "Cao cấp"].map((item) => (
                <div className="rounded-2xl bg-bidv-teal/10 px-3 py-4 text-center text-sm font-black text-bidv-deep" key={item}>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
