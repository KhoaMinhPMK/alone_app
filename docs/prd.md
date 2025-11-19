Alone Product Requirements Document (PRD)

1. Mục tiêu và Bối cảnh (Goals and Background Context)

1.1. Mục tiêu (Goals)

Mục tiêu của PRD này là định nghĩa Sản phẩm Khả thi Tối thiểu (MVP) cho "Alone", bao gồm cả Cấp 1 (Trải nghiệm Cá nhân) và Cấp 2 (Cầu nối Ẩn danh).

Mục tiêu 1 (Giá trị Cấp 1): Cung cấp giá trị nội tại ngay lập tức cho người dùng cá nhân (Persona 1 & 2) thông qua các công cụ thấu cảm (Nhật ký, Nhắc nhở) và tiện ích (Chi tiêu), nhằm xây dựng lòng tin cốt lõi.

Mục tiêu 2 (Giá trị Cấp 2): Sử dụng lòng tin từ Cấp 1 để kích hoạt một nền tảng xã hội "sạch" và an toàn, nơi người dùng có thể tìm kiếm kết nối chân thực.

Mục tiêu 3 (Hệ sinh thái - Nhấn mạnh): Thiết kế MVP (Cấp 1 & 2) với nền tảng kỹ thuật (NFR5) có khả năng mở rộng liền mạch sang Cấp 3 (Ứng dụng "Couple") trong tương lai, đảm bảo dữ liệu có thể được "chuyển đổi" một cách an toàn từ cá nhân sang chung.

1.2. Bối cảnh (Background Context)

Tài liệu này được tạo ra dựa trên brief.md (Bản mô tả Dự án).

Bối cảnh (Chống-hẹn-hò-bẩn - Nhấn mạnh): "Alone" được định vị là một giải pháp anti-dating-app (chống-lại-app-hẹn-hò-truyền-thống). Nó trực tiếp giải quyết vấn đề của các nền tảng "xổ xàng", "hời hợt" và "bẩn" hiện có trên thị trường. Bằng cách ưu tiên "cảm xúc thật", bảo mật, và loại bỏ sự phán xét dựa trên ngoại hình, "Alone" tạo ra một không gian "sạch" và an toàn cho những người nội tâm (Persona 1) tìm kiếm kết nối chân thực.

1.3. Bảng Thay đổi (Change Log)

Ngày

Phiên bản

Mô tả

Tác giả

17/11/2025

1.0

Bản nháp PRD ban đầu, bao gồm Epics & Stories cho Cấp 1 & 2.

John (PM)

2. Yêu cầu (Requirements)

Đây là các yêu cầu tối thiểu để khởi chạy MVP (Cấp 1 & 2).

2.1. Yêu cầu Chức năng (Functional)

Cấp 1: "Người Bạn Đồng Hành Thấu Cảm"

FR1 (Nhắc nhở): Hệ thống phải gửi một (1) thông báo đẩy cá nhân hóa (sử dụng LLM) vào mỗi buổi sáng, tập trung vào việc thể hiện "sự quan tâm" thay vì "ép buộc".

FR2 (Nhật ký): Người dùng phải có thể tạo các ghi chú nhật ký riêng tư.

FR2.1 (Làm rõ): Hệ thống phải hỗ trợ "Nhật ký Thích ứng" (LLM) với 4 cấp độ, trong đó các cấp độ 2, 3, 4 yêu cầu sự cho phép rõ ràng (opt-in) của người dùng:

Cấp 1 (Bị động - Mặc định): Chỉ lưu trữ an toàn.

Cấp 2 (Chủ động - Opt-in): Gửi thông báo đẩy nhẹ nhàng (dùng LLM) sau khi người dùng viết.

Cấp 3 (Phân tích - Opt-in): Cung cấp nút "Tổng quan Cảm xúc" (dùng LLM) khi được hỏi.

Cấp 4 (Tương tác - Opt-in): Cung cấp nút "Thảo luận" (dùng LLM) trên mỗi ghi chú.

FR3 (Chi tiêu): Người dùng phải có thể ghi lại các giao dịch chi tiêu cá nhân.

FR3.1: Hệ thống phải hỗ trợ "Chi tiêu Chế độ Kép". Chế độ "Kín đáo" (mặc định) sẽ không bao giờ bình luận về chi tiêu. Chế độ "Hỗ trợ Tiết kiệm" (opt-in) chỉ được kích hoạt khi người dùng đặt mục tiêu.

