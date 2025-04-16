# Yenmarket Project: System Architecture and Development Plan

## System Architecture

### 1. Frontend

- **Framework**: Nuxt.js (Vue.js-based framework)
- **Styling**: Tailwind CSS for utility-first styling.
- **Components**: Modular components for reusability (e.g., `ProductList`, `SearchInput`, etc.).
- **Routing**: Dynamic routing for product categories and details.
- **State Management**: Vuex or Pinia for managing application state.

### 2. Backend

- **Framework**: Node.js with Express.js.
- **API**: RESTful API endpoints for product and category data.
- **Data Handling**: JSON files for initial data storage (`categories.json`, `products.json`).
- **Future Expansion**: Option to integrate a database (e.g., MongoDB, PostgreSQL).

### 3. Database

- **Current**: JSON files for simplicity.
- **Future**: Migrate to a database for scalability.
  - **Relational**: PostgreSQL for structured data.
  - **NoSQL**: MongoDB for flexible schema.

### 4. Server

- **Hosting**: Cloud-based hosting (e.g., AWS, Vercel, or Heroku).
- **Static Assets**: Serve images and static files from a CDN.

### 5. Security

- **Authentication**: JWT-based authentication for user sessions.
- **Authorization**: Role-based access control (RBAC) for admin and user permissions.
- **Data Protection**: HTTPS and secure headers (e.g., Helmet.js).

### 6. Deployment

- **CI/CD**: Automated pipelines using GitHub Actions.
- **Monitoring**: Tools like Sentry for error tracking and performance monitoring.

---

## Updated Development Plan

### Phase 1: Requirement Analysis
- **Duration**: 4 hours
- **Tasks**:
  - Gather requirements from stakeholders.
  - Define user stories and acceptance criteria.
- **Resources**: 1 Product Manager, 1 Business Analyst

### Phase 2: System Design
- **Duration**: 8 hours
- **Tasks**:
  - Design system architecture and database schema.
  - Create wireframes and UI/UX designs.
- **Resources**: 1 System Architect, 1 UI/UX Designer

### Phase 3: Development
- **Duration**: 16 hours
- **Tasks**:
  - Frontend development with Nuxt.js.
  - Backend API development with Express.js.
  - Integration of frontend and backend.
- **Resources**: 2 Frontend Developers, 2 Backend Developers

### Phase 4: Testing
- **Duration**: 8 hours
- **Tasks**:
  - Unit testing for components and APIs.
  - End-to-end testing for user flows.
- **Resources**: 2 QA Engineers

### Phase 5: Deployment
- **Duration**: 4 hours
- **Tasks**:
  - Set up CI/CD pipelines.
  - Deploy to staging and production environments.
- **Resources**: 1 DevOps Engineer

### Phase 6: Maintenance
- **Duration**: Ongoing
- **Tasks**:
  - Monitor system performance.
  - Fix bugs and implement new features.
- **Resources**: 1 Support Engineer

---

## Milestones and Progress Reports (Updated)

| Milestone              | Expected Completion | Deliverables                      |
|------------------------|---------------------|-----------------------------------|
| Requirement Analysis   | April 15, 2025     | User stories, acceptance criteria |
| System Design          | April 15, 2025     | Architecture diagram, wireframes  |
| Development Completion | April 16, 2025     | Functional frontend and backend   |
| Testing Completion     | April 16, 2025     | Tested and bug-free application   |
| Deployment             | April 16, 2025     | Live application                  |

---

# Dự án Yenmarket: Kiến trúc hệ thống và Kế hoạch phát triển

## Kiến trúc hệ thống

### 1. Frontend

- **Framework**: Nuxt.js (dựa trên Vue.js)
- **Styling**: Tailwind CSS để tạo kiểu theo hướng tiện ích.
- **Thành phần**: Các thành phần module để tái sử dụng (ví dụ: `ProductList`, `SearchInput`, v.v.).
- **Routing**: Routing động cho danh mục sản phẩm và chi tiết.
- **Quản lý trạng thái**: Vuex hoặc Pinia để quản lý trạng thái ứng dụng.

### 2. Backend

- **Framework**: Node.js với Express.js.
- **API**: Các endpoint API RESTful cho dữ liệu sản phẩm và danh mục.
- **Xử lý dữ liệu**: Tệp JSON để lưu trữ dữ liệu ban đầu (`categories.json`, `products.json`).
- **Mở rộng trong tương lai**: Tích hợp cơ sở dữ liệu (ví dụ: MongoDB, PostgreSQL).

