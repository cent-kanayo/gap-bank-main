import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Scrollspy from 'react-scrollspy';
import { Collapse, Container, NavbarToggler, NavLink, Row } from 'reactstrap';
import LogoDark from '../../assets/images/logo-dark.png';
import LogoLight from '../../assets/images/logo-light.png';
import './Home.css';
const Navbar = () => {
  const [isOpenMenu, setisOpenMenu] = useState(false);
  const [navClass, setnavClass] = useState('');
  const navRef = useRef(null);

  const toggle = () => {
    navRef.current.classList.toggle('show-nav');
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollNavigation, true);
  });

  const scrollNavigation = () => {
    var scrollup = document.documentElement.scrollTop;
    if (scrollup > 50) {
      setnavClass(' is-sticky');
    } else {
      setnavClass('');
    }
  };
  return (
    <React.Fragment>
      <nav
        className={
          'navbar navbar-expand-lg navbar-landing fixed-top job-navbar' +
          navClass
        }
        id="navbar"
      >
        <Container fluid className="custom-container">
          <div className="home-nav">
            <div className="nav-header">
              <Link className="navbar-brand" to="/">
                <img
                  src={LogoDark}
                  className="card-logo card-logo-dark"
                  alt="logo dark"
                  height="42"
                />
                <img
                  src={LogoLight}
                  className="card-logo card-logo-light"
                  alt="logo light"
                  height="42"
                />
              </Link>
              <button
                onClick={toggle}
                className="navbar-toggler py-0 fs-20 text-body"
                type="button"
                aria-label="Toggle navigation"
              >
                <i className="mdi mdi-menu"></i>
              </button>
            </div>

            <div className="nav-link" ref={navRef}>
              <div>
                <Collapse
                  className="navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <Scrollspy
                    offset={-18}
                    items={['hero', 'about', 'careers', 'faq', 'contact']}
                    currentClassName="active"
                    className="navbar-nav mx-auto mt-2 mt-lg-0"
                    id="navbar-example"
                  >
                    <li className="nav-item">
                      <NavLink className="fs-16" href="#home">
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="fs-16" href="#about">
                        About Us
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="fs-16" href="#careers">
                        Careers
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="fs-16" href="#faqs">
                        FAQs
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="fs-16" href="#contact">
                        Contact us
                      </NavLink>
                    </li>
                  </Scrollspy>

                  {/* <div>
              <Link to="/auth-signin-basic" className="btn btn-soft-primary">
              <i className="ri-user-3-line align-bottom me-1"></i> Login &
              Register
              </Link>
            </div> */}
                </Collapse>
              </div>
              <div className="line"></div>
              <div className="cta">
                <Link
                  to="/signin"
                  className="btn btn-link fw-bold text-decoration-none text-dark"
                >
                  Sign in
                </Link>
                <Link to="/join" className="btn btn-shadow btn-primary fw-bold">
                  Join GAP Bank
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
