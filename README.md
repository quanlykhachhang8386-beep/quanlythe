# BIDV Card Sales Hub

Web quản lý thông tin sản phẩm thẻ BIDV, chương trình khuyến mại và hỗ trợ tư vấn bán hàng. Bản hiện tại là frontend tĩnh, chạy trực tiếp bằng Node.js, không cần cài thêm package.

## Tính năng đã triển khai

- Dashboard tổng quan: số lượng thẻ, khuyến mại còn hiệu lực, cảnh báo sắp hết hạn, thẻ ưu tiên bán.
- Kho sản phẩm thẻ: tìm kiếm, lọc theo mạng thẻ, hạng thẻ, loại thẻ, xem dạng card hoặc bảng.
- Chi tiết thẻ: tab Tổng quan, Điều kiện, Ưu đãi, Kịch bản, Tài liệu.
- Quản lý khuyến mại: lọc trạng thái, nhóm chương trình, xem cơ chế, thẻ áp dụng và nguồn thể lệ.
- So sánh thẻ: chọn 2-4 thẻ để so sánh phí, hạn mức, hạng thẻ, điểm mạnh.
- Trợ lý tư vấn: chọn chân dung khách hàng, nhận thẻ đề xuất, lời thoại telesale, tin nhắn Zalo, email và phản hồi từ chối.
- Copy nhanh nội dung tư vấn.
- Responsive cho desktop, tablet và mobile.

## Cấu trúc thư mục

```text
.
├── index.html
├── server.js
├── scripts/check.js
├── public/
│   └── assets/
│       ├── brand/
│       └── cards/
└── src/
    ├── components/
    ├── data/
    ├── utils/
    ├── main.js
    └── styles.css
```

## Cách chạy

Máy hiện tại có Node.js nhưng không có `npm`, vì vậy chạy trực tiếp:

```bash
node server.js
```

Sau đó mở:

```text
http://localhost:4173
```

Nếu muốn kiểm tra cấu trúc và cú pháp:

```bash
node scripts/check.js
```

## Nguồn dữ liệu

Dữ liệu trong `src/data` là mock data có cấu trúc gần API thật. Thông tin được tổng hợp từ:

- Website chính thức BIDV về sản phẩm thẻ tín dụng.
- Các trang khuyến mại/thể lệ BIDV.
- Bộ ảnh thẻ và tài liệu đang có trong thư mục dự án.
- Nguồn tham khảo do người dùng cung cấp: `https://card.nganhangso-hadong.online/`.
- Nguồn tham khảo bổ sung danh mục thẻ: `https://sosanhthe.vn/ngan-hang/bidv`.

Khi đưa vào vận hành thật, cần kiểm tra lại biểu phí, điều kiện phát hành, thể lệ khuyến mại và ngày hiệu lực theo văn bản BIDV mới nhất.

## Hướng phát triển tiếp theo

- Kết nối backend và database thay cho mock data.
- Thêm màn admin thêm/sửa/ẩn sản phẩm thẻ và khuyến mại.
- Thêm phân quyền người dùng.
- Upload file thể lệ và ảnh thẻ từ giao diện admin.
- Lưu lịch sử chỉnh sửa và người phê duyệt.
- Tích hợp CRM hoặc biểu mẫu ghi nhận kết quả tư vấn.