FR4 (Ghi chú): Người dùng phải có thể tạo, đọc, cập nhật và xóa các ghi chú văn bản đơn giản.

Cấp 2: "Cầu nối Ẩn danh"

FR5 (Profile Ảo): Người dùng (đã opt-in) phải có thể tạo một "Profile Ảo" không chứa ảnh thật hoặc tên thật.

FR5.1: Hệ thống phải sử dụng LLM để hỗ trợ người dùng tạo "Câu chuyện của tôi" (backstory).

FR5.2: Hệ thống phải cho phép người dùng hiển thị "Chỉ số Cảm xúc".

FR6 (Matching): Hệ thống phải cung cấp tính năng "Hồ sơ Chung Động".

FR6.1: Hệ thống phải đề xuất kết nối dựa trên sự tương đồng về dữ liệu ẩn danh (ví dụ: chi tiêu, nhật ký, sở thích).

FR6.2: LLM phải có khả năng phát hiện sở thích mới (từ nhật ký/chi tiêu) và (với sự cho phép) cập nhật chúng vào hồ sơ matching.

FR7 (Chat): Người dùng có Profile Ảo phải có khả năng gửi và nhận tin nhắn 1-1 ("Chat Ẩn danh") với người dùng khác.

FR8 (Giao kèo): Hệ thống phải cung cấp "Cơ chế Giao kèo" (một hành động đồng thuận hai chiều) để hai tài khoản ẩn danh "ghép đôi" và kết thúc trạng thái ẩn danh với nhau.

2.2. Yêu cầu Phi chức năng (Non-Functional)

NFR1 (Nền tảng): MVP phải là một ứng dụng Android được xây dựng bằng React-Native.

NFR2 (Hạ tầng): Backend và CSDL phải có khả năng chạy trên VPS Window với MySQL (được quản lý bằng phpMyAdmin).

NFR3 (Bảo mật - Rất cao): Dữ liệu "Nhật ký" và "Chi tiêu" cá nhân phải được mã hóa (cả khi lưu trữ và khi truyền tải) và không bao giờ được phép rò rỉ hoặc chia sẻ nếu không có sự cho phép rõ ràng của người dùng.

NFR3.1 (Làm rõ): Kiến trúc sư phải ưu tiên Mã hóa Cấp độ Trường (Field-Level Encryption) cho nội dung Nhật ký trong CSDL MySQL. Mọi giao tiếp API phải dùng HTTPS.

NFR4 (Bảo mật - Ẩn danh): Hệ thống "Cầu nối Ẩn danh" (Cấp 2) phải đảm bảo không rò rỉ bất kỳ Thông tin Nhận dạng Cá nhân (PII) nào cho đến khi "Giao kèo" (FR8) được thực hiện thành công.

NFR5 (Kiến trúc - Tầm nhìn): Sơ đồ CSDL MySQL phải được thiết kế theo "Sơ đồ Dữ liệu Chung" (ví dụ: sử dụng couple_id có thể NULL) để hỗ trợ Cấp 3 (App "Couple") trong tương lai.

NFR6 (Trải nghiệm LLM): Các tương tác của LLM (Nhắc nhở, Nhật ký) phải tạo cảm giác "thấu cảm" và "con người", không được "robot" hay sáo rỗng.

NFR7 (Kiểm duyệt): Môi trường "Chat Ẩn danh" (FR7) phải được duy trì "sạch". (Câu hỏi mở: Cần nghiên cứu giải pháp kiểm duyệt bằng AI).

NFR8 (Hiệu suất): Ứng dụng phải nhẹ và phản hồi nhanh, đặc biệt là với các tương tác LLM.

3. Mục tiêu Thiết kế Giao diện Người dùng (UI/UX Goals)

Mục tiêu thiết kế tổng thể là tạo ra một trải nghiệm "An toàn, Ấm áp, và Tinh tế", hỗ trợ Persona 1 (Người Nội tâm).

3.1. Tầm nhìn UX (UX Vision): Giao diện phải mang lại cảm giác như một "không gian riêng tư", một "cuốn sổ tay" đáng tin cậy. Nó phải yên tĩnh, có trật tự và không bao giờ "xổ xàng" hay gây giật mình.

