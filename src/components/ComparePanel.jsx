import { X } from "lucide-react";
import { navigate } from "../utils/useHashRoute";

export default function ComparePanel({ cards, selectedIds, onRemove, onClear }) {
  const selected = selectedIds.map((id) => cards.find((card) => card.id === id)).filter(Boolean);

  if (!selected.length) {
    return (
      <div className="surface p-6 text-center text-slate-600">
        Chọn tối đa 3 thẻ trong danh sách để so sánh nhanh biểu phí, quyền lợi và ưu đãi.
      </div>
    );
  }

  const rows = [
    ["Loại thẻ", (card) => card.type],
    ["Hạng thẻ", (card) => card.tier],
    ["Tổ chức", (card) => card.organization],
    ["Phí thường niên", (card) => card.annualFee],
    ["Lãi suất", (card) => card.interestRate],
    ["Hoàn tiền/Tích điểm", (card) => card.rewardLimit],
    ["Nhu cầu", (card) => card.customerSegments.flatMap((item) => item.needs).slice(0, 5).join(", ")]
  ];

  return (
    <div className="surface overflow-hidden">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 p-4">
        <div>
          <div className="text-sm font-bold uppercase tracking-wide text-bidv-teal">So sánh</div>
          <h2 className="text-2xl font-black text-bidv-ink">{selected.length} thẻ đã chọn</h2>
        </div>
        <button className="btn-secondary" type="button" onClick={onClear}>Xóa tất cả</button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-[860px] w-full border-collapse text-left">
          <thead>
            <tr>
              <th className="w-44 border-b border-slate-100 p-4 text-xs uppercase tracking-wide text-slate-500">Tiêu chí</th>
              {selected.map((card) => (
                <th className="border-b border-slate-100 p-4" key={card.id}>
                  <div className="flex items-start justify-between gap-3">
                    <button className="font-black text-bidv-deep hover:text-bidv-blue" type="button" onClick={() => navigate("cards", card.id)}>
                      {card.name}
                    </button>
                    <button className="rounded-lg p-1 text-slate-400 hover:bg-slate-100 hover:text-red-600" type="button" onClick={() => onRemove(card.id)} aria-label={`Bỏ ${card.name}`}>
                      <X size={16} />
                    </button>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map(([label, getter]) => (
              <tr key={label}>
                <td className="border-b border-slate-100 p-4 text-sm font-black text-slate-600">{label}</td>
                {selected.map((card) => (
                  <td className="border-b border-slate-100 p-4 text-sm leading-6 text-slate-700" key={card.id}>{getter(card)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
