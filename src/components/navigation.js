const navItems = [
  { id: "dashboard", label: "Tổng quan", icon: "DB" },
  { id: "cards", label: "Kho thẻ", icon: "TH" },
  { id: "promotions", label: "Khuyến mại", icon: "KM" },
  { id: "compare", label: "So sánh", icon: "SS" },
  { id: "advisor", label: "Tư vấn", icon: "TV" },
];

export const renderNavigation = (activeView) => `
  <aside class="sidebar">
    <div class="brand">
      <img src="./public/assets/brand/logo-bidv-green.png" alt="BIDV" />
      <div>
        <strong>Card Sales Hub</strong>
        <span>Quản lý thẻ & khuyến mại</span>
      </div>
    </div>
    <nav class="nav-list">
      ${navItems
        .map(
          (item) => `
            <button class="nav-item ${activeView === item.id ? "active" : ""}" data-view="${item.id}">
              <span>${item.icon}</span>
              ${item.label}
            </button>
          `,
        )
        .join("")}
    </nav>
    <div class="sidebar-note">
      <strong>Nguồn dữ liệu</strong>
      <span>Ảnh lấy từ thư mục dự án. Thông tin nghiệp vụ tổng hợp từ BIDV và nguồn tham khảo được lưu trong dữ liệu mock.</span>
    </div>
  </aside>
`;