3.2. Nguyên tắc Tương tác (Interaction Paradigms):

"Sự cho phép là trên hết" (Permission-First): Không bao giờ kích hoạt một tính năng xã hội hoặc chia sẻ dữ liệu (kể cả với LLM) mà không có sự cho phép (opt-in) rõ ràng của người dùng.

"Tiết lộ Tiến bộ" (Progressive Disclosure): Ẩn các tính năng phức tạp (Cấp 2, 3, 4 của Nhật ký) trong Cài đặt, giữ cho giao diện mặc định sạch sẽ và đơn giản.

3.3. Các Màn hình/Luồng Cốt lõi (Làm rõ):

Luồng Xác thực: Phải tạo cảm giác "bảo mật" như một "két sắt".

Màn hình chính (Dashboard): "Căn phòng" chính, nơi nhận FR1 (Nhắc nhở) và điều hướng.

Mô-đun Nhật ký: "Trái tim" của Cấp 1. Phải triển khai giao diện cho FR2.1 (4 cấp độ).

Mô-đun Chi tiêu: "Tiện ích" của Cấp 1. Phải triển khai giao diện cho FR3.1 (Chế độ Kép).

Mô-đun Cầu nối: "Cửa ngõ" vào Cấp 2. Phải triển khai FR5, FR6, FR7 (Ẩn danh, Matching, Chat).

Luồng Giao kèo: Luồng UX "trang trọng" để thực hiện FR8.

Mô-đun Cài đặt: "Trung tâm Chỉ huy Quyền riêng tư", nơi quản lý tất cả các "opt-in".

3.4. Khả năng Tiếp cận (Accessibility): Ưu tiên văn bản rõ ràng, dễ đọc và kích thước nút bấm đủ lớn.

3.5. Thương hiệu (Branding) (Giả định): Tông màu chủ đạo nên là các màu ấm, nhẹ nhàng (ví dụ: màu kem, màu be, xanh pastel) thay vì các màu công nghệ (xanh dương, xám). Typography nên mềm mại và dễ đọc.

4. Giả định Kỹ thuật (Technical Assumptions)

Các giả định này được lấy từ brief.md và các quyết định đã thống nhất, dùng để định hướng cho Kiến trúc sư.

4.1. Cấu trúc Kho lưu trữ (Làm rõ): Dự án sẽ sử dụng cấu trúc Monorepo. Điều này là bắt buộc để quản lý code của alone-app, couple-app (tương lai), backend-api và packages/shared-types (để thực thi NFR5).

4.2. Hạ tầng: Sử dụng VPS Window (hiện có) để host backend (API) và CSDL (NFR2).

4.3. CSDL: Sử dụng MySQL (NFR2), được quản lý qua phpMyAdmin.

4.4. Công nghệ Di động: Chỉ sử dụng React-Native cho Android (NFR1).

4.5. Backend API: (Câu hỏi Mở 1) Kiến trúc sư cần đề xuất một framework API (ví dụ: Node.js, PHP, .NET Core) chạy được trên WAMP/VPS Window và tương thích tốt nhất với React-Native, MySQL và LLM API.

5. Danh sách Epic (Epic List)

MVP (Cấp 1 & 2) sẽ được chia thành 2 Epic chính, được thực hiện theo trình tự.

Epic 1: Nền tảng & "Người Bạn Đồng Hành Thấu Cảm" (Cấp 1)

Mục tiêu: Thiết lập toàn bộ nền tảng kỹ thuật (Monorepo, API, CSDL) và xây dựng hoàn chỉnh trải nghiệm cá nhân, riêng tư (Nhật ký, Chi tiêu) để xây dựng lòng tin.

Epic 2: "Cầu nối Ẩn danh" (Cấp 2)

Mục tiêu: Xây dựng nền tảng xã hội an toàn (Profile Ảo, Matching, Chat Ẩn danh) và "Cơ chế Giao kèo", dựa trên lòng tin đã có từ Epic 1.

6. Chi tiết Epic (Epic Details)

Epic 1: Nền tảng & "Người Bạn Đồng Hành Thấu Cảm" (Cấp 1)

