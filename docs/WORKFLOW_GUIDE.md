# Hướng dẫn cài đặt chi tiết có thể xem tại đây
https://kvodb27hf3.feishu.cn/wiki/JjSmwf173iN3fqkjXakcGbvTnEf?from=from_copylink

# 🎬 Moyin Creator (Mạng Nhân Mạn Sáng) — Hướng dẫn quy trình làm việc cơ bản

> Hướng dẫn quy trình sáng tạo hoàn chỉnh từ Kịch bản đến thành phẩm

Moyin Creator tích hợp nhiều quy trình làm việc khác nhau, các module có thể kết hợp tự do hoặc sử dụng độc lập, đáp ứng nhu cầu của nhiều tình huống sáng tạo khác nhau. **Hướng dẫn này giới thiệu quy trình làm việc cơ bản thường dùng nhất, khuyến nghị người dùng mới bắt đầu từ đây.**

---

## 📋 Tổng quan quy trình

```
⚙️ Chuẩn bị → 📝 Kịch bản → 🔧 AI Hiệu chỉnh → 🌄 Bối cảnh/🎭 Nhân vật (tùy chọn) → 🎬 Đạo diễn / ⭐ S-Class → 🎥 Tạo video
```

---

## Chuẩn bị: Cấu hình môi trường

Trước khi bắt đầu sáng tạo, cần hoàn thành các cấu hình sau:

### 1. Thêm nhà cung cấp API

Vào **Cài đặt → Cấu hình API → Thêm nhà cung cấp**, cấu hình tài khoản nhà cung cấp dịch vụ AI của bạn.

- Nên thêm **càng nhiều API Key càng tốt**, hệ thống hỗ trợ cân bằng tải xoay vòng đa Key
- Càng nhiều Key, **số luồng xử lý đồng thời càng cao**, tốc độ tạo hàng loạt càng nhanh
- Nhà cung cấp được hỗ trợ: memefast, RunningHub, v.v.

### 2. Ánh xạ dịch vụ

Vào **Cài đặt → Ánh xạ dịch vụ**, chọn mô hình AI tương ứng cho từng chức năng:

- Chỉ định mô hình riêng cho các chức năng như "Tạo ảnh từ văn bản", "Tạo video từ ảnh", "Tạo video từ văn bản"
- Chọn mô hình phù hợp dựa trên nhà cung cấp và nhu cầu của bạn

> 💡 **Khuyến nghị cho người mới**: Khi thử nghiệm, nên bắt đầu với các mô hình sau:
> - **Tạo ảnh**: `gemini-3-pro-image-preview`
> - **Tạo video**: `doubao-seedance-1-5-pro-251215`

### 3. Cấu hình Máy chủ ảnh

Vào **Cài đặt → Cấu hình Máy chủ ảnh**, cấu hình dịch vụ lưu trữ hình ảnh:

- Đăng ký một dịch vụ Máy chủ ảnh (dùng để tải lên ảnh tham chiếu, ảnh Khung đầu và các Tư liệu khác)
- Cũng nên cấu hình **nhiều Key** để tăng tốc độ tải lên đồng thời

> ✅ Sau khi hoàn thành các cấu hình trên, bạn có thể bắt đầu sáng tạo.

---

## Bước 1: Module Kịch bản

Vào **module Kịch bản**, có hai cách để bắt đầu:

- **A. Nhập Kịch bản** — Dán hoặc nhập Kịch bản hoàn chỉnh có sẵn vào vùng chỉnh sửa
- **B. Sáng tác bằng AI** — Sử dụng AI hỗ trợ sáng tác Kịch bản từ đầu

> 📄 **Tham khảo định dạng Kịch bản**: Xem [Ví dụ định dạng nhập Kịch bản](./SCRIPT_FORMAT_EXAMPLE.md) để tìm hiểu cách viết tiêu chuẩn cho tiêu đề cảnh, lời thoại, chỉ dẫn sân khấu, v.v.

Hệ thống sẽ tự động phân tích cấu trúc Kịch bản, tách thành các yếu tố như Bối cảnh, Phân cảnh, Nhân vật, lời thoại, v.v.

---

## Bước 2: AI Hiệu chỉnh lần hai

Sau khi hệ thống phân tích tự động hoàn tất, lần lượt nhấn ba nút Hiệu chỉnh sau để **tinh chỉnh sâu hơn**:

