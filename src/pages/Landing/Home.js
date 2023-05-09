import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card,
  Col,
  Container,
  Form,
  Input,
  Row,
  UncontrolledTooltip,
} from 'reactstrap';
import { motion } from 'framer-motion';

import Landing1 from '../../assets/images/landing.png';
import './Home.css';

const Home = () => {
  const transition = { type: 'spring', duration: 3 };
  return (
    <React.Fragment>
      <section className="section job-hero-section bg-light pb-0" id="home">
        <div className="hero">
          <div className="hero__left">
            <h1 className="fw-bold text-capitalize mb-3 lh-base text-primary mobile-text">
              BANKING MADE EASY START AFRESH WITH GAPBANK
            </h1>
            <h1 className="fw-bold text-capitalize mb-3 lh-base text-primary large-text">
              BANKING MADE EASY
              <br />
              START AFRESH WITH GAPBANK
            </h1>

            {/* text-muted */}
            <p className="lead lh-base mb-4">
              Gapbank is reliable, the ultimate goal of Gapbank is to create a
              system that brings happiness to every customer, this is more than
              just a bank, this is he bridge giving hope to entrepreneurs and
              supporting the youths.
            </p>

            <Form action="#" className="job-panel-filter">
              <Row className="g-md-0 g-2">
                <Col className="col-md-4">
                  <div>
                    <Input
                      type="search"
                      id="job-title"
                      className="form-control filter-input-box"
                      placeholder="Mobile No."
                    />
                  </div>
                </Col>
                <Col className="col-md-4">
                  <div>
                    <select className="form-control" data-choices>
                      <option value="">Account type</option>
                      <option value="Personal">Personal</option>
                      <option value="Business">Business</option>
                    </select>
                  </div>
                </Col>
                <Col className="col-md-4">
                  <div className="h-100">
                    <button
                      className="btn btn-primary submit-btn w-100 h-100"
                      type="submit"
                    >
                      <i className="ri-bank-line align-bottom me-1"></i> Create
                      Account
                    </button>
                  </div>
                </Col>
              </Row>
            </Form>

            {/* <ul className="treding-keywords list-inline mb-0 mt-3 fs-13">
                  <li className="list-inline-item text-danger fw-semibold">
                    <i className="mdi mdi-tag-multiple-outline align-middle"></i>{" "}
                    Trending Keywords:
                  </li>
                  <li className="list-inline-item">
                    <Link to="#">
                      Design,
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="#">
                      Development,
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="#">
                      Manager,
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="#">
                      Senior
                    </Link>
                  </li>
                </ul> */}
          </div>

          <div className="position-relative hero__right home-img text-center mt-5 mt-lg-0">
            {/* <Card className="card-bg-fill p-3 rounded shadow-lg inquiry-box">
                  <div className="d-flex align-items-center">
                    <div className="avatar-sm flex-shrink-0 me-3">
                      <div className="avatar-title bg-soft-warning text-warning rounded fs-18">
                        <i className="ri-mail-send-line"></i>
                      </div>
                    </div>
                    <h5 className="fs-15 lh-base mb-0">
                      Work Inquiry from velzon
                    </h5>
                  </div>
                </Card> */}
            <motion.img
              initial={{ opacity: 0, x: 500 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 500 }}
              transition={transition}
              src={Landing1}
              alt="our customers avatar"
              className="user-img"
            />

            <img alt="" />

            <div className="circle-effect">
              <div className="circle"></div>
              <div className="circle2"></div>
              <div className="circle3"></div>
              <div className="circle4"></div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Home;