Mục tiêu (Goal): Thiết lập nền tảng kỹ thuật hoàn chỉnh (Monorepo, Backend API, CSDL MySQL) và xây dựng toàn bộ trải nghiệm cá nhân (Cấp 1) để cung cấp giá trị ngay lập tức và xây dựng lòng tin cốt lõi của người dùng.

Story 1.1: Thiết lập Nền tảng Kỹ thuật & Xác thực Người dùng

Là một Người dùng mới (New User),

Tôi muốn đăng ký tài khoản và đăng nhập một cách an toàn,

Để tôi có thể bắt đầu sử dụng các tính năng cá nhân của mình.

Tiêu chí Chấp nhận (Acceptance Criteria):

(Kỹ thuật) Cấu trúc Monorepo (Giả định 4.1) được thiết lập (ví dụ: apps/alone-app, apps/backend-api, packages/shared-types).

(Kỹ thuật) Backend API (Giả định 4.5) được thiết lập trên VPS Window (NFR2) và kết nối thành công với CSDL MySQL (NFR2).

(Kỹ thuật) Bảng users được tạo trong MySQL, bao gồm các trường để băm (hash) và muối (salt) mật khẩu (NFR3).

(Kỹ thuật) API endpoints cho /register và /login được tạo.

(UI/UX) Ứng dụng React-Native (NFR1) có "Luồng Xác thực" (Mục 3.3) bao gồm màn hình Đăng ký, Đăng nhập, và thông điệp rõ ràng về bảo mật (NFR3).

(Chức năng) Người dùng có thể đăng ký tài khoản thành công (mật khẩu được băm).

(Chức năng) Người dùng có thể đăng nhập thành công và nhận được một token (ví dụ: JWT) để xác thực các yêu cầu trong tương lai.

(Chức năng) Sau khi đăng nhập, người dùng được chuyển đến "Màn hình chính" (Dashboard) (Mục 3.3).

Story 1.2: Tạo và Xem Nhật ký (Cấp độ 1 - Bị động & Bảo mật)

Là một Người dùng (User),

Tôi muốn viết, lưu và xem lại các ghi chú nhật ký của mình một cách riêng tư tuyệt đối (FR2),

Để tôi có một "két sắt" an toàn cho cảm xúc của mình.

Tiêu chí Chấp nhận (Acceptance Criteria):

(Kỹ thuật) Bảng journals được tạo trong CSDL, liên kết với user_id.

(Kỹ thuật - Bảo mật) Nội dung (content) của nhật ký phải được mã hóa cấp độ trường (field-level encryption) trong CSDL (NFR3.1).

(Kỹ thuật) Backend API cung cấp các endpoint CRUD (Tạo, Đọc, Cập nhật, Xóa) an toàn cho /journals (yêu cầu token xác thực).

(UI/UX) Ứng dụng RN có "Mô-đun Nhật ký" (Mục 3.3) cho phép người dùng tạo ghi chú mới.

(UI/UX) Người dùng có thể xem danh sách các ghi chú cũ của mình (ví dụ: theo lịch).

(Chức năng) Người dùng có thể mở, đọc, chỉnh sửa, và xóa các ghi chú cũ.

(UI/UX) Giao diện ở Cấp độ 1 này phải "yên tĩnh" và không hiển thị bất kỳ tùy chọn "opt-in" nào.

Story 1.3: Ghi chép Chi tiêu (Chế độ 1 - Kín đáo)

Là một Người dùng (User),

Tôi muốn ghi lại các chi tiêu hàng ngày của mình một cách riêng tư (FR3),

Để tôi có thể tự mình theo dõi tài chính.

Tiêu chí Chấp nhận (Acceptance Criteria):

(Kỹ thuật) Bảng transactions được tạo trong CSDL, tuân thủ "Sơ đồ Dữ liệu Chung" (NFR5) (phải có user_id và couple_id (mặc định là NULL)).

(Kỹ thuật) Backend API cung cấp các endpoint CRUD an toàn cho /transactions.

(UI/UX) Ứng dụng RN có "Mô-đun Chi tiêu" (Mục 3.3) cho phép người dùng nhập: Tên (Description), Số tiền (Amount), Ngày (Date), và Hạng mục (Category).

(Chức năng) Người dùng có thể xem danh sách các giao dịch gần đây.

(Chức năng) Người dùng có thể xóa giao dịch.

