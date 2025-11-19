Alone UI/UX Specification: "The Silent Nebula"

1. Triết lý Thiết kế (Design Philosophy)

Tài liệu này không chỉ là hướng dẫn kỹ thuật, mà là bản thiết kế cảm xúc. Ứng dụng "Alone" không phải là một công cụ, nó là một "Tinh vân Tĩnh lặng" (Silent Nebula).

Atmosphere (Bầu không khí): Lạnh, Sâu, Tĩnh. Giống như việc ngồi một mình ngắm bầu trời đêm đầy sao hoặc lặn sâu dưới đáy đại dương.

Material (Chất liệu): Sử dụng Glassmorphism (Hiệu ứng kính mờ) trên nền tối. Các lớp giao diện trôi nổi, mờ ảo, tạo chiều sâu mà không nặng nề.

Motion (Chuyển động): Chậm rãi, mượt mà (Fluid), mô phỏng chuyển động của nước hoặc khói. Không có chuyển động giật cục.

2. Hệ thống Thiết kế (Design System)

2.1. Bảng màu (Color Palette) - "Deep Ocean & Starlight"

Chúng ta sử dụng dải màu lạnh, độ tương phản cao để tạo sự sang trọng và tập trung.

Background (Nền Vô cực):

Midnight: #0B1120 (Xanh đen rất sâu - Màu chủ đạo).

Abyss: #020617 (Đen thẳm - Dùng cho các vùng sâu nhất).

Glass Layers (Lớp Kính):

Surface: rgba(30, 41, 59, 0.7) (Xanh đá pha mờ) + Blur 20px.

Overlay: rgba(51, 65, 85, 0.5) (Sáng hơn một chút để làm nổi bật).

Accent (Điểm nhấn - Ánh sao):

Neon Cyan: #22D3EE (Xanh lơ sáng - Dùng cho nút chính, trạng thái Active). Mang lại cảm giác công nghệ nhưng hy vọng.

Electric Indigo: #818CF8 (Tím xanh - Dùng cho Gradient).

Semantic (Ngữ nghĩa):

Safe (Thành công): #34D399 (Xanh ngọc lục bảo - Emerald).

Alert (Cảnh báo): #FB7185 (Hồng san hô - Rose). Lưu ý: Không dùng đỏ tươi, màu hồng này cảnh báo nhưng không gây hoảng loạn.

Text (Văn bản):

Primary: #F8FAFC (Trắng đục - Slate 50).

Secondary: #94A3B8 (Xám bạc - Slate 400).

2.2. Typography (Kiểu chữ)

Font: "Inter" hoặc "Outfit".

Hiện đại, sạch sẽ, tối ưu cho màn hình kỹ thuật số.

Styling: Sử dụng khoảng cách chữ (letter-spacing) rộng hơn một chút (0.5px) cho các tiêu đề để tạo cảm giác "thoáng đãng".

2.3. Hình khối & Hiệu ứng

Border Radius: 24px (Rất bo tròn, mềm mại).

Gradients: Sử dụng Gradient rất nhẹ từ Góc trên trái xuống Góc dưới phải cho các nút bấm để tạo hiệu ứng nổi 3D tinh tế.

Glow (Phát sáng): Các nút quan trọng (như Giao kèo) sẽ có hiệu ứng box-shadow màu Accent lan tỏa nhẹ (Outer Glow).

3. Chi tiết Màn hình & Vi tương tác (Creative Flows)

3.1. Màn hình "Cánh Cổng" (Auth Screen)

Visual: Nền tối hoàn toàn. Một đốm sáng (Gradient Orb) màu Cyan di chuyển chậm rãi, mờ ảo phía sau lớp kính đăng nhập.

Input Fields: Không có viền bao quanh. Chỉ có một đường line (underline) mờ bên dưới. Khi gõ, đường line sáng lên màu Cyan.

Nút "Bước vào" (Login):

Trạng thái thường: Mờ, như chìm trong sương.

Khi điền đủ thông tin: Sáng lên (Glow effect).

Tương tác: Khi nhấn, nút không "click" mà "tan biến", mở ra màn hình chính.

3.2. Màn hình Chính (Dashboard) - "Trung tâm Điều khiển"

Layout: Không dùng các đường kẻ chia cắt. Các khu vực được phân định bằng khoảng trắng (whitespace).

Thẻ "Lời nhắn từ Vũ trụ" (Nhắc nhở Buổi sáng):

Thiết kế dạng thẻ kính mờ (Glass Card) lớn ở đầu trang.

Nội dung LLM xuất hiện dần dần (Typewriter effect - gõ từng chữ) để người dùng đọc theo tốc độ xuất hiện -> Tạo cảm giác đang được "nói chuyện".

Dock (Thanh điều hướng dưới):

Tách rời khỏi đáy màn hình (Floating Dock), bo tròn 2 đầu.

Icon Active: Có một chấm sáng nhỏ (Dot) bên dưới và Icon phát sáng màu Cyan.

