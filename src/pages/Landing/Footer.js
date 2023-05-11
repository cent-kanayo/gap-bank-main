import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import LogoLight from '../../assets/images/logo-light.png';

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="custom-footer bg-primary py-5 position-relative">
        <Container>
          <Row xs="1" md="2">
            <Col className="col-lg-4 mt-4">
              <div>
                <div>
                  <img src={LogoLight} alt="logo light" height="38" />
                </div>
                <div className="mt-4 fs-15">
                  <p>
                    We are a financial services company led by individuals with
                    over 35years collective investment banking, Corporate
                    finance, retail banking & financial techology experience,
                    working to provide tailored financial solutions to both
                    private individuals and businesses.
                  </p>
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
            </Col>

            <Col className="col-lg-7 ms-lg-auto">
              <Row>
                <Col className="col-sm-4 mt-4">
                  <h5 className="text-white mb-0">Company</h5>
                  <div className="mt-3">
                    <ul className="list-unstyled ff-secondary footer-list fs-16">
                      <li>
                        <Link to="#">About Us</Link>
                      </li>
                      <li>
                        <Link to="#">Our Vision</Link>
                      </li>
                      <li>
                        <Link to="#">Our Mission</Link>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col className="col-sm-4 mt-4">
                  <h5 className="text-white mb-0">Personal</h5>
                  <div className="mt-3">
                    <ul className="list-unstyled ff-secondary footer-list fs-16">
                      <li>
                        <Link to="#">Account opening</Link>
                      </li>
                      <li>
                        <Link to="#">Savings</Link>
                      </li>
                      <li>
                        <Link to="#">Bills Payments</Link>
                      </li>
                      <li>
                        <Link to="#">Expense tracker</Link>
                      </li>
                      <li>
                        <Link to="#">Loans</Link>
                      </li>
                      <li>
                        <Link to="#">Investment</Link>
                      </li>
                      <li>
                        <Link to="#">Buy now Pay later</Link>
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col className="col-sm-4 mt-4">
                  <h5 className="text-white mb-0">Business</h5>
                  <div className="mt-3">
                    <ul className="list-unstyled ff-secondary footer-list fs-16">
                      <li>
                        <Link to="#">Business loans</Link>
                      </li>
                      <li>
                        <Link to="#">Funds transfer</Link>
                      </li>
                      <li>
                        <Link to="#">Inventory</Link>
                      </li>
                      <li>
                        <Link to="#">Invoice generation</Link>
                      </li>
                      <li>
                        <Link to="#">Bookkeping</Link>
                      </li>
                      <li>
                        <Link to="#">Investment</Link>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row className="text-center text-sm-start align-items-center mt-5">
            <Col className="col-sm-6">
              <div>
                <p className="copy-rights mb-0 fs-13">
                  © {new Date().getFullYear()} GAP Bank. All rights reserved.
                </p>
              </div>
            </Col>
            {/* <Col className="col-sm-6">
              <div className="text-sm-end mt-3 mt-sm-0">
                <ul className="list-inline mb-0 footer-list gap-4 fs-15">
                  <li className="list-inline-item">
                    <Link to="/pages-privacy-policy">Privacy Policy</Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="/pages-term-conditions">
                      Terms & Conditions
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="/pages-privacy-policy">Security</Link>
                  </li>
                </ul>
              </div>
            </Col> */}
          </Row>
        </Container>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
