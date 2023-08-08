import { BrowserRouter, Route, Routes } from "react-router-dom"
import AuthProvider from "./context/AuthContext"
import Dashboard from "./components/Dashboard"
import Auth from "./components/Auth"


const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App