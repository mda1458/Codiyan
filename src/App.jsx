import { BrowserRouter, Route, Routes } from "react-router-dom"
import AuthProvider from "./context/AuthContext"
import Dashboard from "./components/Dashboard"
import Auth from "./components/Auth"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"


const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </AuthProvider>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss={true}
        draggable={true}
        pauseOnHover={true}
       />
    </BrowserRouter>
  )
}

export default App