3.3. Mô-đun Nhật ký (The Journal) - "Dòng Chảy Suy Nghĩ"

Giao diện Viết:

Loại bỏ hoàn toàn các thanh công cụ rườm rà. Chỉ còn lại con trỏ nhấp nháy.

Ambient Background: Màu nền thay đổi cực nhẹ theo thời gian thực (hoặc theo từ khóa cảm xúc nếu bật phân tích). Ví dụ: Gõ từ "buồn", nền chuyển sắc tím trầm nhẹ.

Tương tác Lưu:

Vuốt xuống để lưu (Pull to Save).

Feedback: Một luồng sáng chạy từ cuối màn hình lên trên và biến mất vào hư không. Thông báo nhỏ: "Đã gửi vào hư không." (Hoặc "Đã lưu trữ an toàn").

3.4. Mô-đun Chi tiêu (The Vault)

Visual: Các con số sử dụng font Monospace (như code), tạo cảm giác chính xác, kỹ thuật.

Chế độ Kép (Switch Mode):

Giao diện công tắc: Không phải nút gạt on/off. Nó là một Thanh trượt (Slider).

Trái: Icon 🔒 (Kín đáo - Màu Xám).

Phải: Icon 🤝 (Hỗ trợ - Màu Cyan).

Hiệu ứng chuyển đổi: Khi kéo sang phải, giao diện "bừng sáng" nhẹ, các bong bóng gợi ý (Bubbles) từ LLM từ từ nổi lên.

3.5. Cầu nối Ẩn danh (The Bridge) - SÁNG TẠO NHẤT

Concept: Không phải danh sách người dùng. Đó là một Bầu trời sao (Star Map).

Giao diện Matching:

Mỗi người dùng tương đồng là một "Ngôi sao" phát sáng trên màn hình tối.

Sao càng sáng/gần trung tâm = Độ tương đồng càng cao.

Tương tác: Người dùng chạm vào một ngôi sao -> Nó phóng to thành thẻ thông tin (Glass Card) hiển thị "Câu chuyện" và "Điểm chung".

Chat Ẩn danh:

Bong bóng chat không có màu nền (Ghost Bubbles), chỉ có viền mờ hoặc nền kính rất nhạt. Tập trung hoàn toàn vào chữ.

Tên người chat: "Người Lữ Hành #123".

3.6. Nghi thức Giao kèo (The Covenant Ritual) - FR8

Đây là khoảnh khắc trang trọng nhất.

Trigger: Nút biểu tượng Vân Tay (Fingerprint) hoặc Ổ Khóa (Lock) phát sáng màu Vàng Kim (Gold) ở góc màn hình chat.

Hành động (Long Press):

Yêu cầu người dùng Đặt ngón tay và Giữ.

Visual Feedback:

Giây 1: Một vòng tròn ánh sáng bắt đầu vẽ quanh ngón tay.

Giây 2: Màn hình tối dần đi, chỉ còn lại ngón tay và vòng tròn. Tiếng "Humming" (âm thanh tần số thấp) tăng dần.

Giây 3: BÙNG! (Haptic Feedback mạnh). Một luồng sáng chạy dọc màn hình, ổ khóa vỡ ra.

Kết quả: Giao diện đổi màu nhẹ (ấm hơn một chút), tên thật hiện ra.

4. Âm thanh & Rung (Sound & Haptics)

Trong một ứng dụng cho người nội tâm, xúc giác và thính giác cực kỳ quan trọng.

Haptics (Rung):

Sử dụng Haptic Engine để tạo các rung động tinh tế (Tick, Click, Bump) thay vì rung mạnh (Buzz).

Ví dụ: Khi cuộn qua các ngày trong Nhật ký, tạo cảm giác "tách, tách" nhẹ như lật giấy.

Soundscape (Âm cảnh):

Không dùng tiếng "Ping" chói tai.

Dùng âm thanh tự nhiên đã được xử lý điện tử (Ambience): Tiếng giọt nước rơi (khi gửi tin), tiếng gió lùa (khi chuyển tab).

5. Xử lý Lỗi & Trạng thái Rỗng (Error & Empty)

Empty State (Ví dụ: Chưa có nhật ký):

Hình ảnh: Một phi hành gia nhỏ ngồi một mình nhìn ra vũ trụ (Line art, nét mảnh).

Text: "Vũ trụ đang yên tĩnh. Bạn có muốn ghi lại suy nghĩ đầu tiên?"

Error State (Mất mạng):

Không báo "Network Error".

Thông báo: "Mất tín hiệu với trạm mặt đất. Đang thử kết nối lại..." (Giữ đúng concept vũ trụ/biệt lập).

6. Tài nguyên (Assets)

Icons: Lucide React hoặc Phosphor Icons (Style: Thin/Light). Độ dày nét: 1.5px.

Animations: Sử dụng thư viện React Native Reanimated để đạt 60fps.