(UI/UX) Giao diện ở Chế độ 1 này không được có bất kỳ bình luận hay gợi ý nào từ LLM (FR3.1).

Story 1.4: Ghi chú Tiện ích

Là một Người dùng (User),

Tôi muốn tạo các ghi chú nhanh (không phải nhật ký) để lưu trữ thông tin (FR4),

Để tôi có thể sắp xếp các suy nghĩ đơn giản.

Tiêu chí Chấp nhận (Acceptance Criteria):

(Kỹ thuật) Bảng notes được tạo trong CSDL, liên kết với user_id.

(Kỹ thuật) API CRUD an toàn cho /notes.

(UI/UX) Ứng dụng RN có "Mô-đun Ghi chú" cho phép CRUD ghi chú văn bản đơn giản.

Story 1.5: Trung tâm Cài đặt & Quyền riêng tư (Nền tảng cho Opt-in)

Là một Người dùng (User),

Tôi muốn có một nơi duy nhất để xem và quản lý tất cả các cài đặt về quyền riêng tư,

Để tôi cảm thấy mình có toàn quyền kiểm soát dữ liệu của mình (Mục 3.3).

Tiêu chí Chấp nhận (Acceptance Criteria):

(UI/UX) "Mô-đun Cài đặt" (Mục 3.3) được tạo trong ứng dụng RN.

(Kỹ thuật) Bảng user_settings được tạo trong CSDL, liên kết với user_id, để lưu trữ các lựa chọn "opt-in" (dạng boolean, mặc định là false).

(UI/UX) Giao diện hiển thị các "công tắc" (toggles) rõ ràng (mặc định là TẮT) cho các tính năng "opt-in" sau:

"Kích hoạt Phản hồi Nhật ký"

"Kích hoạt Phân tích Tâm trạng"

"Kích hoạt Trò chuyện Nhật ký"

"Kích hoạt Hỗ trợ Tiết kiệm"

(Chuẩn bị cho Epic 2) "Kích hoạt Cập nhật Hồ sơ Động"

(Chức năng) Thay đổi các công tắc này sẽ lưu giá trị vào CSDL.

Story 1.6: Kích hoạt Tính năng Nhật ký Thích ứng (LLM Opt-in)

Là một Người dùng (User),

Tôi muốn có tùy chọn (opt-in) để LLM đọc và tương tác với nhật ký của mình (FR2.1),

Để tôi có thể nhận được sự hỗ trợ và thấu hiểu sâu hơn.

Tiêu chí Chấp nhận (Acceptance Criteria):

(Phụ thuộc 1.5) Các công tắc "Nhật ký" trong Màn hình Cài đặt giờ đây hoạt động.

(Chức năng - Cấp 2) Nếu "Phản hồi Nhật ký" được BẬT, Backend API (sau 10 phút lưu) sẽ gọi LLM (NFR6) và gửi một thông báo đẩy nhẹ nhàng.

(Chức năng - Cấp 3) Nếu "Phân tích Tâm trạng" được BẬT, một nút "Tổng quan Cảm xúc" xuất hiện trong Mô-đun Nhật ký, khi nhấn vào sẽ gọi API (dùng LLM) để phân tích và trả về dữ liệu (FR2.1).

(Chức năng - Cấp 4) Nếu "Trò chuyện Nhật ký" được BẬT, một nút "Thảo luận" xuất hiện trên mỗi ghi chú, mở ra một giao diện chat (dùng LLM) (FR2.1).

Story 1.7: Kích hoạt Tính năng Hỗ trợ Tiết kiệm (LLM Opt-in)

Là một Người dùng (User),

Tôi muốn có tùy chọn (opt-in) đặt mục tiêu tiết kiệm và nhận lời khuyên (FR3.1),

Để "Người Bạn Đồng Hành" giúp tôi quản lý tài chính tốt hơn.

Tiêu chí Chấp nhận (Acceptance Criteria):

(Phụ thuộc 1.5) Công tắc "Hỗ trợ Tiết kiệm" trong Màn hình Cài đặt giờ đây hoạt động.

(UI/UX) Giao diện "Mô-đun Chi tiêu" giờ đây cho phép người dùng tạo "Mục tiêu Tiết kiệm" (ví dụ: "Tiết kiệm 3 triệu tháng này").

