import { Link, NavLink } from 'react-router-dom';
import './Home.css';
const Sidebar = ({ navRef }) => {
  const closeSidebar = () => {
    navRef.current.classList.remove('show-sidebar');
  };
  return (
    <aside ref={navRef} className="sidebar">
      <div className="sidebar-links">
        <ul>
          <li>
            <NavLink onClick={closeSidebar} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink onClick={closeSidebar} to="/">
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink onClick={closeSidebar} to="/">
              Careers
            </NavLink>
          </li>
          <li>
            <NavLink onClick={closeSidebar} to="/">
              FAQs
            </NavLink>
          </li>
          <li>
            <a onClick={closeSidebar} href="#contact">
              Contact Us
            </a>
          </li>
        </ul>
        <div className="sidebar-btn">
          <button>
            <Link onClick={closeSidebar} to="/login">
              Sign in
            </Link>
          </button>
          <button>
            <Link onClick={closeSidebar} to="/register">
              Join GAP Finance
            </Link>
          </button>
        </div>
      </div>
      <button className="toggle" onClick={closeSidebar}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-x-lg"
          viewBox="0 0 16 16"
        >
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z" />
        </svg>
      </button>
    </aside>
  );
};

export default Sidebar;
