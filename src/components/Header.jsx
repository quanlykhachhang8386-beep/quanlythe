import { CreditCard, Menu, Phone, Search, X } from "lucide-react";
import { useState } from "react";
import { navigate } from "../utils/useHashRoute";

const navItems = [
  { page: "home", label: "Trang chủ" },
  { page: "cards", label: "Danh sách thẻ" },
  { page: "promotions", label: "Khuyến mại" },
  { page: "compare", label: "So sánh" }
];

export default function Header({ route, onContact }) {
  const [open, setOpen] = useState(false);

  const go = (page) => {
    navigate(page);
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-white/70 bg-white/90 backdrop-blur-xl">
      <div className="container-app flex min-h-16 items-center justify-between gap-3">
        <button className="flex items-center gap-3 text-left" onClick={() => go("home")} type="button">
          <img src="./assets/ui-kit/brand/bidv-logo.svg" alt="BIDV" className="h-9 w-24 object-contain" />
          <span className="hidden text-sm font-bold text-bidv-deep sm:inline">Card Lookup</span>
        </button>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <button
              key={item.page}
              className={`rounded-xl px-4 py-2 text-sm font-bold transition ${
                route.page === item.page ? "bg-bidv-teal/10 text-bidv-deep" : "text-slate-600 hover:bg-slate-100"
              }`}
              type="button"
              onClick={() => go(item.page)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="hidden items-center gap-2 sm:flex">
          <button className="btn-secondary" type="button" onClick={() => go("cards")}>
            <Search size={18} />
            Tra cứu
          </button>
          <button className="btn-primary" type="button" onClick={onContact}>
            <Phone size={18} />
            Liên hệ tư vấn
          </button>
        </div>

        <button className="btn-secondary px-3 lg:hidden" type="button" onClick={() => setOpen(true)} aria-label="Mở menu">
          <Menu size={20} />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-bidv-deep/40 lg:hidden">
          <div className="ml-auto min-h-screen w-80 max-w-[86vw] bg-white p-4 shadow-soft">
            <div className="mb-6 flex items-center justify-between">
              <div className="flex items-center gap-2 font-bold text-bidv-deep">
                <CreditCard size={20} />
                BIDV Card Lookup
              </div>
              <button className="btn-secondary px-3" type="button" onClick={() => setOpen(false)} aria-label="Đóng menu">
                <X size={18} />
              </button>
            </div>
            <div className="grid gap-2">
              {navItems.map((item) => (
                <button key={item.page} className="btn-secondary justify-start" type="button" onClick={() => go(item.page)}>
                  {item.label}
                </button>
              ))}
              <button className="btn-primary mt-2" type="button" onClick={onContact}>
                <Phone size={18} />
                Liên hệ tư vấn
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
