# Alone App Monorepo

Dự án "Alone" - Ứng dụng dành cho các cặp đôi (Anti-dating app).

## Cấu trúc dự án

Dự án được tổ chức theo mô hình Monorepo:

```
e:\project\alone\
├── apps\
│   ├── backend-api\       # NestJS Backend (Node.js) - Chạy chính
│   ├── mobile-alone\      # React Native Mobile App (Android)
│   └── php-backend\       # PHP Backend (Hỗ trợ/Legacy/phpMyAdmin)
├── packages\
│   ├── database-schema\   # SQL Schema (MySQL)
│   └── shared-types\      # TypeScript Types chia sẻ
└── docs\                  # Tài liệu dự án
```

## Yêu cầu hệ thống

- **Node.js**: v18+
- **PHP**: v8.0+ (cho IIS)
- **MySQL**: v8.0+
- **IIS**: Đã cài đặt IISNode và PHP Manager.

## Cài đặt & Chạy

### 1. Backend (NestJS)
Chạy trên IIS thông qua IISNode.
- Config: `apps/backend-api/web.config`
- Cài đặt:
  ```bash
  cd apps/backend-api
  npm install
  npm run build
  ```

### 2. Mobile App
- Cài đặt:
  ```bash
  cd apps/mobile-alone
  npm install
  ```
- Chạy Android:
  ```bash
  npx react-native run-android
  ```

### 3. PHP Backend
- Đặt tại `apps/php-backend`.
- Cấu hình IIS trỏ Virtual Directory hoặc Application vào thư mục này.

## Database
- Import file `packages/database-schema/schema.sql` vào MySQL.
