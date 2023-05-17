import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

import {
  Card,
  CardBody,
  Col,
  Container,
  Row,
  Button,
  Form,
  Input,
  Alert,
} from 'reactstrap';
import ParticlesAuth from '../ParticlesAuth';

//import images
import logoLight from '../../../assets/images/logo-light.png';
import { useSelector, useDispatch } from 'react-redux';
import {
  activate,
  resetError,
  resetSuccess,
} from '../../../store/features/auth';

import Navbar from '../../Landing/Navbar';

import '../../Landing/Home.css';

const BasicTwosVerify = () => {
  document.title = 'Authorize access';

  const [otp, setOtp] = useState('');

  const dispatch = useDispatch();
  const history = useNavigate();

  const { error, errorMsg, user, isActivated } = useSelector(
    (state) => state.auth
  );

  const resetEmail = () => {
    dispatch(resetSuccess());
    history('/');
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    const otpNum = parseInt(otp);
    if (!otpNum) {
      return;
    }
    dispatch(activate({ email: user?.email, otp: otpNum }));
  };

  useEffect(() => {
    if (isActivated) {
      history('/auth-twostep-cover');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActivated]);
  useEffect(() => {
    if (error) {
      const timeOut = setTimeout(() => {
        dispatch(resetError());
      }, 3000);
      return () => clearTimeout(timeOut);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);
  return (
    <React.Fragment>
      <Navbar />
      <div className="auth-page-wrapper">
        <ParticlesAuth>
          <div className="auth-page-content">
            <Container>
              <Row>
                <Col lg={12}>
                  <div className="text-center mt-sm-5 mb-4 text-white-50">
                    <div>
                      <Link
                        to="/dashboard"
                        className="d-inline-block auth-logo"
                      >
                        <img src={logoLight} alt="" height="20" />
                      </Link>
                    </div>
                    <p className="mt-3 fs-15 fw-medium">
                      GapFinance, the best experience
                    </p>
                  </div>
                </Col>
              </Row>

              <Row className="justify-content-center">
                <Col md={8} lg={6} xl={5}>
                  <Card className="mt-4">
                    <CardBody className="p-4">
                      <div className="mb-4">
                        <div className="avatar-lg mx-auto">
                          <div className="avatar-title bg-light text-primary display-5 rounded-circle">
                            <i className="ri-mail-line"></i>
                          </div>
                        </div>
                      </div>

                      <div className="p-2 mt-4">
                        <div className="text-muted text-center mb-4 mx-lg-3">
                          <h4 className="">Verify Your Email</h4>
                          <p>
                            Please enter the 6 digit code sent to{' '}
                            <span className="fw-semibold">
                              {user && user?.email}
                            </span>
                          </p>
                        </div>

                        <Form onSubmit={onFormSubmit}>
                          {isActivated && isActivated ? (
                            <>
                              {toast('Your Redirect To Login Page...', {
                                position: 'top-right',
                                hideProgressBar: false,
                                className: 'bg-success text-white',
                                progress: undefined,
                                toastId: '',
                              })}
                              <ToastContainer autoClose={2000} limit={1} />
                              <Alert color="success">
                                Register User Successfully and Your Redirect To
                                Dashboard...
                              </Alert>
                            </>
                          ) : null}
                          {error && error ? (
                            <Alert
                              color="danger"
                              style={{ padding: '8px 5%', textAlign: 'center' }}
                            >
                              <div>
                                <p>{errorMsg}</p>
                              </div>
                            </Alert>
                          ) : null}
                          <Row>
                            <div className="mb-3 width">
                              <label
                                htmlFor="digit1-input"
                                className="visually-hidden"
                              >
                                OTP
                              </label>
                              <Input
                                type="text"
                                className="form-control form-control-lg bg-light border-light width"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value)}
                              />
                            </div>
                          </Row>
                          <div className="mt-3">
                            <Button
                              type="submit"
                              color="success"
                              className="w-100"
                            >
                              Confirm
                            </Button>
                          </div>
                          <div className="mt-3">
                            <Button
                              type="submit"
                              color="primary"
                              className="w-100"
                              onClick={resetEmail}
                            >
                              Incorrect email? return to register
                            </Button>
                          </div>
                        </Form>
                      </div>
                    </CardBody>
                  </Card>
                  <div className="mt-4 text-center">
                    <p className="mb-0">
                      Didn't receive a code ?{' '}
                      <Link
                        to="/auth-pass-reset-basic"
                        className="fw-semibold text-primary text-decoration-underline"
                      >
                        Resend
                      </Link>{' '}
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </ParticlesAuth>
      </div>
    </React.Fragment>
  );
};

export default BasicTwosVerify;
