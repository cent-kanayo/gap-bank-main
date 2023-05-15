import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Card,
  Col,
  Container,
  Form,
  Input,
  Row,
  UncontrolledTooltip,
} from 'reactstrap';

import Landing1 from '../../assets/images/landing.png';
import './Home.css';

import { Slide, Fade } from 'react-awesome-reveal';
import { useDispatch, useSelector } from 'react-redux';

import { registerUser } from '../../store/features/auth';

const Home = () => {
  const [email, setEmail] = useState('');
  const [accountType, setAccountType] = useState('Account type');
  const [accountCategory, setAccountCategory] = useState('Account category');
  const [business, setBusiness] = useState('');
  const [isBusiness, setIsBusiness] = useState(false);
  const [formError, setFormError] = useState(false);
  const [formErrorMsg, setFormErrorMsg] = useState('');

  const dispatch = useDispatch();
  const history = useNavigate();
  const { error, loading, errorMsg, user } = useSelector((state) => state.auth);
  console.log(errorMsg);

  useEffect(() => {
    if (accountCategory === 'business') {
      setIsBusiness(true);
    } else {
      setIsBusiness(false);
    }
  }, [accountCategory]);

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (
      accountCategory === 'business' &&
      accountType === 'savings' &&
      (!email || !business || !accountType)
    ) {
      setFormError(true);
      setFormErrorMsg(
        'You need a business name and a current account for this category'
      );
      return;
    }
    if (accountCategory === 'personal' && (!email || !accountType)) {
      setFormError(true);
      setFormErrorMsg('All fields are required');
      return;
    }
    if (!email || !accountType || !accountCategory) {
      setFormError(true);
      setFormErrorMsg('All fields are required');
      return;
    }
    if (accountCategory === 'personal') {
      dispatch(registerUser({ email, accountType, accountCategory }));
      return;
    }
    dispatch(
      registerUser({
        email,
        accountType,
        accountCategory,
        businessName: business,
      })
    );
  };

  useEffect(() => {
    if (user) {
      history('/auth-twostep-basic');
    }

    // setTimeout(() => {
    //   dispatch(resetRegisterFlag());
    // }, 3000);
  }, [dispatch, user, error, history]);
  return (
    <React.Fragment>
      <section className="section hero-section bg-light pb-0" id="home">
        <div className="hero">
          <div className="hero__left">
            <h1 className="fw-bold text-capitalize mb-3 lh-base text-primary mobile-text">
              START AFRESH WITH GAPFINANCE
            </h1>
            <h1 className="fw-bold text-capitalize mb-3 lh-base text-primary large-text">
              Start afresh <br /> with GAPFINANCE
            </h1>

            {/* text-muted */}
            <p className="lead lh-base mb-4">
              GapFinance is reliable, the ultimate goal of GapFinance is to
              create a system that brings happiness to every customer, this is
              more than just a bank, this is he bridge giving hope to
              entrepreneurs and supporting the youths.
            </p>

            <Form onSubmit={onFormSubmit} className="job-panel-filter">
              {error && <p className="error">{errorMsg}</p>}
              {formError && <p className="error">{formErrorMsg}</p>}
              <Row xs="1" md="2" lg="3">
                <Col className="col-md-4 mb-2">
                  <div>
                    <Input
                      type="text"
                      className="form-control filter-input-box"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </Col>
                <Col className="col-md-4 mb-2">
                  <div>
                    <select
                      className="form-control"
                      data-choices
                      value={accountType}
                      onChange={(e) => setAccountType(e.target.value)}
                    >
                      <option value="">Account type</option>
                      <option value="savings">Savings</option>
                      <option value="current">Current</option>
                    </select>
                  </div>
                </Col>
                <Col className="col-md-4 mb-2">
                  <div>
                    <select
                      className="form-control"
                      data-choices
                      value={accountCategory}
                      onChange={(e) => setAccountCategory(e.target.value)}
                    >
                      <option value="">Account category</option>
                      <option value="personal">Personal</option>
                      <option value="business">Business</option>
                    </select>
                  </div>
                </Col>
                {isBusiness && (
                  <Col className="col-md-4">
                    <div>
                      <Input
                        type="text"
                        className="form-control filter-input-box"
                        placeholder="Business Name"
                        value={business}
                        onChange={(e) => setBusiness(e.target.value)}
                      />
                    </div>
                  </Col>
                )}
                <Col lg="12" className="col-md-4">
                  <div className="h-100">
                    <button
                      className="btn btn-primary submit-btn w-100 h-100"
                      type="submit"
                      disabled={loading}
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
            <Slide duration="1500" direction="right">
              <img
                src={Landing1}
                alt="our customers avatar"
                className="user-img"
              />
            </Slide>

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
