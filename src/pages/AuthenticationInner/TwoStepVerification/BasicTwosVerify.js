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
import { activate } from '../../../store/features/auth';

const BasicTwosVerify = () => {
  document.title =
    'Two Step Verification | Velzon - React Admin & Dashboard Template';

  const [otp, setOtp] = useState('');

  const dispatch = useDispatch();
  const history = useNavigate();

  const { error, user, isActivated } = useSelector((state) => state.account);

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
      setTimeout(() => history('/dashboard'), 3000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActivated]);
  return (
    <React.Fragment>
      <div className="auth-page-wrapper">
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
              Register User Successfully and Your Redirect To Dashboard...
            </Alert>
          </>
        ) : null}
        {error && error ? (
          <Alert color="danger">
            <div>
              {/* {registrationError} */}
              Email has been Register Before, Please Use Another Email
              Address...{' '}
            </div>
          </Alert>
        ) : null}
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
                      Premium Admin & Dashboard Template
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
                            <span className="fw-semibold">example@abc.com</span>
                          </p>
                        </div>

                        <Form onSubmit={onFormSubmit}>
                          <Row>
                            <Col className="col-3">
                              <div className="mb-3">
                                <label
                                  htmlFor="digit1-input"
                                  className="visually-hidden"
                                >
                                  Digit 1
                                </label>
                                <Input
                                  type="text"
                                  className="form-control form-control-lg bg-light border-light text-center"
                                  value={otp}
                                  onChange={(e) => setOtp(e.target.value)}
                                />
                              </div>
                            </Col>
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
