export const statusMeta = {
  active: { label: "Đang áp dụng", className: "bg-emerald-100 text-emerald-800" },
  ending: { label: "Sắp hết hạn", className: "bg-amber-100 text-amber-800" },
  ended: { label: "Đã kết thúc", className: "bg-slate-200 text-slate-700" }
};

export function formatDate(value) {
  if (!value) return "Đang cập nhật";
  return new Intl.DateTimeFormat("vi-VN", { day: "2-digit", month: "2-digit", year: "numeric" }).format(
    new Date(`${value}T00:00:00+07:00`)
  );
}

export function normalizeText(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

export function joinSearchText(item) {
  return normalizeText(JSON.stringify(item));
}

export function getPromotionStatus(promotion) {
  return statusMeta[promotion.status] || statusMeta.active;
}

export function hasEndingWarning(promotion) {
  return promotion.status === "ending" || (promotion.status === "active" && promotion.daysLeft <= 30);
}
