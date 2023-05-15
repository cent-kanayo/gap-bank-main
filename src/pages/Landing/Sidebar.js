import { Link, NavLink } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import LogoLight from '../../assets/images/gapfinance-whitelogo.png';

import './Home.css';
const Sidebar = ({ navRef }) => {
  const closeSidebar = () => {
    navRef.current.classList.remove('show-sidebar');
  };
  return (
    <aside ref={navRef} className="sidebar">
      <div className="sidebar-brand">
        <div>
          <img
            src={LogoLight}
            alt="logo light"
            height="58"
            width="100"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="socials">
          <ul className="list-inline mb-0 footer-social-link">
            <li className="list-inline-item">
              <Link to="#!" className="avatar-xs d-block">
                <div className="avatar-title rounded-circle">
                  <i className="ri-facebook-fill"></i>
                </div>
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to="#!" className="avatar-xs d-block">
                <div className="avatar-title rounded-circle">
                  <i className="ri-github-fill"></i>
                </div>
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to="#!" className="avatar-xs d-block">
                <div className="avatar-title rounded-circle">
                  <i className="ri-linkedin-fill"></i>
                </div>
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to="#!" className="avatar-xs d-block">
                <div className="avatar-title rounded-circle">
                  <i className="ri-google-fill"></i>
                </div>
              </Link>
            </li>
            <li className="list-inline-item">
              <Link to="#!" className="avatar-xs d-block">
                <div className="avatar-title rounded-circle">
                  <i className="ri-dribbble-line"></i>
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="links-container">
        <span className="link">
          <NavLink to="/">Home</NavLink>
        </span>
        <span className="link">
          <NavLink href="#about">About Us</NavLink>
        </span>
        <span className="link">
          <NavLink className="fs-16" href="#careers">
            Careers
          </NavLink>
        </span>
        <span className="link">
          <NavLink className="fs-16" href="#faqs">
            FAQs
          </NavLink>
        </span>
        <span className="link">
          <NavLink className="fs-16" href="#contact">
            Contact us
          </NavLink>
        </span>
      </div>
      <div className="cta">
        <Link to="/login" className="sidebar-btn">
          Sign in
        </Link>
        <Link to="/register" className="sidebar-btn">
          Join GAP Finance
        </Link>
      </div>
      <button className="toggle" onClick={closeSidebar}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="#011868"
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
