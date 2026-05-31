export const cardSources = [
  {
    "label": "Website Card Advisor - dữ liệu Excel 31/05/2026",
    "url": "https://card.nganhangso-hadong.online/"
  },
  {
    "label": "BIDV - Các loại thẻ tín dụng BIDV",
    "url": "https://bidv.com.vn/vn/ca-nhan?urile=wcm%3Apath%3A%2Fbidv%2Fbidv-blog%2Ftin-dung%2Fcac-loai-the-tin-dung-ngan-hang-bidv"
  },
  {
    "label": "Sosanhthe.vn - Danh mục thẻ BIDV",
    "url": "https://sosanhthe.vn/ngan-hang/bidv"
  }
];

export const cards = [
  {
    "id": "bidv-jcb-ultimate",
    "name": "BIDV JCB Ultimate",
    "network": "JCB",
    "type": "Tín dụng quốc tế",
    "tier": "Ultimate",
    "audience": "Ẩm thực / khách hàng chi tiêu nhà hàng",
    "annualFee": "Cần kiểm chứng theo biểu phí BIDV",
    "limit": "Hoàn tiền tối đa lên tới: 800,000 đ/tháng",
    "interest": "Cần kiểm chứng theo biểu phí BIDV",
    "image": "./public/assets/cards/jcb-ultimate.png",
    "badge": "Ẩm thực",
    "status": "active",
    "highlights": [
      "20% hoàn tiền nhà hàng vào tháng sinh nhật",
      "10% hoàn tiền nhà hàng các tháng còn lại",
      "ShopeeFood: giảm từ 30K - 100K theo giá trị hóa đơn (dùng chung với JCB Well-being)",
      "ẩm thực",
      "nhà hàng"
    ],
    "conditions": [
      "Loại thẻ chính xác: tín dụng/ghi nợ/hybrid; điều kiện phát hành",
      "Biểu phí đầy đủ: phí phát hành, phí thường niên, rút tiền, chuyển đổi ngoại tệ, lãi suất, phí chậm thanh toán",
      "Thời gian hiệu lực và điều kiện áp dụng của ưu đãi"
    ],
    "benefits": [
      "20% hoàn tiền nhà hàng vào tháng sinh nhật — không thẻ nào trong hệ thống BIDV vượt con số này",
      "Ưu tiên tư vấn cho khách hàng chi tiêu nhà hàng thường xuyên, đặc biệt khách hàng có nhu cầu tối ưu hoàn tiền dịp sinh nhật."
    ],
    "documents": [],
    "source": "https://card.nganhangso-hadong.online/"
  },
  {
    "id": "bidv-jcb-hybrid",
    "name": "BIDV JCB Hybrid",
    "network": "JCB",
    "type": "Hybrid ghi nợ + tín dụng",
    "tier": "Hybrid",
    "audience": "Khách hàng số / AI tools / chi tiêu dịch vụ số",
    "annualFee": "Miễn phí trọn đời chỉ cần chi 500K tháng đầu (theo nội dung web)",
    "limit": "Hoàn tiền tối đa lên tới: 100,000 đ/tháng",
    "interest": "Cần kiểm chứng theo biểu phí BIDV",
    "image": "./public/assets/cards/jcb-hybrid.png",
    "badge": "Khách hàng số",
    "status": "active",
    "highlights": [
      "20% hoàn tiền dịch vụ số: ChatGPT, Google Gemini (MCC 5734) — tối đa 100.000 VNĐ/tháng",
      "Grab: giảm 10.000 VNĐ (Thứ 2–6, đơn ≥ 30.000 VNĐ) | 30.000 VNĐ (Thứ 7–CN, đơn ≥ 90.000 VNĐ)",
      "1 thẻ vật lý — 2 chức năng: GHI NỢ (rút tiền ATM, ưu tiên số dư) + TÍN DỤNG (POS/online/hóa đơn)",
      "AI",
      "ChatGPT"
    ],
    "conditions": [
      "Thời gian hiệu lực và điều kiện áp dụng của ưu đãi"
    ],
    "benefits": [
      "1 thẻ, 2 tính năng — 20% hoàn tiền ChatGPT/Gemini, miễn phí trọn đời chỉ cần chi 500K tháng đầu",
      "Phù hợp khách hàng dùng công cụ AI, Grab, thanh toán online; nhấn mạnh tiện ích 2 trong 1 để dễ mở và dễ dùng."
    ],
    "documents": [
      "the jcb hybrid v2.1.pdf"
    ],
    "source": "https://card.nganhangso-hadong.online/"
  },
  {
    "id": "bidv-jcb-well-being",
    "name": "BIDV JCB Well-Being",
    "network": "JCB",
    "type": "Tín dụng quốc tế",
    "tier": "Well-Being",
    "audience": "Y tế / sức khỏe / bảo hiểm / thời trang",
    "annualFee": "Cần kiểm chứng theo biểu phí BIDV",
    "limit": "Hoàn tiền tối đa lên tới: 500,000 đ/tháng",
    "interest": "Cần kiểm chứng theo biểu phí BIDV",
    "image": "./public/assets/cards/jcb-well-being.png",
    "badge": "Y tế",
    "status": "active",
    "highlights": [
      "10% hoàn tiền khi khám bệnh, mua thuốc, phòng khám (DS ≥ 10tr/tháng)",
      "6% hoàn tiền bảo hiểm và thời trang",
      "XanhSM: giảm 20% tối đa 50K/lượt (tối đa 2 lượt/tháng)",
      "y tế",
      "nhà thuốc"
    ],
    "conditions": [
      "Loại thẻ chính xác: tín dụng/ghi nợ/hybrid; điều kiện phát hành",
      "Biểu phí đầy đủ: phí phát hành, phí thường niên, rút tiền, chuyển đổi ngoại tệ, lãi suất, phí chậm thanh toán",
      "Thời gian hiệu lực và điều kiện áp dụng của ưu đãi"
    ],
    "benefits": [
      "10% hoàn tiền mỗi lần khám bệnh, mua thuốc — thẻ duy nhất BIDV ưu tiên lĩnh vực y tế",
      "Tư vấn cho khách hàng có chi tiêu định kỳ cho khám chữa bệnh, nhà thuốc, bảo hiểm hoặc gia đình có trẻ nhỏ/người lớn tuổi."
    ],
    "documents": [],
    "source": "https://card.nganhangso-hadong.online/"
  },
  {
    "id": "bidv-visa-cashback-360",
    "name": "BIDV Visa Cashback 360",
    "network": "Visa",
    "type": "Tín dụng quốc tế",
    "tier": "Cashback",
    "audience": "Gia đình / siêu thị / y tế / giáo dục",
    "annualFee": "Cần kiểm chứng theo biểu phí BIDV",
    "limit": "Hoàn tiền tối đa lên tới: 600,000 đ/tháng",
    "interest": "Cần kiểm chứng theo biểu phí BIDV",
    "image": "./public/assets/cards/visa-cashback-360.png",
    "badge": "Gia đình",
    "status": "active",
    "highlights": [
      "10% hoàn tiền siêu thị khi chi > 10 triệu/tháng",
      "2% hoàn tiền siêu thị khi chi ≤ 10 triệu/tháng",
      "2% hoàn tiền y tế và giáo dục",
      "siêu thị",
      "giáo dục"
    ],
    "conditions": [
      "Loại thẻ chính xác: tín dụng/ghi nợ/hybrid; điều kiện phát hành",
      "Biểu phí đầy đủ: phí phát hành, phí thường niên, rút tiền, chuyển đổi ngoại tệ, lãi suất, phí chậm thanh toán",
      "Thời gian hiệu lực và điều kiện áp dụng của ưu đãi"
    ],
    "benefits": [
      "Chi siêu thị trên 10 triệu/tháng? Phần vượt ngưỡng hoàn 10% — mua 15 triệu/tháng = hoàn ~500.000 VNĐ",
      "Phù hợp khách hàng gia đình chi siêu thị lớn hàng tháng, có con đi học hoặc chi phí y tế/giáo dục đều đặn."
    ],
    "documents": [],
    "source": "https://card.nganhangso-hadong.online/"
  },
  {
    "id": "bidv-private-banking",
    "name": "BIDV Private Banking",
    "network": "BIDV",
    "type": "Tín dụng quốc tế",
    "tier": "Private Banking",
    "audience": "Private Banking / khách hàng cao cấp",
    "annualFee": "Cần kiểm chứng theo biểu phí BIDV",
    "limit": "Tích lũy tối đa: 4,000,000 điểm (~13,333 dặm VNA)/tháng",
    "interest": "Cần kiểm chứng theo biểu phí BIDV",
    "image": "./public/assets/cards/visa-private.png",
    "badge": "Private Banking",
    "status": "active",
    "highlights": [
      "Phòng chờ sân bay quốc tế miễn phí (gói Lifestyle)",
      "Fast track sân bay",
      "Đặc quyền Golf VIP (gói Golfer)",
      "private",
      "dặm bay"
    ],
    "conditions": [
      "Loại thẻ chính xác: tín dụng/ghi nợ/hybrid; điều kiện phát hành",
      "Biểu phí đầy đủ: phí phát hành, phí thường niên, rút tiền, chuyển đổi ngoại tệ, lãi suất, phí chậm thanh toán",
      "Thời gian hiệu lực và điều kiện áp dụng của ưu đãi"
    ],
    "benefits": [
      "6% dặm khi ăn nhà hàng và mua sắm nước ngoài — tương đương vé bay miễn phí sau mỗi chuyến công tác",
      "Tư vấn cho khách hàng cao cấp, thường xuyên công tác/du lịch, cần đặc quyền sân bay, golf và tối ưu tích lũy dặm."
    ],
    "documents": [],
    "source": "https://card.nganhangso-hadong.online/"
  },
  {
    "id": "bidv-visa-infinite",
    "name": "BIDV Visa Infinite",
    "network": "Visa",
    "type": "Tín dụng quốc tế",
    "tier": "Infinite",
    "audience": "Khách hàng cao cấp / travel & lifestyle",
    "annualFee": "Cần kiểm chứng theo biểu phí BIDV",
    "limit": "Tích lũy tối đa: 2,000,000 điểm (~6,667 dặm VNA)/tháng",
    "interest": "Cần kiểm chứng theo biểu phí BIDV",
    "image": "./public/assets/cards/visa-infinite.png",
    "badge": "Khách hàng cao cấp",
    "status": "active",
    "highlights": [
      "Phòng chờ QT: Không giới hạn chủ thẻ + 1 người thân (ga QT); Không giới hạn + 5 người thân (nội địa/fasttrack)",
      "Ẩm thực: 2 voucher 3.500.000 VNĐ/lượt ẩm thực/năm; tặng thêm voucher khi chi tiêu tốt từng quý",
      "Đặc quyền Golf hoặc khám sức khỏe chất lượng cao cho 2 người",
      "Infinite",
      "dặm bay"
    ],
    "conditions": [
      "Loại thẻ chính xác: tín dụng/ghi nợ/hybrid; điều kiện phát hành",
      "Biểu phí đầy đủ: phí phát hành, phí thường niên, rút tiền, chuyển đổi ngoại tệ, lãi suất, phí chậm thanh toán",
      "Thời gian hiệu lực và điều kiện áp dụng của ưu đãi"
    ],
    "benefits": [
      "Cùng tỷ lệ 6% dặm như Private Banking — mở được cho mọi KH đủ điều kiện tín dụng",
      "Đề xuất cho khách hàng thu nhập cao, đi sân bay thường xuyên, quan tâm lifestyle, golf, sức khỏe và ẩm thực cao cấp."
    ],
    "documents": [],
    "source": "https://card.nganhangso-hadong.online/"
  },
  {
    "id": "bidv-visa-cashback-online",
    "name": "BIDV Visa Cashback Online",
    "network": "Visa",
    "type": "Tín dụng quốc tế",
    "tier": "Cashback",
    "audience": "Mua sắm online / Shopee / TikTokShop",
    "annualFee": "Cần kiểm chứng theo biểu phí BIDV",
    "limit": "Hoàn tiền tối đa lên tới: 600,000 đ/tháng",
    "interest": "Cần kiểm chứng theo biểu phí BIDV",
    "image": "./public/assets/cards/visa-cashback-online.png",
    "badge": "Mua sắm online",
    "status": "active",
    "highlights": [
      "6% hoàn tiền Shopee & TikTokShop (DS ≥ 10tr/tháng)",
      "3% hoàn tiền mua sắm online còn lại",
      "Bảo hiểm du lịch toàn cầu tới 11,65 tỷ VNĐ",
      "online",
      "Shopee"
    ],
    "conditions": [
      "Loại thẻ chính xác: tín dụng/ghi nợ/hybrid; điều kiện phát hành",
      "Biểu phí đầy đủ: phí phát hành, phí thường niên, rút tiền, chuyển đổi ngoại tệ, lãi suất, phí chậm thanh toán",
      "Thời gian hiệu lực và điều kiện áp dụng của ưu đãi"
    ],
    "benefits": [
      "6% hoàn tiền mỗi đơn Shopee/TikTok — mua 5 triệu/tháng = hoàn 300.000 VNĐ, đủ trả phí thường niên tháng",
      "Phù hợp khách hàng mua sắm online nhiều, đặc biệt Shopee/TikTokShop; có thêm điểm cộng bảo hiểm du lịch."
    ],
    "documents": [],
    "source": "https://card.nganhangso-hadong.online/"
  },
  {
    "id": "bidv-premier",
    "name": "BIDV Premier",
    "network": "BIDV",
    "type": "Tín dụng quốc tế",
    "tier": "Premier",
    "audience": "Premier / khách hàng ưu tiên",
    "annualFee": "Cần kiểm chứng theo biểu phí BIDV",
    "limit": "Tích lũy tối đa: 2,000,000 điểm (~6,667 dặm VNA)/tháng",
    "interest": "Cần kiểm chứng theo biểu phí BIDV",
    "image": "./public/assets/cards/visa-premier.png",
    "badge": "Premier",
    "status": "active",
    "highlights": [
      "5% hoàn tiền nhà hàng POS (hạng Premier)",
      "3% tích dặm mua sắm nước ngoài & dining POS (hạng Premier Elite)",
      "3% hoàn tiền mua vé máy bay (hạng Premier)",
      "Premier",
      "nhà hàng"
    ],
    "conditions": [
      "Loại thẻ chính xác: tín dụng/ghi nợ/hybrid; điều kiện phát hành",
      "Biểu phí đầy đủ: phí phát hành, phí thường niên, rút tiền, chuyển đổi ngoại tệ, lãi suất, phí chậm thanh toán",
      "Thời gian hiệu lực và điều kiện áp dụng của ưu đãi"
    ],
    "benefits": [
      "5% hoàn tiền mỗi bữa ăn nhà hàng, 3% khi mua vé máy bay — thẻ tự trả phí chính nó",
      "Tư vấn cho khách hàng ưu tiên, hay ăn nhà hàng, đặt vé máy bay, mua sắm nước ngoài và muốn vừa hoàn tiền vừa tích dặm."
    ],
    "documents": [],
    "source": "https://card.nganhangso-hadong.online/"
  },
  {
    "id": "bidv-visa-debit-superads",
    "name": "BIDV Visa Debit SuperAds",
    "network": "Visa",
    "type": "Ghi nợ quốc tế",
    "tier": "SuperAds",
    "audience": "Khách hàng chạy quảng cáo số / hộ kinh doanh / doanh nghiệp nhỏ",
    "annualFee": "0% phí chuyển đổi ngoại tệ Ecom/CNP",
    "limit": "Hoàn tiền tối đa lên tới: 300,000 đ/tháng",
    "interest": "Không áp dụng với thẻ ghi nợ",
    "image": "./public/assets/cards/visa-superads.png",
    "badge": "Khách hàng chạy quảng cáo số",
    "status": "active",
    "highlights": [
      "5% hoàn tiền quảng cáo số (Facebook/Google/TikTok/Shopee Ads) — 60 ngày đầu",
      "0% phí chuyển đổi ngoại tệ Ecom/CNP — tiết kiệm khi chạy ads quốc tế",
      "Tối đa 12 thẻ hoạt động cùng lúc/KH — tách ngân sách từng chiến dịch",
      "debit",
      "quảng cáo"
    ],
    "conditions": [
      "Thời gian hiệu lực và điều kiện áp dụng của ưu đãi"
    ],
    "benefits": [
      "0% phí ngoại tệ + 5% hoàn tiền 60 ngày đầu + 12 thẻ tách ngân sách — thẻ duy nhất thiết kế riêng cho người chạy Ads",
      "Tư vấn cho khách hàng chạy quảng cáo Facebook/Google/TikTok/Shopee, cần tách ngân sách chiến dịch và tiết kiệm phí ngoại tệ."
    ],
    "documents": [],
    "source": "https://card.nganhangso-hadong.online/"
  },
  {
    "id": "bidv-visa-flexi",
    "name": "BIDV Visa Flexi",
    "network": "Visa",
    "type": "Tín dụng quốc tế",
    "tier": "Flexi",
    "audience": "Mass / khách hàng nhận lương qua BIDV",
    "annualFee": "Phí thường niên thấp (300.000 VNĐ/năm)",
    "limit": "Hoàn tiền tối đa lên tới: 400,000 đ/tháng",
    "interest": "Cần kiểm chứng theo biểu phí BIDV",
    "image": "./public/assets/cards/visa-flexi.png",
    "badge": "Mass",
    "status": "active",
    "highlights": [
      "2% hoàn tiền nhà hàng, mua online, du lịch (KH lương BIDV)",
      "1% cho KH không trả lương qua BIDV",
      "Phí thường niên thấp (300.000 VNĐ/năm)",
      "Flexi",
      "lương BIDV"
    ],
    "conditions": [
      "Loại thẻ chính xác: tín dụng/ghi nợ/hybrid; điều kiện phát hành",
      "Thời gian hiệu lực và điều kiện áp dụng của ưu đãi"
    ],
    "benefits": [
      "KH nhận lương qua BIDV được hưởng 2% thay vì 1% — gấp đôi chỉ vì có tài khoản lương tại đây",
      "Dễ tư vấn cho khách hàng trả lương qua BIDV; nhấn mạnh phí thấp, hoàn tiền tốt ở nhóm chi tiêu phổ biến."
    ],
    "documents": [],
    "source": "https://card.nganhangso-hadong.online/"
  },
  {
    "id": "bidv-visa-business",
    "name": "BIDV Visa Business",
    "network": "Visa",
    "type": "Thẻ doanh nghiệp",
    "tier": "Business",
    "audience": "Doanh nghiệp / chi phí công tác",
    "annualFee": "Cần kiểm chứng theo biểu phí BIDV",
    "limit": "Hoàn tiền tối đa lên tới: 500,000 đ/tháng",
    "interest": "Cần kiểm chứng theo biểu phí BIDV",
    "image": "./public/assets/cards/mastercard-inspire.png",
    "badge": "Doanh nghiệp",
    "status": "active",
    "highlights": [
      "2% hoàn tiền nhà hàng và khách sạn",
      "1% hoàn tiền quảng cáo (GD ≥ 3tr)",
      "Cap 3.000.000 điểm/kỳ/CIF doanh nghiệp",
      "doanh nghiệp",
      "nhà hàng"
    ],
    "conditions": [
      "Loại thẻ chính xác: tín dụng/ghi nợ/hybrid; điều kiện phát hành",
      "Biểu phí đầy đủ: phí phát hành, phí thường niên, rút tiền, chuyển đổi ngoại tệ, lãi suất, phí chậm thanh toán",
      "Thời gian hiệu lực và điều kiện áp dụng của ưu đãi"
    ],
    "benefits": [
      "2% hoàn tiền nhà hàng & khách sạn cho doanh nghiệp — tối đa 3 triệu điểm/kỳ",
      "Phù hợp doanh nghiệp có chi phí tiếp khách, khách sạn, công tác và quảng cáo; nhấn mạnh kiểm soát chi phí doanh nghiệp."
    ],
    "documents": [],
    "source": "https://card.nganhangso-hadong.online/"
  },
  {
    "id": "bidv-mastercard-discovery",
    "name": "BIDV Mastercard Discovery",
    "network": "Mastercard",
    "type": "Ghi nợ quốc tế",
    "tier": "Discovery",
    "audience": "Du lịch nước ngoài / khách hàng muốn kiểm soát chi tiêu",
    "annualFee": "Cần kiểm chứng theo biểu phí BIDV",
    "limit": "Hoàn tiền tối đa lên tới: 500,000 đ/tháng",
    "interest": "Không áp dụng với thẻ ghi nợ",
    "image": "./public/assets/cards/mastercard-discovery.png",
    "badge": "Du lịch nước ngoài",
    "status": "active",
    "highlights": [
      "1% hoàn quà khi quẹt thẻ ở nước ngoài",
      "0,3% mọi giao dịch trong nước",
      "Kiểm soát chi tiêu tốt (ghi nợ)",
      "Mastercard",
      "debit"
    ],
    "conditions": [
      "Biểu phí đầy đủ: phí phát hành, phí thường niên, rút tiền, chuyển đổi ngoại tệ, lãi suất, phí chậm thanh toán",
      "Thời gian hiệu lực và điều kiện áp dụng của ưu đãi"
    ],
    "benefits": [
      "1% hoàn quà khi quẹt thẻ ở nước ngoài, chi trong khả năng vì là thẻ ghi nợ",
      "Tư vấn cho khách chưa muốn dùng tín dụng nhưng cần thẻ quốc tế, hay đi nước ngoài hoặc mua hàng quốc tế."
    ],
    "documents": [],
    "source": "https://card.nganhangso-hadong.online/"
  },
  {
    "id": "bidv-mastercard-business",
    "name": "BIDV Mastercard Business",
    "network": "Mastercard",
    "type": "Ghi nợ doanh nghiệp",
    "tier": "Business",
    "audience": "Doanh nghiệp / chi phí nhà hàng khách sạn",
    "annualFee": "Cần kiểm chứng theo biểu phí BIDV",
    "limit": "Hoàn tiền tối đa lên tới: 500,000 đ/tháng",
    "interest": "Không áp dụng với thẻ ghi nợ",
    "image": "./public/assets/cards/mastercard-discovery.png",
    "badge": "Doanh nghiệp",
    "status": "active",
    "highlights": [
      "1% hoàn tiền nhà hàng và khách sạn",
      "0,5% hoàn tiền quảng cáo (GD ≥ 3tr)",
      "Thẻ ghi nợ — kiểm soát chi tiêu",
      "Mastercard",
      "doanh nghiệp"
    ],
    "conditions": [
      "Biểu phí đầy đủ: phí phát hành, phí thường niên, rút tiền, chuyển đổi ngoại tệ, lãi suất, phí chậm thanh toán",
      "Thời gian hiệu lực và điều kiện áp dụng của ưu đãi"
    ],
    "benefits": [
      "Thẻ ghi nợ doanh nghiệp — kiểm soát chi phí nhà hàng/khách sạn, hoàn 1% mỗi giao dịch",
      "Tư vấn cho doanh nghiệp muốn cấp thẻ chi tiêu nhưng vẫn kiểm soát được dòng tiền vì là thẻ ghi nợ."
    ],
    "documents": [],
    "source": "https://card.nganhangso-hadong.online/"
  },
  {
    "id": "bidv-mastercard-ready",
    "name": "BIDV Mastercard Ready",
    "network": "Mastercard",
    "type": "Tín dụng quốc tế",
    "tier": "Ready",
    "audience": "Khách hàng mới bắt đầu dùng thẻ",
    "annualFee": "Miễn phí năm đầu cho mọi KH; KHCC/nội bộ miễn phí 2 năm đầu",
    "limit": "Hoàn tiền tối đa lên tới: 300,000 đ/tháng",
    "interest": "Cần kiểm chứng theo biểu phí BIDV",
    "image": "./public/assets/cards/mastercard-ready.png",
    "badge": "Khách hàng mới bắt đầu dùng ",
    "status": "active",
    "highlights": [
      "Phí thường niên thấp nhất danh mục BIDV",
      "Miễn phí năm đầu cho mọi KH",
      "KHCC/nội bộ: miễn phí 2 năm đầu",
      "Mastercard",
      "phí thấp"
    ],
    "conditions": [
      "Loại thẻ chính xác: tín dụng/ghi nợ/hybrid; điều kiện phát hành",
      "Thời gian hiệu lực và điều kiện áp dụng của ưu đãi"
    ],
    "benefits": [
      "Phí thường niên thấp nhất danh mục BIDV — thẻ để bắt đầu, không điều kiện phức tạp",
      "Tư vấn cho khách hàng mới mở thẻ, nhạy cảm với phí thường niên và muốn sản phẩm dễ bắt đầu."
    ],
    "documents": [],
    "source": "https://card.nganhangso-hadong.online/"
  },
  {
    "id": "bidv-mastercard-moneyverse",
    "name": "BIDV Mastercard Moneyverse",
    "network": "Mastercard",
    "type": "Tín dụng quốc tế",
    "tier": "Moneyverse",
    "audience": "Khách hàng thích tích điểm không giới hạn",
    "annualFee": "Miễn phí 2 năm đầu cho 100% khách hàng",
    "limit": "Hoàn tiền tích điểm: KHÔNG GIỚI HẠN!",
    "interest": "Cần kiểm chứng theo biểu phí BIDV",
    "image": "./public/assets/cards/mastercard-moneyverse.png",
    "badge": "Khách hàng thích tích điểm k",
    "status": "active",
    "highlights": [
      "Miễn phí 2 năm đầu cho 100% khách hàng (kể cả KH thông thường)",
      "Không giới hạn điểm tích lũy hàng tháng",
      "Tích điểm theo ngày — không cần đạt ngưỡng DS tháng",
      "Mastercard",
      "Moneyverse"
    ],
    "conditions": [
      "Loại thẻ chính xác: tín dụng/ghi nợ/hybrid; điều kiện phát hành",
      "Thời gian hiệu lực và điều kiện áp dụng của ưu đãi"
    ],
    "benefits": [
      "Miễn phí 2 năm đầu cho tất cả — không giới hạn điểm tháng, tích mỗi ngày không cần điều kiện",
      "Phù hợp khách hàng không muốn bị ràng buộc ngưỡng doanh số tháng và thích tích điểm đều đặn hằng ngày."
    ],
    "documents": [],
    "source": "https://card.nganhangso-hadong.online/"
  },
  {
    "id": "bidv-visa-easy",
    "name": "BIDV Visa Easy",
    "network": "Visa",
    "type": "Tín dụng quốc tế",
    "tier": "Easy",
    "audience": "Mass / khách hàng cần phí thấp",
    "annualFee": "Phí thường niên 200.000 VNĐ/năm; lãi suất từ 12%/năm",
    "limit": "Chưa thấy hạn mức hoàn tiền/tích điểm trong nội dung trích xuất",
    "interest": "Phí thường niên 200.000 VNĐ/năm; lãi suất từ 12%/năm",
    "image": "./public/assets/cards/visa-easy.png",
    "badge": "Mass",
    "status": "active",
    "highlights": [
      "Phí thường niên thấp nhất dòng tín dụng BIDV: 200.000 VNĐ/năm",
      "Trả góp 0% lãi suất tại hơn 5.000 đối tác liên kết",
      "Lãi suất từ 12%/năm (theo biểu phí niêm yết 21/11/2025)",
      "Visa",
      "Easy"
    ],
    "conditions": [
      "Thời gian hiệu lực và điều kiện áp dụng của ưu đãi"
    ],
    "benefits": [
      "Phí thấp nhất tín dụng BIDV — 200.000/năm, trả góp 0%, quản lý qua SmartBanking",
      "Thẻ mở rộng tập khách hàng mới, phù hợp khách muốn thẻ tín dụng phí thấp, quản lý dễ trên SmartBanking, có nhu cầu trả góp."
    ],
    "documents": [],
    "source": "https://card.nganhangso-hadong.online/"
  },
  {
    "id": "bidv-mastercard-world-travel",
    "name": "BIDV Mastercard World Travel",
    "network": "Mastercard",
    "type": "Tín dụng quốc tế",
    "tier": "World Travel",
    "audience": "Du lịch / công tác / khách hàng đi sân bay",
    "annualFee": "0% phí ngoại tệ; nội dung định vị nhắc tầm 1,6tr/năm",
    "limit": "Chưa thấy hạn mức hoàn tiền/tích điểm trong nội dung trích xuất",
    "interest": "Cần kiểm chứng theo biểu phí BIDV",
    "image": "./public/assets/cards/mastercard-travel.png",
    "badge": "Du lịch",
    "status": "active",
    "highlights": [
      "Phòng chờ QT: 1 lượt/KH/quý (tối đa 4 lượt/năm)",
      "Phòng chờ nội địa ga quốc tế: 1 lượt/quý (tối đa 4 lượt/năm)",
      "Bảo hiểm du lịch và trễ chuyến lên đến 11,65 tỷ VNĐ",
      "Mastercard",
      "travel"
    ],
    "conditions": [
      "Loại thẻ chính xác: tín dụng/ghi nợ/hybrid; điều kiện phát hành",
      "Thời gian hiệu lực và điều kiện áp dụng của ưu đãi"
    ],
    "benefits": [
      "0% phí ngoại tệ + phòng chờ sân bay không cần đặt trước + bảo hiểm 11,65 tỷ — thẻ du lịch toàn diện nhất tầm 1,6tr/năm",
      "Tư vấn cho khách hàng du lịch/công tác, cần 0% phí ngoại tệ, phòng chờ sân bay và bảo hiểm du lịch."
    ],
    "documents": [],
    "source": "https://card.nganhangso-hadong.online/"
  }
];
