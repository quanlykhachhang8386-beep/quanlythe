import ContactModal from "./components/ContactModal";
import Header from "./components/Header";
import ComparePage from "./pages/ComparePage";
import CardDetailPage from "./pages/CardDetailPage";
import CardsPage from "./pages/CardsPage";
import HomePage from "./pages/HomePage";
import PromotionDetailPage from "./pages/PromotionDetailPage";
import PromotionsPage from "./pages/PromotionsPage";
import { useData } from "./utils/useData";
import { useHashRoute } from "./utils/useHashRoute";
import { useState } from "react";

export default function App() {
  const route = useHashRoute();
  const { loading, error, cards, promotions, categories } = useData();
  const [compareIds, setCompareIds] = useState([]);
  const [contactOpen, setContactOpen] = useState(false);

  const toggleCompare = (id) => {
    setCompareIds((current) => {
      if (current.includes(id)) return current.filter((item) => item !== id);
      if (current.length >= 3) return current;
      return [...current, id];
    });
  };

  const pageProps = { cards, promotions, categories, compareIds, onCompare: toggleCompare };
  let content = null;

  if (loading) {
    content = (
      <section className="container-app grid min-h-[60vh] place-items-center py-10">
        <div className="surface p-8 text-center">
          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-bidv-teal border-t-transparent" />
          <p className="mt-4 font-bold text-bidv-deep">Đang tải dữ liệu thẻ BIDV...</p>
        </div>
      </section>
    );
  } else if (error) {
    content = (
      <section className="container-app py-10">
        <div className="surface p-8 text-center">
          <h1 className="text-2xl font-black text-red-700">Không tải được dữ liệu</h1>
          <p className="mt-2 text-slate-600">{error}</p>
        </div>
      </section>
    );
  } else if (route.page === "cards" && route.id) {
    content = <CardDetailPage {...pageProps} card={cards.find((card) => card.id === route.id)} selected={compareIds.includes(route.id)} />;
  } else if (route.page === "cards") {
    content = <CardsPage {...pageProps} />;
  } else if (route.page === "promotions" && route.id) {
    content = <PromotionDetailPage {...pageProps} promotion={promotions.find((promotion) => promotion.id === route.id)} />;
  } else if (route.page === "promotions") {
    content = <PromotionsPage {...pageProps} />;
  } else if (route.page === "compare") {
    content = (
      <ComparePage
        cards={cards}
        compareIds={compareIds}
        onRemove={(id) => setCompareIds((current) => current.filter((item) => item !== id))}
        onClear={() => setCompareIds([])}
      />
    );
  } else {
    content = <HomePage {...pageProps} />;
  }

  return (
    <div className="page-shell">
      <Header route={route} onContact={() => setContactOpen(true)} />
      {content}
      {compareIds.length > 0 && route.page !== "compare" && (
        <div className="fixed bottom-4 left-4 right-4 z-30 mx-auto flex max-w-xl items-center justify-between gap-3 rounded-2xl border border-bidv-teal/20 bg-white p-3 shadow-soft">
          <div className="text-sm font-bold text-bidv-deep">{compareIds.length}/3 thẻ đang chọn để so sánh</div>
          <a className="btn-primary min-h-10" href="#/compare">Xem so sánh</a>
        </div>
      )}
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
      <footer className="container-app pb-8 pt-4 text-center text-sm text-slate-500">
        Dữ liệu tra cứu nội bộ, cần đối chiếu thể lệ/biểu phí BIDV trước khi tư vấn chính thức.
      </footer>
    </div>
  );
}
