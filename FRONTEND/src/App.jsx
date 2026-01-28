import React from 'react'
import AppRoutes from './routes' // Import component quản lý router

function App() {
  return (
    // Sau này nếu có Context (AuthProvider) hoặc Redux, bạn sẽ bọc chúng ở đây
    // Ví dụ: <AuthProvider>
      <AppRoutes />
    // </AuthProvider>
  )
}

export default App