(Chức năng) Backend API (dùng LLM) sẽ được kích hoạt (khi Chế độ 2 BẬT) để chủ động phân tích chi tiêu (so với mục tiêu) và đưa ra các gợi ý/nhắc nhở (FR3.1).

(Chức năng - Nâng cao) LLM có thể (với sự cho phép) truy cập dữ liệu "Nhật ký" để đưa ra lời khuyên liên kết (ví dụ: "Bạn chi tiêu nhiều khi buồn").

Story 1.8: Triển khai Nhắc nhở Buổi sáng (LLM)

Là một Người dùng (User),

Tôi muốn nhận được một thông báo cá nhân hóa vào mỗi buổi sáng (FR1),

Để tôi cảm thấy được quan tâm.

Tiêu chí Chấp nhận (Acceptance Criteria):

(Kỹ thuật) Backend (trên VPS Window) phải có một bộ lập lịch (scheduler/cron job) chạy hàng ngày (ví dụ: 6 giờ sáng).

(Chức năng) Hàng ngày, bộ lập lịch sẽ kích hoạt một API (dùng LLM) cho từng người dùng (đã cho phép nhận thông báo).

(Chức năng) API (LLM) sẽ xem xét dữ liệu gần đây của người dùng (nhật ký, chi tiêu, thời tiết) để tạo một tin nhắn "quan tâm" độc đáo (NFR6).

(Kỹ thuật) Tin nhắn này được gửi dưới dạng Thông báo Đẩy (Push Notification) đến ứng dụng RN.

(UI/UX) Người dùng có thể tùy chỉnh thời gian nhận thông báo trong Cài đặt (Mục 1.5).

Story 1.9: Hoàn thiện Màn hình chính (Dashboard) Cấp 1

Là một Người dùng (User),

Tôi muốn Màn hình chính của mình hiển thị thông tin hữu ích (Mục 3.3),

Để tôi có một cái nhìn tổng quan về ngày của mình.

Tiêu chí Chấp nhận (Acceptance Criteria):

(UI/UX) Màn hình chính (Dashboard) (từ 1.1) giờ đây hiển thị "Nhắc nhở Buổi sáng" (từ 1.8) một cách nổi bật.

(UI/UX) Hiển thị các phím tắt (shortcuts) rõ ràng để đi đến Nhật ký (1.2), Chi tiêu (1.3), và Ghi chú (1.4).

(UI/UX) Hiển thị một phím tắt (có thể bị làm mờ/ít nổi bật hơn) để đi đến "Mô-đun Cầu nối" (để chuẩn bị cho Epic 2).

Epic 2: "Cầu nối Ẩn danh" (Cấp 2)

Mục tiêu (Goal): Xây dựng nền tảng xã hội an toàn (Cấp 2) dựa trên lòng tin đã có từ Epic 1. Cho phép người dùng tạo "Profile Ảo", tìm kiếm sự tương đồng (matching) một cách chân thực, và thực hiện "Giao kèo" để chuẩn bị cho Cấp 3.

Story 2.1: Kích hoạt "Cầu nối" & Tạo Profile Ảo

Là một Người dùng (User) (đã có lòng tin từ Cấp 1),

Tôi muốn có tùy chọn (opt-in) tham gia "Cầu nối Ẩn danh" và tạo một Profile Ảo (FR5),

Để tôi có thể khám phá các kết nối an toàn mà không sợ bị phán xét (NFR4).

Tiêu chí Chấp nhận (Acceptance Criteria):

(UI/UX) Phím tắt "Cầu nối" trên Màn hình chính (từ 1.9) giờ đây hoạt động.

(UI/UX) Khi truy cập lần đầu, một màn hình "Opt-in" rõ ràng phải xuất hiện, giải thích về sự ẩn danh, an toàn, và môi trường "sạch" (NFR4, NFR7).

(Chức năng) Nếu người dùng đồng ý (opt-in), họ sẽ được đưa đến luồng tạo "Profile Ảo".

(UI/UX) Luồng tạo profile không được phép yêu cầu hoặc gợi ý Ảnh thật, Tên thật, hoặc bất kỳ PII (Thông tin Nhận dạng Cá nhân) nào.

(UI/UX) Giao diện phải có trình soạn thảo văn bản để người dùng viết "Câu chuyện của tôi" (FR5.1).

