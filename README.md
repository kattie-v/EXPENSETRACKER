
# 💸 Ứng dụng Quản lý Chi tiêu Cá nhân

## 📌 Mô tả Dự Án

Ứng dụng **Quản lý chi tiêu cá nhân** giúp người dùng ghi lại các khoản thu – chi hằng ngày, phân tích và hiển thị thống kê chi tiêu dưới dạng biểu đồ. Đây là công cụ hữu ích giúp kiểm soát tài chính cá nhân hiệu quả.

### 🎯 Các chức năng chính:
- Đăng ký / Đăng nhập người dùng
- Thêm, sửa, xoá các khoản thu/chi
- Thống kê trực quan theo thời gian và danh mục
- Biểu đồ thống kê bằng Recharts
- Xuất dữ liệu ra file Excel
- Truy vấn qua chatbot AI 

### 🛠 Công nghệ sử dụng:
- **Frontend**: React, TailwindCSS, Vite, Recharts, Moment.js
- **Backend**: Node.js, Express, MongoDB, JWT, bcryptjs
- **Khác**: Multer, XLSX, dotenv

---

## ⚙️ Hướng Dẫn Cài Đặt

# Create file `.evn`
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=8000
```

### Run backend 
```
npm install
npm run dev
```

### Run frontend
```
npm install
npm run dev
```