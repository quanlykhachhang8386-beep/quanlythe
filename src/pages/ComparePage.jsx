import ComparePanel from "../components/ComparePanel";

export default function ComparePage({ cards, compareIds, onRemove, onClear }) {
  return (
    <section className="container-app py-8">
      <div className="mb-5">
        <div className="text-sm font-bold uppercase tracking-wide text-bidv-teal">So sánh thẻ</div>
        <h1 className="mt-1 text-3xl font-black text-bidv-ink sm:text-5xl">So sánh tối đa 3 sản phẩm</h1>
        <p className="mt-3 max-w-3xl text-slate-600">
          Đặt các thẻ cạnh nhau để nhìn nhanh phí, quyền lợi, hạng thẻ và nhu cầu khách hàng phù hợp.
        </p>
      </div>
      <ComparePanel cards={cards} selectedIds={compareIds} onRemove={onRemove} onClear={onClear} />
    </section>
  );
}