### 3. Cơ sở dữ liệu

- **Hiện tại**: Tệp JSON để đơn giản hóa.
- **Tương lai**: Di chuyển sang cơ sở dữ liệu để mở rộng.
  - **Quan hệ**: PostgreSQL cho dữ liệu có cấu trúc.
  - **NoSQL**: MongoDB cho schema linh hoạt.

### 4. Máy chủ

- **Hosting**: Hosting trên nền tảng đám mây (ví dụ: AWS, Vercel hoặc Heroku).
- **Tệp tĩnh**: Phục vụ hình ảnh và tệp tĩnh từ CDN.

### 5. Bảo mật

- **Xác thực**: Xác thực dựa trên JWT cho phiên người dùng.
- **Phân quyền**: Kiểm soát truy cập dựa trên vai trò (RBAC) cho quyền admin và người dùng.
- **Bảo vệ dữ liệu**: HTTPS và các header bảo mật (ví dụ: Helmet.js).

### 6. Triển khai

- **CI/CD**: Pipeline tự động hóa sử dụng GitHub Actions.
- **Giám sát**: Công cụ như Sentry để theo dõi lỗi và hiệu suất.

---

### Giai đoạn 1: Phân tích yêu cầu
- **Thời gian**: 4 giờ
- **Nhiệm vụ**:
  - Thu thập yêu cầu từ các bên liên quan.
  - Định nghĩa các câu chuyện người dùng và tiêu chí chấp nhận.
- **Nguồn lực**: 1 Quản lý sản phẩm, 1 Nhà phân tích nghiệp vụ

### Giai đoạn 2: Thiết kế hệ thống
- **Thời gian**: 8 giờ
- **Nhiệm vụ**:
  - Thiết kế kiến trúc hệ thống và schema cơ sở dữ liệu.
  - Tạo wireframe và thiết kế UI/UX.
- **Nguồn lực**: 1 Kiến trúc sư hệ thống, 1 Nhà thiết kế UI/UX

### Giai đoạn 3: Phát triển
- **Thời gian**: 16 giờ
- **Nhiệm vụ**:
  - Phát triển frontend với Nuxt.js.
  - Phát triển API backend với Express.js.
  - Tích hợp frontend và backend.
- **Nguồn lực**: 2 Lập trình viên frontend, 2 Lập trình viên backend

### Giai đoạn 4: Kiểm thử
- **Thời gian**: 8 giờ
- **Nhiệm vụ**:
  - Kiểm thử đơn vị cho các thành phần và API.
  - Kiểm thử end-to-end cho các luồng người dùng.
- **Nguồn lực**: 2 Kỹ sư QA

### Giai đoạn 5: Triển khai
- **Thời gian**: 4 giờ
- **Nhiệm vụ**:
  - Thiết lập pipeline CI/CD.
  - Triển khai lên môi trường staging và production.
- **Nguồn lực**: 1 Kỹ sư DevOps

### Giai đoạn 6: Bảo trì
- **Thời gian**: Liên tục
- **Nhiệm vụ**:
  - Giám sát hiệu suất hệ thống.
  - Sửa lỗi và triển khai các tính năng mới.
- **Nguồn lực**: 1 Kỹ sư hỗ trợ

---

## Các mốc và báo cáo tiến độ (Cập nhật)

| Mốc                     | Hoàn thành dự kiến | Kết quả đầu ra                  |
|-------------------------|---------------------|----------------------------------|
| Phân tích yêu cầu       | Ngày 15/04/2025    | Câu chuyện người dùng, tiêu chí chấp nhận |
| Thiết kế hệ thống       | Ngày 15/04/2025    | Sơ đồ kiến trúc, wireframe      |
| Hoàn thành phát triển   | Ngày 16/04/2025    | Frontend và backend hoạt động   |
| Hoàn thành kiểm thử     | Ngày 16/04/2025    | Ứng dụng đã kiểm thử và không lỗi |
| Triển khai              | Ngày 16/04/2025    | Ứng dụng hoạt động trực tiếp    |

---

Tài liệu này trình bày kiến trúc và kế hoạch phát triển cho dự án Yenmarket. Các điều chỉnh có thể được thực hiện dựa trên phản hồi từ nhóm và yêu cầu dự án.
