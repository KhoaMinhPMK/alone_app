# Lộ trình triển khai dự án "Alone" (Execution Roadmap)

## 🎯 Mục tiêu
Xây dựng ứng dụng "Alone" - Hệ sinh thái dành cho các cặp đôi (và người độc thân chờ ghép đôi), triển khai trên hạ tầng Windows VPS/IIS.

## 📅 Sprint 1: Khởi tạo & Xác thực (Foundation & Auth)
**Mục tiêu:** Người dùng có thể đăng ký, đăng nhập và hệ thống nhận diện được trạng thái "Độc thân" hay "Đã ghép đôi".

### Backend (NestJS)
- [ ] **Database**: Cài đặt MySQL, chạy script `schema.sql` để tạo bảng `users`, `couples`.
- [ ] **Auth Module**:
  - API Register (Tạo user mới).
  - API Login (Trả về JWT Token).
  - API Get Profile (Lấy thông tin user + trạng thái `couple_id`).
- [ ] **IIS Config**: Kiểm tra API chạy ổn định trên IISNode.

### Mobile (React Native)
- [ ] **Navigation**: Cài đặt React Navigation (Stack).
- [ ] **Screens**:
  - Splash Screen (Kiểm tra token, điều hướng).
  - Login Screen / Register Screen.
  - Home Screen (Giao diện tạm).
- [ ] **Integration**: Gọi API Login/Register và lưu Token vào AsyncStorage.

---

## 📅 Sprint 2: Cơ chế Ghép đôi (The "Alone" Core)
**Mục tiêu:** Hai người dùng độc thân có thể kết nối với nhau thông qua mã mời hoặc ID để trở thành một cặp.

### Backend
- [ ] **Couple Module**:
  - API Generate Invite Code.
  - API Link Couple (Nhập mã -> Update `couple_id` cho cả 2 user).
  - API Unlink (Chia tay - Xóa `couple_id`).
- [ ] **Logic**: Chặn các tính năng "Độc thân" khi đã có `couple_id`.

### Mobile
- [ ] **Pairing Screen**: Giao diện nhập mã/quét QR để ghép đôi.
- [ ] **State Management**: Xử lý giao diện thay đổi khi user chuyển từ Single -> Couple.

---

## 📅 Sprint 3: Không gian chung (Shared Space)
**Mục tiêu:** Tính năng cốt lõi cho cặp đôi - Nhật ký chung và Chat.

### Backend
- [ ] **Journal Module**: CRUD Nhật ký (Ảnh, Text, Ngày tháng).
- [ ] **Chat Module** (Cơ bản): API gửi/nhận tin nhắn (REST hoặc Socket.io tùy hiệu năng VPS).

### Mobile
- [ ] **Journal UI**: Timeline nhật ký chung.
- [ ] **Chat UI**: Giao diện chat cơ bản.

---

## 📅 Sprint 4: Gamification & Economy (Shop & Points)
**Mục tiêu:** Hệ thống tiền tệ và cửa hàng.

### Backend
- [ ] **Transaction Module**: Cộng/Trừ điểm.
- [ ] **Shop Module**: Danh sách vật phẩm, Mua vật phẩm.

### Mobile
- [ ] **Shop Screen**: Giao diện cửa hàng.
- [ ] **Inventory**: Túi đồ của tôi.

---

## 🛠 Hạ tầng & DevOps (Song song)
- [ ] Cấu hình Domain `bkuteam.site` trỏ về VPS.
- [ ] Cài đặt SSL (Let's Encrypt) trên IIS.
- [ ] Setup quy trình Deploy: Dev push GitHub -> VPS pull code.
