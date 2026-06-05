import { X } from "lucide-react";

export default function ContactModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-bidv-deep/50 p-4">
      <div className="surface w-full max-w-2xl overflow-hidden">
        <div className="flex items-start justify-between gap-4 border-b border-slate-100 p-5">
          <div>
            <div className="text-sm font-bold uppercase tracking-wide text-bidv-teal">Liên hệ tư vấn</div>
            <h2 className="mt-1 text-2xl font-black text-bidv-ink">Tư vấn sản phẩm thẻ BIDV</h2>
          </div>
          <button className="btn-secondary px-3" type="button" onClick={onClose} aria-label="Đóng">
            <X size={18} />
          </button>
        </div>
        <div className="grid gap-5 p-5 sm:grid-cols-[220px_1fr]">
          <img src="./assets/ui-kit/qr/qr-lien-he-600x600.png" alt="QR liên hệ tư vấn" className="mx-auto w-52 rounded-2xl border border-slate-100" />
          <div className="space-y-3 text-slate-700">
            <p className="text-lg font-bold text-bidv-deep">Quét QR hoặc mở website tư vấn để nhận hỗ trợ chọn thẻ.</p>
            <p>Thông tin trong web dùng để tra cứu nhanh. Khi tư vấn khách hàng, hãy kiểm tra lại biểu phí và thể lệ tại nguồn BIDV/đối tác trước khi chốt.</p>
            <a className="btn-primary w-full sm:w-auto" href="https://card.nganhangso-hadong.online/" target="_blank" rel="noreferrer">
              Mở trang tư vấn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
