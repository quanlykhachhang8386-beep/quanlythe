export const today = new Date("2026-05-31T00:00:00+07:00");

export const daysBetween = (dateString) => {
  const target = new Date(`${dateString}T00:00:00+07:00`);
  return Math.ceil((target - today) / 86400000);
};

export const promotionStatusLabel = (promotion) => {
  const days = daysBetween(promotion.endDate);
  if (days < 0) return "Đã kết thúc";
  if (days <= 7) return "Sắp hết hạn";
  if (new Date(`${promotion.startDate}T00:00:00+07:00`) > today) return "Sắp diễn ra";
  return "Đang chạy";
};

export const formatDate = (dateString) => {
  const [year, month, day] = dateString.split("-");
  return `${day}/${month}/${year}`;
};

export const normalizeText = (value) =>
  String(value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

export const escapeHtml = (value) =>
  String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
