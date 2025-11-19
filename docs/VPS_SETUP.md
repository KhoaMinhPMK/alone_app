# Hướng dẫn Setup VPS (Windows Server + IIS)

Tài liệu này hướng dẫn triển khai dự án "Alone" lên Windows VPS sử dụng IIS.

## 1. Chuẩn bị Môi trường (Prerequisites)

Đảm bảo VPS đã cài đặt các phần mềm sau:

1.  **Node.js (LTS)**: Tải bản v18 hoặc v20 (x64) từ nodejs.org.
2.  **Git**: Để kéo code về.
3.  **IIS (Internet Information Services)**:
    *   Bật tính năng IIS trong Server Manager.
    *   Cài thêm **Application Request Routing (ARR)** (Optional nhưng tốt cho reverse proxy).
4.  **IISNode**: Module bắt buộc để chạy Node.js trên IIS.
    *   Tải bản x64: [https://github.com/azure/iisnode](https://github.com/azure/iisnode)
5.  **URL Rewrite Module**:
    *   Tải từ trang chủ IIS.net.
6.  **MySQL**: Đã có sẵn (theo thông tin bạn cung cấp).

## 2. Triển khai Code (Deployment)

### Bước 1: Kéo code về VPS
Giả sử thư mục gán tên miền `bkteam.site` của bạn là `C:\inetpub\wwwroot\bkteam.site`.

Mở PowerShell:
```powershell
# Di chuyển vào thư mục gốc của domain
cd C:\inetpub\wwwroot\bkteam.site

# Clone code (Lưu ý dấu chấm ở cuối để clone vào thư mục hiện tại thay vì tạo folder con)
# Đảm bảo thư mục rỗng trước khi clone
git clone https://github.com/KhoaMinhPMK/alone_app.git .
```

### Bước 2: Cài đặt & Build (Bắt buộc)
Vì đây là ứng dụng Node.js, bạn không thể chỉ copy code là chạy được.
```powershell
# 1. Cài đặt dependencies cho toàn bộ dự án
yarn install

# 2. Di chuyển vào thư mục backend và build
cd apps/backend-api
yarn build
```

### Bước 3: Cấu hình IIS (Quan trọng)
Mặc định IIS đang trỏ vào thư mục gốc. Bạn cần đổi đường dẫn vật lý (Physical Path) để nó chạy đúng ứng dụng NestJS.

1.  Mở **IIS Manager**.
2.  Tìm site `bkteam.site`.
3.  Chuột phải -> **Manage Website** -> **Advanced Settings**.
4.  Sửa **Physical Path**: Thêm `\apps\backend-api` vào cuối đường dẫn hiện tại.
    *   Ví dụ cũ: `C:\inetpub\wwwroot\bkteam.site`
    *   Ví dụ mới: `C:\inetpub\wwwroot\bkteam.site\apps\backend-api`
5.  Nhấn OK.

### Bước 4: Cấu hình Môi trường (.env)
Tạo file `.env` trong `apps/backend-api` (ngang hàng với `src`, `package.json`):
```env
DATABASE_HOST=localhost
DATABASE_PORT=3306
DATABASE_USER=root
DATABASE_PASSWORD=123456
DATABASE_NAME=alone_db
PORT=3000
```

## 3. Cấu hình Database

1.  Mở **phpMyAdmin** (đã có sẵn trên VPS).
2.  Tạo database mới tên `alone_db` (utf8mb4_unicode_ci).
3.  Import file SQL:
    *   Chọn database `alone_db`.
    *   Chọn tab **Import**.
    *   Chọn file từ đường dẫn: `C:\inetpub\wwwroot\alone\packages\database-schema\schema.sql`.

## 4. Cấu hình IIS

### Bước 1: Tạo Website
1.  Mở **IIS Manager**.
2.  Chuột phải **Sites** -> **Add Website**.
3.  Điền thông tin:
    *   **Site name**: `AloneApp` (hoặc tên tùy ý).
    *   **Physical path**: Trỏ đến `C:\inetpub\wwwroot\alone\apps\backend-api`.
    *   **Binding**:
        *   Type: `http` (hoặc https nếu đã có SSL).
        *   Host name: `bkuteam.site` (hoặc để trống nếu dùng IP).

### Bước 2: Cấp quyền (Permissions)
IIS cần quyền ghi vào thư mục để tạo log và file tạm.
1.  Chuột phải vào thư mục `apps/backend-api` -> **Properties** -> **Security**.
2.  Nhấn **Edit** -> **Add**.
3.  Thêm user `IIS AppPool\AloneApp` (nếu tên site là AloneApp) hoặc `IUSR`.
4.  Cấp quyền **Full Control** (hoặc ít nhất là Read/Write/Modify).

### Bước 3: Kiểm tra web.config
Đảm bảo file `web.config` đã tồn tại trong `apps/backend-api`. File này chỉ định cho IIS dùng `iisnode` để chạy file `main.js` (sau khi build là `dist/main.js`).

*Lưu ý: Trong `web.config` hiện tại đang trỏ `main.js`. Vì NestJS build ra `dist/main.js`, ta cần sửa lại `web.config` một chút.*

## 5. Kiểm tra

Truy cập trình duyệt: `http://bkuteam.site/api` (hoặc IP VPS).
Nếu thấy phản hồi JSON hoặc "Hello World" là thành công.

## 6. Troubleshooting (Sửa lỗi thường gặp)

*   **Lỗi 500.19**: Thường do chưa cài URL Rewrite module.
*   **Lỗi 500.xx (IISNode)**:
    *   Vào thư mục `apps/backend-api/iisnode` (folder này tự sinh ra) để xem log lỗi chi tiết.
    *   Đảm bảo đã chạy `yarn build` để có thư mục `dist`.
