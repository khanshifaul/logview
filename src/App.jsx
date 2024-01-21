import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import About from "./pages/about";
import Home from "./pages/home";
export default function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="container flex justify-between items-center mx-auto">
          <h1 className="font-bold text-3xl">LogView</h1>
          <nav>
            <ul className="flex justify-between">
              <li className="px-2 mx-2">
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
