import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Alert, Button, Card, Col, Container, Row } from 'reactstrap';
import { resetError, setPassword } from '../../../store/features/auth';

import { ToastContainer, toast } from 'react-toastify';

import Navbar from '../../Landing/Navbar';

//import images
import AuthSlider from '../authCarousel';

import '../../Landing/Home.css';

const CoverTwosVerify = () => {
  document.title = 'Set password | GapFinance';

  const [password, setUserPassword] = useState('');

  const { confirmPass, user, error, errorMsg } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (!password) {
      return;
    }
    dispatch(setPassword({ id: user?.id, password }));
  };
  useEffect(() => {
    if (confirmPass) {
      navigate('/login');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [confirmPass]);
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
      <div className="auth-page-wrapper auth-bg-cover py-5 d-flex justify-content-center align-items-center min-vh-100">
        <div className="bg-overlay"></div>
        <div className="auth-page-content overflow-hidden pt-lg-5">
          <Container>
            <Row>
              <Col lg={12}>
                <Card className="overflow-hidden">
                  <Row className="justify-content-center g-0">
                    <AuthSlider />
                    <Col lg={6}>
                      <div className="p-lg-5 p-4">
                        <div className="mb-4">
                          <div className="avatar-lg mx-auto">
                            <div className="avatar-title bg-light text-primary display-5 rounded-circle">
                              <i className="ri-mail-line"></i>
                            </div>
                          </div>
                        </div>
                        <div className="text-muted text-center mx-lg-3">
                          <h4 className="">Create Password</h4>
                          <p>Please set your password</p>
                        </div>

                        <div className="mt-4">
                          <form onSubmit={onFormSubmit}>
                            {confirmPass && confirmPass ? (
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
                                  Register User Successfully and Your Redirect
                                  To Dashboard...
                                </Alert>
                              </>
                            ) : null}
                            {error && error ? (
                              <Alert
                                color="danger"
                                style={{
                                  padding: '8px 5%',
                                  textAlign: 'center',
                                }}
                              >
                                <div>
                                  <p>{errorMsg}</p>
                                </div>
                              </Alert>
                            ) : null}
                            <Row>
                              <div className="mb-3">
                                <label
                                  htmlFor="digit1-input"
                                  className="visually-hidden"
                                >
                                  Password
                                </label>
                                <input
                                  type="password"
                                  className="form-control form-control-lg bg-light border-light width"
                                  value={password}
                                  onChange={(e) =>
                                    setUserPassword(e.target.value)
                                  }
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
                          </form>
                        </div>

                        <div className="mt-5 text-center">
                          <p className="mb-0">
                            Didn't receive a code ?{' '}
                            <Link
                              to="/auth-pass-reset-cover"
                              className="fw-semibold text-primary text-decoration-underline"
                            >
                              Resend
                            </Link>{' '}
                          </p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CoverTwosVerify;