(Chức năng) Trình soạn thảo này phải có tùy chọn [Gợi ý của LLM] để giúp người dùng viết "câu chuyện kể" (backstory) (FR5.1).

(UI/UX) Giao diện phải cho phép người dùng chọn một "Chỉ số Cảm xúc" (ví dụ: "Đang suy tư", "Sẵn sàng chia sẻ") (FR5.2).

(Kỹ thuật) Bảng anonymous_profiles được tạo trong CSDL, liên kết với user_id, để lưu trữ dữ liệu Profile Ảo, "Câu chuyện", và "Chỉ số Cảm xúc".

(Phụ thuộc 1.5) Công tắc "Kích hoạt Cập nhật Hồ sơ Động" (cho FR6.2) giờ đây xuất hiện trong "Mô-đun Cài đặt" (mặc định TẮT).

Story 2.2: Triển khai "Hồ sơ Chung Động" (Matching & Cập nhật)

Là một Người dùng (đã có Profile Ảo),

Tôi muốn hệ thống gợi ý cho tôi những người tương đồng dựa trên dữ liệu thật (Nhật ký, Chi tiêu) (FR6),

Để tôi có thể tìm thấy những kết nối chân thực.

Tiêu chí Chấp nhận (Acceptance Criteria):

(UI/UX) "Mô-đun Cầu nối" (từ 2.1) có một tab "Khám phá" (Explore).

(Kỹ thuật) Backend API (/explore/suggestions) được tạo. API này sẽ:

Chỉ trả về kết quả cho những người dùng đã "opt-in".

Sử dụng logic (ví dụ: LLM, hoặc phân tích từ khóa) để so sánh dữ liệu (đã được cho phép từ Cài đặt) từ journals, transactions, và anonymous_profiles.

(UI/UX) Giao diện "Khám phá" hiển thị các "Hồ sơ Chung" (ví dụ: "Bạn và 'Người Lạ 123' có 80% tương đồng về 'Sở thích Sáng tạo'").

(Chức năng - FR6.2) Nếu người dùng BẬT công tắc "Cập nhật Hồ sơ Động" (từ 2.1), một API backend (dùng LLM) sẽ định kỳ quét journals/transactions mới.

(Chức năng - FR6.2) Nếu phát hiện sở thích mới (ví dụ: "Hội họa"), hệ thống sẽ gửi một thông báo riêng tư (trong app, không phải push): "Tôi thấy bạn quan tâm đến 'Hội họa'. Bạn có muốn thêm vào hồ sơ matching ẩn danh không?"

(Chức năng) Nếu người dùng đồng ý, từ khóa "Hội họa" được thêm vào dữ liệu matching của anonymous_profiles.

Story 2.3: Triển khai "Chat Ẩn danh"

Là một Người dùng (đã có Profile Ảo),

Tôi muốn có thể bắt đầu một cuộc trò chuyện 1-1 an toàn và ẩn danh (FR7),

Để tôi có thể tìm hiểu đối phương một cách chậm rãi.

Tiêu chí Chấp nhận (Acceptance Criteria):

(UI/UX) Từ một "Hồ sơ Chung" (trong 2.2), người dùng có thể nhấn nút [Trò chuyện] để gửi tin nhắn đầu tiên.

(Kỹ thuật) Các bảng anonymous_chats (quản lý phiên chat) và anonymous_messages (nội dung chat) được tạo trong CSDL.

(Chức năng) Người dùng có thể gửi và nhận tin nhắn văn bản 1-1.

(Bảo mật - NFR4) Giao diện chat phải luôn hiển thị tên Profile Ảo (ví dụ: "Người Lạ 123"). Không được phép hiển thị bất kỳ PII nào.

(Bảo mật - NFR4) Hệ thống chat không được phép gửi ảnh hoặc video (để đảm bảo môi trường "sạch" và "an toàn").

(Bảo mật - NFR7) Phải có một nút [Báo cáo/Block] rõ ràng trong giao diện chat để người dùng báo cáo các hành vi không phù hợp.

Story 2.4: Triển khai "Cơ chế Giao kèo"

Là một Người dùng (đang trong Chat Ẩn danh),

Tôi muốn có một cách rõ ràng và trang trọng để đề xuất kết thúc ẩn danh (FR8),

