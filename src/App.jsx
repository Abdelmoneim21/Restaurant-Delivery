import { Routes,Route } from "react-router-dom"
import Navbar from "./components/NavBar/Navbar"
import Home from "./pages/Home/Home"
import Cart from "./pages/Cart/Cart"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  )
}

export default App
