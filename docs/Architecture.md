Alone System Architecture Document

1. Giới thiệu (Introduction)

Tài liệu này phác thảo kiến trúc kỹ thuật cho dự án "Alone" - một hệ sinh thái ứng dụng di động hỗ trợ người độc thân và các cặp đôi.

1.1. Phạm vi

Kiến trúc này bao gồm thiết kế cho:

Mobile App (MVP): Ứng dụng React-Native cho Android ("Alone").

Backend API: Dịch vụ Node.js (NestJS) chạy trên Windows VPS.

Database: MySQL với thiết kế "Shared Schema" (Sơ đồ Chung).

Integration: Tích hợp với LLM API (Không giới hạn).

1.2. Quyết định Kiến trúc Cốt lõi

Monorepo: Quản lý code cho cả Mobile, Backend và Shared Libraries trong một kho lưu trữ duy nhất.

Shared Data Schema: Cơ sở dữ liệu được thiết kế để hỗ trợ cả trạng thái "Cá nhân" và "Cặp đôi".

Zero-Trust Security: Dữ liệu nhạy cảm (Nhật ký) được mã hóa ở cấp độ ứng dụng.

2. Kiến trúc Cấp cao (High Level Architecture)

2.1. Tổng quan Kỹ thuật

Hệ thống sử dụng kiến trúc Client-Server tối ưu hóa cho Windows Server.

Client: React Native (Android).

Server: NestJS (Node.js) làm API Gateway và Business Logic.

Data: MySQL.

2.2. Sơ đồ Hệ thống

(Mobile App) -> HTTPS -> (NestJS API on Windows VPS) -> (MySQL) & (LLM API)

2.3. Mô hình Monorepo

/alone-monorepo
├── apps/
│   ├── mobile-alone/      # React Native App (Alone)
│   ├── backend-api/       # NestJS API
├── packages/
│   ├── shared-types/      # TypeScript Interfaces
│   ├── database-schema/   # Schema Definitions
└── package.json


3. Tech Stack

Mobile: React Native (TypeScript).

Backend: Node.js (NestJS Framework).

Database: MySQL (Quản lý qua phpMyAdmin).

OS: Windows Server (VPS).

Process Manager: PM2.

4. Thiết kế Dữ liệu (Shared Schema)

4.1. Nguyên tắc "Couple ID"

Mọi bảng dữ liệu có khả năng chia sẻ đều phải có cột couple_id (Nullable).

4.2. Mô hình Thực thể

Bảng users

id: UUID (PK)

couple_id: UUID (Nullable)

Bảng journals (Nhật ký)

id: UUID

user_id: UUID

couple_id: UUID (Nullable)

content_encrypted: Text (Mã hóa)

Bảng transactions (Chi tiêu)

id: UUID

user_id: UUID

couple_id: UUID (Nullable)

amount: Decimal

Bảng anonymous_profiles

id: UUID

fake_name: String

matching_tags: JSON

5. Bảo mật (Security)

Mã hóa: Sử dụng thuật toán AES-256-GCM ở cấp độ ứng dụng (Backend) trước khi lưu vào MySQL. Master Key lưu trong .env.

API: Bắt buộc HTTPS. Xác thực bằng JWT.

6. Triển khai trên Windows VPS

Cài đặt Node.js, MySQL.

Cấu hình IIS hoặc Apache làm Reverse Proxy.

Dùng PM2 để quản lý tiến trình Node.js.