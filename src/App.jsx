import Footer from "./components/Footer"
import Home from "./components/Home"
import HomeLogin from "./components/HomeLogin.jsx"
import NavBar from "./components/NavBar"
import { Routes, Route } from "react-router-dom"
import CreaScheda from "./components/CreaScheda.jsx"

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/homeLogin" element={<HomeLogin />} />
        <Route path="/crea-scheda" element={<CreaScheda />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
