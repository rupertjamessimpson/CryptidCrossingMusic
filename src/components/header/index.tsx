import { Link, useLocation } from "react-router-dom";
import "./index.css";

function Header() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div>
      <div className="header">
        <img src="/images/Logo.png" alt="Cryptid Crossing Logo" />
        <nav className="folder-tabs">
          <Link to="/album" className={`tab ${path.startsWith("/album") ? "" : "active"}`}>
            <span className="tab-text">Album</span>
          </Link>
          <Link to="/about" className={`tab ${path.startsWith("/about") ? "" : "active"}`}>
            <span className="tab-text">About</span>
          </Link>
        </nav>
        <div className="folder-top"/>
      </div>
    </div>
  );
}

export default Header;