Để chúng tôi có thể chính thức "ghép đôi" và chuẩn bị cho ứng dụng "Couple".

Tiêu chí Chấp nhận (Acceptance Criteria):

(UI/UX) Trong màn hình "Chat Ẩn danh" (từ 2.3), phải có một nút [🔐 Giao kèo] (Mục 3.3).

(UI/UX) Nhấn nút này sẽ hiển thị một pop-up xác nhận (phía User A): "Bạn có chắc chắn muốn đề xuất 'Giao kèo' không? Nếu họ đồng ý, trạng thái ẩn danh sẽ kết thúc."

(Chức năng) Nếu User A xác nhận, User B sẽ nhận được một lời mời đặc biệt (không phải tin nhắn chat): "'Người Lạ 123' đã gửi cho bạn lời mời 'Giao kèo'."

(UI/UX) User B có hai lựa chọn: [Đồng ý] hoặc [Từ chối].

(Kỹ thuật) Nếu User B [Đồng ý], Backend API sẽ:
a. Tạo một hàng mới trong bảng couples.
b. Cập nhật bảng users của cả hai User A và B, gán couple_id mới này cho họ.
c. Đánh dấu trạng thái "giao kèo" là hoàn tất.

(UI/UX) Sau khi thành công, giao diện chat (từ 2.3) sẽ "mở khóa": hiển thị tên thật (hoặc tên người dùng) của nhau.

(UI/UX) Một thông báo chúc mừng xuất hiện, đề xuất họ "Tải ứng dụng 'Couple' và đăng nhập bằng tài khoản này để bắt đầu hành trình mới."

7. Báo cáo Kết quả Kiểm tra (Checklist Results Report)

(Đã thực thi pm-checklist.md)

Trạng thái: VƯỢT QUA (PASS)

Tổng quan: Tài liệu PRD này được coi là hoàn chỉnh, nhất quán, và sẵn sàng cho Giai đoạn Kiến trúc (Architecture) và Giai đoạn Thiết kế UX.

Phân tích:

(PASS) Mục 1-3 (Vấn đề, Giải pháp, UI/UX): Tầm nhìn rõ ràng, giải quyết đúng vấn đề thị trường ("anti-dating-app"), và xác định rõ Persona.

(PASS) Mục 2 & 4 (Yêu cầu & Kỹ thuật): Các yêu cầu FR và NFR được định nghĩa rõ ràng. Các ràng buộc kỹ thuật (VPS Window, MySQL, Monorepo, NFR5-Sơ đồ Chung) được ghi lại đầy đủ.

(PASS) Mục 5 & 6 (Epics & Stories): 2 Epics và 13 Stories được chia nhỏ hợp lý, theo trình tự logic, và bao quát đủ MVP Cấp 1 & 2.

8. Các bước Tiếp theo (Next Steps)

Tài liệu PRD này hiện đã được "khóa" (locked) và sẵn sàng để chuyển giao.

8.1. Lời nhắc cho Chuyên gia UX (UX Expert Prompt)

Gửi Sally (UX Expert):
"Bản PRD này đã được phê duyệt. Vui lòng lấy tài liệu này (đặc biệt là Mục 3: Mục tiêu UI/UX và các stories trong Epic 1 & 2) để bắt đầu tạo Tài liệu Đặc tả Kỹ thuật UI/UX (front-end-spec.md). Hãy tập trung vào việc cụ thể hóa các luồng (flows), thành phần (components), và đặc biệt là trải nghiệm 'an toàn' và 'thấu cảm' cho Persona 1 (Người Nội tâm)."

8.2. Lời nhắc cho Kiến trúc sư (Architect Prompt)

Gửi Winston (Architect):
"Bản PRD này (cùng với brief.md) đã được phê duyệt. Vui lòng lấy tài liệu này (đặc biệt là Mục 4: Giả định Kỹ thuật - Monorepo, VPS Window, MySQL, NFR5) và tất cả 13 stories để bắt đầu tạo Tài liệu Kiến trúc (architecture.md). Hãy đặc biệt chú ý đến 'Sơ đồ Dữ liệu Chung' (NFR5) để đảm bảo backend và CSDL MySQL hỗ trợ tầm nhìn Hệ sinh thái Cấp 3 (App 'Couple') trong tương lai."