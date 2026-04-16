<p align="center">
  <img src="build/icon.png" width="120" alt="Moyin Creator Logo" />
</p>
<h1 align="center">Moyin Creator — Công cụ sáng tạo phim AI</h1>

<p align="center">
  <strong>🎬 Công cụ sản xuất phim AI chuyên nghiệp · Hỗ trợ Seedance 2.0 · Quy trình hàng loạt từ kịch bản đến thành phẩm</strong>
</p>

<p align="center">
  <a href="LICENSE"><img src="https://img.shields.io/badge/license-AGPL--3.0-blue.svg" alt="License" /></a>
  <a href="https://github.com/MemeCalculate/moyin-creator/releases"><img src="https://img.shields.io/github/v/release/MemeCalculate/moyin-creator" alt="Release" /></a>
  <a href="https://github.com/MemeCalculate/moyin-creator/stargazers"><img src="https://img.shields.io/github/stars/MemeCalculate/moyin-creator" alt="Stars" /></a>
</p>

<p align="center">
  <strong>🇻🇳 Tiếng Việt</strong> | <a href="README_EN.md">🇬🇧 English</a>
</p>

<p align="center">
  <a href="docs/WORKFLOW_GUIDE.md"><strong>📖 Hướng dẫn quy trình</strong></a> •
  <a href="#tính-năng">Tính năng</a> •
  <a href="#bắt-đầu-nhanh">Bắt đầu nhanh</a> •
  <a href="#kiến-trúc-kỹ-thuật">Kiến trúc kỹ thuật</a> •
  <a href="#giấy-phép">Giấy phép</a> •
  <a href="#đóng-góp">Đóng góp</a>
</p>

---

<!-- Chỗ dành cho ảnh chụp màn hình: sẽ thay bằng ảnh thực tế sau
<p align="center">
  <img src="docs/images/screenshot.png" width="800" alt="Ảnh chụp màn hình" />
</p>
-->

