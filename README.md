# BIDV Card Lookup

Web React + Vite + Tailwind CSS dùng để tra cứu thông tin sản phẩm thẻ và khuyến mại thẻ BIDV.

## Chức năng

- Trang chủ có thanh tìm kiếm lớn và nhóm tra cứu nhanh: Du lịch, Hoàn tiền, Ăn uống, Mua sắm, Trả góp, Khách hàng cao cấp.
- Danh sách thẻ có bộ lọc theo loại thẻ, hạng thẻ, tổ chức thẻ, nhóm ưu đãi và nhu cầu khách hàng.
- Danh sách khuyến mại có bộ lọc theo trạng thái, nhóm ưu đãi, tổ chức thẻ và nhu cầu.
- Trang chi tiết từng thẻ, hiển thị biểu phí, quyền lợi, nhóm khách hàng phù hợp và khuyến mại đang áp dụng.
- Trang chi tiết từng chương trình khuyến mại, hiển thị thời gian, điều kiện, quyền lợi và thẻ áp dụng.
- So sánh tối đa 3 thẻ.
- Cảnh báo chương trình sắp hết hạn.
- Nút liên hệ tư vấn chung.

## Cấu trúc dữ liệu

Dữ liệu đọc từ JSON trong `public/data`:

- `cards.json`: thông tin sản phẩm thẻ.
- `promotions.json`: thông tin khuyến mại.
- `categories.json`: nhóm nhu cầu tra cứu nhanh.
- `partners.json`: thông tin đối tác.

Script `scripts/generate-data.cjs` sinh lại JSON từ dữ liệu gốc trong `du lieu the/du-lieu-the-bidv.json` và bộ nguồn khuyến mại đã tổng hợp.

## Cài đặt và chạy local

```bash
npm install
npm run generate:data
npm run check:data
npm run dev
```

Mở địa chỉ Vite hiển thị trên terminal, thường là `http://127.0.0.1:5173`.

## Build

```bash
npm run build
npm run preview
```

## Deploy GitHub Pages

Repo đã có workflow tại `.github/workflows/deploy-pages.yml`.

1. Push code lên branch `main`.
2. Vào GitHub repo, mở `Settings > Pages`.
3. Chọn `Source: GitHub Actions`.
4. Chạy workflow `Deploy GitHub Pages` hoặc push commit mới.

Vite đang dùng `base: "./"` để app chạy ổn khi deploy dưới subpath của GitHub Pages.

## Ghi chú vận hành

- Khi cập nhật dữ liệu thẻ, sửa file nguồn hoặc JSON rồi chạy lại `npm run check:data`.
- Khi thêm ảnh thẻ hoặc ảnh khuyến mại, đặt vào `public/assets` và dùng đường dẫn bắt đầu bằng `/assets/...` trong JSON.
- Thông tin khuyến mại/biểu phí cần đối chiếu lại nguồn BIDV hoặc thể lệ đối tác trước khi tư vấn chính thức.