1. **AI Hiệu chỉnh Bối cảnh** — Tối ưu hóa mô tả môi trường, không khí, ánh sáng và chi tiết của từng Bối cảnh
2. **API Hiệu chỉnh Phân cảnh** — Hiệu chỉnh chính xác ngôn ngữ ống kính, Cỡ cảnh, bố cục của từng Phân cảnh
3. **AI Hiệu chỉnh Nhân vật** — Làm sâu thêm mô tả ngoại hình, biểu cảm, hành động và các điểm neo nhất quán của Nhân vật

> Sau khi Hiệu chỉnh, hệ thống sẽ tự động tạo prompt chi tiết và chuyên nghiệp hơn cho từng bước, nâng cao đáng kể chất lượng tạo ảnh/video sau này.

---

## Bước 3: Tạo Tư liệu (tùy chọn)

Sau khi Hiệu chỉnh hoàn tất, bạn có thể chọn tạo trước Tư liệu:

- **A. Tạo Bối cảnh** — Tạo hàng loạt ảnh tham chiếu Bối cảnh dựa trên mô tả đã Hiệu chỉnh
- **B. Tạo Nhân vật** — Tạo ảnh tham chiếu Nhân vật dựa trên mô tả đã Hiệu chỉnh

> Bước này là tùy chọn. Nếu bạn chuyển thẳng sang module Đạo diễn/S-Class, hệ thống cũng sẽ tự động gọi các Tư liệu liên quan.

---

## Bước 4: Vào module Đạo diễn / module S-Class

Chuyển sang **module Đạo diễn** hoặc **⭐ module S-Class**:

1. Nhấn **"Tải Phân cảnh từ Kịch bản" ở thanh bên phải** — Nhập tất cả Phân cảnh từ Kịch bản vào module hiện tại
2. **Thanh bên trái** sẽ tự động điền cho từng Phân cảnh:
   - Prompt Khung đầu
   - Prompt Khung cuối
   - Prompt video
3. Tất cả thông số đều có thể **tùy chỉnh tự do** theo sở thích cá nhân (như chuyển động ống kính, thời lượng, phong cách, v.v.)

---

## Bước 5: Tạo ảnh và video

Trong phần **chỉnh sửa Phân cảnh** của module Đạo diễn / module S-Class (thanh bên trái):

### Cách tạo ảnh (chọn một trong hai)

- **A. Tạo từng cảnh** — Tạo ảnh riêng lẻ cho từng Phân cảnh
- **B. Tạo gộp (khuyến nghị)** — Gộp nhiều Phân cảnh để tạo ảnh hàng loạt

> 💡 **Khuyến nghị sử dụng "Tạo gộp"**, ảnh được tạo sẽ tự động phân bổ vào từng Phân cảnh tương ứng.

### Tạo video

Sau khi phân bổ ảnh hoàn tất, nhấn **"Tạo video"** để bắt đầu tạo video Phân cảnh hàng loạt.

---

## Bước 6: Module S-Class — Nâng cao với Seedance 2.0

Module S-Class hỗ trợ tính năng kết hợp đa cảnh quay tường thuật của **Seedance 2.0**:

1. Sau khi nhập Kịch bản, bạn có thể tự do chọn **độ dài nhóm video**:
   - 1 cảnh quay → đoạn phim ngắn 15 giây
   - Gộp nhiều cảnh quay → đoạn tường thuật 15 giây
   - Linh hoạt điều chỉnh phân nhóm theo nhu cầu
2. Hệ thống tự động thu thập tham chiếu đa phương thức @Image / @Video / @Audio
3. Nhấn **"Tạo video"** là xong

> Module S-Class sẽ tự động xử lý ghép ảnh Khung đầu, hợp nhất ba tầng prompt (hành động + ngôn ngữ ống kính + đồng bộ khẩu hình lời thoại), kiểm tra ràng buộc thông số, v.v.

---

## 💡 Mẹo nhỏ

- **Hiệu chỉnh trước, Tạo sau** — Hiệu chỉnh lần hai giúp nâng cao đáng kể chất lượng đầu ra, đừng bỏ qua
- **Ưu tiên Tạo gộp** — Tạo gộp hiệu quả hơn tạo từng cảnh, phong cách cũng thống nhất hơn
- **Thông số có thể điều chỉnh** — Prompt, Khung đầu, Khung cuối của mỗi Phân cảnh đều hỗ trợ chỉnh sửa thủ công
- **Module S-Class phù hợp cho** — Các tình huống cần tường thuật liên tục đa cảnh quay (phim ngắn, trailer anime, v.v.)
- **Module Đạo diễn phù hợp cho** — Các tình huống cần kiểm soát chi tiết từng cảnh quay

---

> 📧 Có câu hỏi? Liên hệ [memecalculate@gmail.com](mailto:memecalculate@gmail.com) hoặc xem [README](../README.md)