![1771428968476_3nkjdd](https://github.com/user-attachments/assets/582ee70f-f0dc-433b-9d5c-2ddb8f463450)

## Giới thiệu

**Moyin Creator** là công cụ sản xuất chuyên nghiệp dành cho các nhà sáng tạo phim AI. Năm module liên kết chặt chẽ, bao phủ toàn bộ quy trình sáng tạo từ kịch bản đến thành phẩm:

> **📝 Kịch bản → 🎭 Nhân vật → 🌄 Bối cảnh → 🎬 Đạo diễn → ⭐ S-Class (Seedance 2.0)**

Kết quả của mỗi bước tự động chuyển sang bước tiếp theo, không cần thao tác thủ công. Hỗ trợ nhiều mô hình AI lớn phổ biến, phù hợp cho sản xuất hàng loạt phim ngắn, anime, trailer và nhiều thể loại khác.


Hướng dẫn cài đặt cơ bản: https://www.bilibili.com/video/BV1FsZDBHExJ/?vd_source=802462c0708e775ce81f95b2e486f175


## Tính năng

### ⭐ Module S-Class — Sáng tạo đa phương thức Seedance 2.0 / SkyReels-V4
- **Tạo video tường thuật ghép nhiều cảnh quay**: Gộp nhiều phân cảnh thành video tường thuật liền mạch
- Hỗ trợ tham chiếu đa phương thức @Image / @Video / @Audio (tự động thu thập ảnh tham chiếu nhân vật, ảnh bối cảnh, ảnh khung hình đầu)
- Xây dựng prompt thông minh: Tự động hợp nhất 3 lớp (hành động + ngôn ngữ điện ảnh + đồng bộ khẩu hình đối thoại)
- Ghép lưới ảnh khung hình đầu (chiến lược N×N)
- Tự động kiểm tra ràng buộc tham số Seedance 2.0 (tối đa 9 ảnh + 3 video + 3 audio, prompt tối đa 5000 ký tự)
- <img width="578" height="801" alt="Module S-Class Seedance 2.0" src="https://github.com/user-attachments/assets/34b623a3-9be9-4eb5-ae52-a6a9553598ea" />
<img width="584" height="802" alt="Giao diện S-Class" src="https://github.com/user-attachments/assets/54c6036b-c545-45c0-a32b-de71b8138484" />

<img width="1602" height="835" alt="Tổng quan module S-Class" src="https://github.com/user-attachments/assets/2b5af973-98c9-4708-bf53-02d11321d86d" />

### 🎬 Công cụ phân tích kịch bản
- Tự động phân tách kịch bản thành bối cảnh, phân cảnh, đối thoại
- Tự động nhận diện nhân vật, bối cảnh, cảm xúc, ngôn ngữ điện ảnh
- Hỗ trợ cấu trúc kịch bản nhiều tập/nhiều hồi
<img width="1384" height="835" alt="Giao diện phân tích kịch bản" src="https://github.com/user-attachments/assets/e42266c2-aaeb-4cc3-a734-65516774d495" />

### 🎭 Hệ thống nhất quán nhân vật
- **6 lớp neo danh tính**: Đảm bảo ngoại hình nhân vật nhất quán qua các phân cảnh khác nhau
- Quản lý Character Bible (hồ sơ nhân vật)
- Hỗ trợ liên kết ảnh tham chiếu nhân vật
<img width="1384" height="835" alt="Hệ thống nhân vật" src="https://github.com/user-attachments/assets/763e6ced-43e2-4c7b-a5ea-b13535af5b2e" />

### 🖼️ Tạo bối cảnh
- Tạo ảnh liên hợp đa góc nhìn
- Tự động chuyển đổi mô tả bối cảnh thành prompt hình ảnh
<img width="1384" height="835" alt="Tạo bối cảnh" src="https://github.com/user-attachments/assets/f301d91e-c826-499f-b3dd-79e69613a5e8" />

### 🎞️ Hệ thống phân cảnh chuyên nghiệp
- Thông số quay phim chuyên nghiệp (cỡ cảnh, vị trí máy quay, chuyển động)
- Tự động bố cục và xuất file
- Chuyển đổi phong cách hình ảnh nhanh chóng (2D/3D/chân thực/stop-motion, v.v.)
<img width="1602" height="835" alt="Hệ thống phân cảnh" src="https://github.com/user-attachments/assets/94562cee-3827-4645-82fe-2123fdd86897" />

### 🚀 Quy trình sản xuất hàng loạt
- **Toàn bộ quy trình một nút bấm**: Phân tích kịch bản → Tạo nhân vật/bối cảnh → Chia phân cảnh → Tạo ảnh hàng loạt → Tạo video hàng loạt
- Hàng đợi đa nhiệm song song, tự động thử lại tác vụ thất bại
- Phù hợp cho sản xuất hàng loạt phim ngắn/anime

### 🤖 Điều phối AI đa nhà cung cấp
- Hỗ trợ nhiều nhà cung cấp dịch vụ tạo ảnh/video AI
- Cân bằng tải luân phiên API Key
- Quản lý hàng đợi tác vụ, tự động thử lại
### Tải xuống
Phiên bản đóng gói 0.1.7, tương ứng mã nguồn mở
Liên kết: https://pan.baidu.com/s/1ImH6tOIiuFxIDXC0fC-6Lg Mã trích xuất: 8888 


## Bắt đầu nhanh

### Yêu cầu môi trường

- **Node.js** >= 18
- **npm** >= 9

### Cài đặt và chạy

```bash
# Clone kho mã nguồn
git clone https://github.com/MemeCalculate/moyin-creator.git
cd moyin-creator

# Cài đặt thư viện phụ thuộc
npm install

# Khởi chạy chế độ phát triển
npm run dev
```

### Cấu hình API Key

Sau khi khởi chạy, vào **Cài đặt → Cấu hình API**, nhập API Key của nhà cung cấp dịch vụ AI để bắt đầu sử dụng.

### Build

```bash
# Biên dịch + đóng gói trình cài đặt Windows
npm run build

# Chỉ biên dịch (không đóng gói)
npx electron-vite build
```

## Kiến trúc kỹ thuật

| Tầng | Công nghệ |
|------|-----------|
| Framework desktop | Electron 30 |
| Framework frontend | React 18 + TypeScript |
| Công cụ build | electron-vite (Vite 5) |
| Quản lý trạng thái | Zustand 5 |
| Thành phần UI | Radix UI + Tailwind CSS 4 |
| Lõi AI | `@opencut/ai-core` (biên dịch prompt, Character Bible, polling tác vụ) |

### Cấu trúc dự án

```
moyin-creator/
├── electron/              # Tiến trình chính Electron + Preload
│   ├── main.ts            # Tiến trình chính (quản lý lưu trữ, hệ thống file, xử lý giao thức)
│   └── preload.ts         # Lớp cầu nối bảo mật
├── src/
│   ├── components/        # Thành phần React UI
│   │   ├── panels/        # Bảng chính (kịch bản, nhân vật, bối cảnh, phân cảnh, đạo diễn)
│   │   └── ui/            # Thư viện thành phần UI cơ bản
│   ├── stores/            # Trạng thái toàn cục Zustand
│   ├── lib/               # Thư viện tiện ích (điều phối AI, quản lý ảnh, định tuyến)
│   ├── packages/          # Gói nội bộ
│   │   └── ai-core/       # Lõi AI engine
│   └── types/             # Định nghĩa kiểu TypeScript
├── build/                 # Tài nguyên build (biểu tượng)
└── scripts/               # Script công cụ
```

## Giấy phép

Dự án này sử dụng mô hình **giấy phép kép**:

### Sử dụng mã nguồn mở — AGPL-3.0

Dự án được phát hành theo giấy phép [GNU AGPL-3.0](LICENSE). Bạn có thể tự do sử dụng, chỉnh sửa và phân phối, nhưng mã nguồn đã chỉnh sửa phải được phát hành theo cùng giấy phép.

### Sử dụng thương mại

Nếu bạn cần sử dụng mã nguồn đóng hoặc tích hợp vào sản phẩm thương mại, vui lòng liên hệ chúng tôi để nhận [giấy phép thương mại](COMMERCIAL_LICENSE.md).

## Đóng góp

Chào mừng đóng góp! Vui lòng đọc [Hướng dẫn đóng góp](CONTRIBUTING.md) để biết thêm chi tiết.

## Liên hệ

- 📧 Email: [memecalculate@gmail.com](mailto:memecalculate@gmail.com)
- 🐙 GitHub: [https://github.com/MemeCalculate/moyin-creator](https://github.com/MemeCalculate/moyin-creator)

### Liên hệ chúng tôi



<img src="https://github.com/user-attachments/assets/351713eb-79c7-4616-8416-397a9398e6e4" width="200" alt="Nhóm trao đổi" />

<img src="docs/images/wechat-contact.png" width="200" alt="Liên hệ WeChat" />


---

<p align="center">Made with ❤️ by <a href="https://github.com/MemeCalculate">MemeCalculate</a></p>

















