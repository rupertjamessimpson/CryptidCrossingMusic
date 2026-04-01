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
          to="/shows"
          className={`tab ${path.startsWith("/shows") ? "" : "active"}`}
        >
          Shows
        </Link>
        <Link
          to="/development"
          className={`tab ${path.startsWith("/development") ? "" : "active"}`}
        >
          Development
        </Link>
      </nav>
    </div>
  );
}

export default Header;