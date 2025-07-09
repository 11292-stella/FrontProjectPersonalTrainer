import Footer from "./components/Footer"
import Home from "./components/Home"
import HomeLogin from "./components/HomeLogin.jsx"
import NavBar from "./components/NavBar"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/homeLogin" element={<HomeLogin />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
