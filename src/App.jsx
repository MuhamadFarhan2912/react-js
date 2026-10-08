import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
import Home from "./pages/Home"
import Team from "./pages/Team"
import Contact from "./pages/Contact"
import Book from "./pages/Book"
import Login from "./pages/Login"
import Register from "./pages/Register"

function App() {
  return (
    <BrowserRouter>
      <div className="container">

        <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
          <NavLink
            to="/"
            className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-decoration-none"
          >
            <i className="fa-solid fa-book-open me-2 fs-3"></i>
            <span className="fs-4 fw-bold">Bookstore</span>
          </NavLink>

          <ul className="nav nav-pills">

            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-link active fw-bold" : "nav-link"
                }
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/book"
                className={({ isActive }) =>
                  isActive ? "nav-link active fw-bold" : "nav-link"
                }
              >
                Book
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/team"
                className={({ isActive }) =>
                  isActive ? "nav-link active fw-bold" : "nav-link"
                }
              >
                Team
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "nav-link active fw-bold" : "nav-link"
                }
              >
                Contact
              </NavLink>
            </li>

            <li className="nav-item">
  <NavLink
    to="/login"
    className={({ isActive }) =>
      isActive ? "nav-link active fw-bold" : "nav-link"
    }
  >
    Login
  </NavLink>
</li>

<li className="nav-item">
  <NavLink
    to="/register"
    className={({ isActive }) =>
      isActive ? "nav-link active fw-bold" : "nav-link"
    }
  >
    Register
  </NavLink>
</li>

          </ul>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<Book />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>

        <footer className="py-4 mt-5 border-top text-center">
          <p className="mb-0 text-muted">
            © 2026 Bookstore. All rights reserved.
          </p>
        </footer>

      </div>
    </BrowserRouter>
  )
}

export default App