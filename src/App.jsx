import Footer from "./components/Footer"
import Home from "./components/Home"
import HomeLogin from "./components/HomeLogin.jsx"
import NavBar from "./components/NavBar"
import { Routes, Route, useNavigate } from "react-router-dom"
import CreaScheda from "./components/CreaScheda.jsx"
import Prodotti from "./components/Prodotti.jsx"
import PaginaCarrello from "./components/PaginaCarrello.jsx"

function App() {
  const isLoggedIn = useSelector((state) => state.authLog.isLoggedIn)

  const navigate = useNavigate()

  useEffect(() => {
    const currentPath = window.location.pathname

    if (isLoggedIn) {
      if (currentPath === "/" || currentPath === "/home") {
        navigate("/homeLogin", { replace: true })
      }
    } else {
      const protectedPaths = [
        "/homeLogin",
        "/crea-scheda",
        "/prodotti",
        "/carrello",
      ]

      if (protectedPaths.includes(currentPath)) {
        navigate("/home", { replace: true })
      }
    }
  }, [isLoggedIn, navigate])

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/home" element={<Home />} />

        <Route
          path="/homeLogin"
          element={isLoggedIn ? <HomeLogin /> : <Home />}
        />

        <Route
          path="/crea-scheda"
          element={isLoggedIn ? <CreaScheda /> : <Home />}
        />
        <Route
          path="/prodotti"
          element={isLoggedIn ? <Prodotti /> : <Home />}
        />
        <Route
          path="/carrello"
          element={isLoggedIn ? <PaginaCarrello /> : <Home />}
        />
      </Routes>
      <Footer />
    </>
  )
}

export default App
