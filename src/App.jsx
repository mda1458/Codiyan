import { BrowserRouter, Route, Routes } from "react-router-dom"
import AuthProvider from "./context/AuthContext"
import Login from "./components/Login"
import Dashboard from "./components/Dashboard"
import Signup from "./components/Signup"


const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App