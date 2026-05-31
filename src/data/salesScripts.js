export const buildSalesScript = (segment, cards, promotions) => {
  const primaryCard = cards.find((card) => segment.cardIds.includes(card.id));
  const activePromotions = promotions.filter((promotion) => promotion.status === "active" && promotion.cardIds.includes(primaryCard?.id));
  const promoText = activePromotions[0]?.title || "các ưu đãi theo từng thời kỳ của BIDV";

  return {
    call: `Anh/chị thuộc nhóm nhu cầu ${segment.name.toLowerCase()}, em đề xuất ${primaryCard?.name}. Điểm mạnh của thẻ là ${primaryCard?.highlights.slice(0, 3).join(", ")}. Hiện có thể kết hợp ${promoText} nếu giao dịch đạt điều kiện.`,
    zalo: `Em gửi anh/chị gợi ý thẻ phù hợp: ${primaryCard?.name}. Thẻ nổi bật ở ${primaryCard?.highlights.slice(0, 3).join(", ")}. Nếu anh/chị muốn, em kiểm tra nhanh điều kiện phát hành và ưu đãi đang áp dụng.`,
    email: `Kính gửi Anh/Chị,\n\nDựa trên nhu cầu ${segment.needs.join(", ")}, BIDV đề xuất sản phẩm ${primaryCard?.name}. Sản phẩm phù hợp nhờ các điểm nổi bật: ${primaryCard?.benefits.join("; ")}.\n\nBIDV có thể hỗ trợ kiểm tra điều kiện phát hành và chương trình khuyến mại đang áp dụng tại thời điểm mở thẻ.\n\nTrân trọng.`,
    objection: segment.response,
  };
};
