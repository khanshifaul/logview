import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Logo from "./components/logo";
import About from "./pages/about";
import Home from "./pages/home";
import NotFound from "./pages/not-found";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="bg-white sticky top-0">
          <div className="container  flex justify-between items-center mx-auto my-2">
            <a href="/">
              <Logo />
            </a>
            <nav>
              <ul className="flex justify-between space-x-2 mx-3">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "font-semibold" : ""
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive }) =>
                      isActive ? "font-semibold" : ""
                    }
                  >
                    About
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
