import { Link, useLocation } from "react-router-dom";
import "./index.css";

function Header() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="header">
      <img src="/images/Logo.png" alt="Cryptid Crossing Logo" />
      <nav className="folder-tabs">
        <Link
          to="/album"
          className={`tab ${path.startsWith("/album") ? "" : "active"}`}
        >
          Album
        </Link>
        <Link
          to="/about"
          className={`tab ${path.startsWith("/about") ? "" : "active"}`}
        >
          About
        </Link>
      </nav>
    </div>
  );
}

export default Header;