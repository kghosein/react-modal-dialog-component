import { Navigate, Route, Routes } from "react-router-dom"
import "./App.css"
import Home from "./components/Home"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace={true} />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  )
}

export default App
