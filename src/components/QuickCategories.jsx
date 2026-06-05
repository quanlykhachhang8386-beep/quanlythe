import { ArrowRight } from "lucide-react";
import { navigate } from "../utils/useHashRoute";

export default function QuickCategories({ categories }) {
  return (
    <section className="container-app -mt-8 relative z-10">
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {categories.map((category) => (
          <button
            key={category.id}
            className="surface group relative overflow-hidden p-4 text-left transition duration-500 hover:-translate-y-2 hover:border-bidv-teal/50"
            type="button"
            onClick={() => {
              window.sessionStorage.setItem("bidv:category", category.id);
              navigate("cards");
              window.setTimeout(() => window.dispatchEvent(new CustomEvent("bidv:set-category", { detail: category.id })), 30);
            }}
          >
            <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-bidv-teal/10 transition duration-500 group-hover:scale-150" />
            <div className="relative mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-bidv-teal/10 to-bidv-gold/20 shadow-inner">
              <img src={`.${category.icon}`} alt="" className="h-8 w-8" />
            </div>
            <div className="relative font-black text-bidv-deep">{category.name}</div>
            <div className="mt-1 text-sm text-slate-600">{category.cardCount} thẻ · {category.promotionCount} ưu đãi</div>
            <ArrowRight className="mt-4 text-bidv-teal transition group-hover:translate-x-1" size={18} />
          </button>
        ))}
      </div>
    </section>
  );
}
