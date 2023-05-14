import React, { useEffect, useState } from 'react';
import {
  Row,
  Col,
  CardBody,
  Card,
  Alert,
  Container,
  Input,
  Label,
  Form,
  FormFeedback,
  Button,
} from 'reactstrap';

// Formik Validation

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// action
// import { registerUser, apiError, resetRegisterFlag } from '../../store/actions';

import { registerUser } from '../../store/features/auth';

//redux
import { useSelector, useDispatch } from 'react-redux';

import { Link, useNavigate } from 'react-router-dom';

//import images
import logoLight from '../../assets/images/logo-light.png';
import ParticlesAuth from '../AuthenticationInner/ParticlesAuth';

const Register = () => {
  const history = useNavigate();
  const dispatch = useDispatch();
  const [business, setBusinessName] = useState('');
  const [accountType, setAccountType] = useState('savings');
  const [accountCategory, setAccountCategory] = useState('personal');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isBusiness, setIsBusiness] = useState(false);

  const { error, success } = useSelector((state) => state.account);

  const onFormSubmit = (e) => {
    e.preventDefault();
    if (
      accountCategory === 'business' &&
      accountType === 'savings' &&
      (!email || !business || !accountType)
    ) {
      return;
    }
    if (accountCategory === 'personal' && (!email || !accountType)) {
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
  // useEffect(() => {
  //   dispatch(apiError(''));
  // }, [dispatch]);

  useEffect(() => {
    if (accountCategory === 'business') {
      setIsBusiness(true);
    } else {
      setIsBusiness(false);
    }
  }, [accountCategory]);

  useEffect(() => {
    if (success) {
      setTimeout(() => history('/auth-twostep-basic'), 3000);
    }

    // setTimeout(() => {
    //   dispatch(resetRegisterFlag());
    // }, 3000);
  }, [dispatch, success, error, history]);

  document.title = 'Basic SignUp | Velzon - React Admin & Dashboard Template';

  return (
    <React.Fragment>
      <ParticlesAuth>
        <div className="auth-page-content">
          <Container>
            <Row>
              <Col lg={12}>
                <div className="text-center mt-sm-5 mb-4 text-white-50">
                  <div>
                    <Link to="/" className="d-inline-block auth-logo">
                      <img src={logoLight} alt="" height="20" />
                    </Link>
                  </div>
                  {/* <p className="mt-3 fs-15 fw-medium">
                    Premium Admin & Dashboard Template
                  </p> */}
                </div>
              </Col>
            </Row>

            <Row className="justify-content-center">
              <Col md={8} lg={6} xl={5}>
                <Card className="mt-4">
                  <CardBody className="p-4">
                    <div className="text-center mt-2">
                      <h5 className="text-primary">Create New Account</h5>
                      <p className="text-muted">
                        Get your free GAP Finance account now
                      </p>
                    </div>
                    <div className="p-2 mt-4">
                      <Form
                        onSubmit={onFormSubmit}
                        className="needs-validation"
                      >
                        {success && success ? (
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
                          <Alert color="danger">
                            <div>
                              {/* {registrationError} */}
                              Email has been Register Before, Please Use Another
                              Email Address...{' '}
                            </div>
                          </Alert>
                        ) : null}
                        <div className="mb-3">
                          <Label htmlFor="useremail" className="form-label">
                            Business Name{' '}
                            {accountType === 'Business' && (
                              <span className="text-danger">*</span>
                            )}
                          </Label>
                          <Input
                            id="businessName"
                            name="businessName"
                            className="form-control"
                            placeholder="Enter business"
                            onChange={(e) => setBusinessName(e.target.value)}
                            value={business}
                          />
                        </div>
                        <div className="mb-3">
                          <Label htmlFor="useremail" className="form-label">
                            Account Category{' '}
                            <span className="text-danger">*</span>
                          </Label>
                          <select
                            value={accountCategory}
                            onChange={(e) => setAccountCategory(e.target.value)}
                          >
                            <option value="personal">Personal</option>
                            <option value="business">Business</option>
                          </select>
                        </div>
                        <div className="mb-3">
                          <Label htmlFor="useremail" className="form-label">
                            AccountType <span className="text-danger">*</span>
                          </Label>
                          <select value={accountType}>
                            <option value="savings">Savings</option>
                            <option value="current">Current</option>
                          </select>
                        </div>
                        <div className="mb-3">
                          <Label htmlFor="username" className="form-label">
                            Email <span className="text-danger">*</span>
                          </Label>
                          <Input
                            name="first_name"
                            type="email"
                            placeholder="Enter email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                          />
                        </div>
                        <div className="mb-3">
                          <Label htmlFor="userpassword" className="form-label">
                            Password <span className="text-danger">*</span>
                          </Label>
                          <Input
                            name="password"
                            type="password"
                            placeholder="Enter Password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                          />
                        </div>

                        <div className="mb-4">
                          <p className="mb-0 fs-12 text-muted fst-italic">
                            By registering you agree to the Velzon
                            <Link
                              to="#"
                              className="text-primary text-decoration-underline fst-normal fw-medium"
                            >
                              Terms of Use
                            </Link>
                          </p>
                        </div>
                        <div className="mt-4">
                          <button
                            className="btn btn-success w-100"
                            type="submit"
                          >
                            Sign Up
                          </button>
                        </div>
                        <div className="mt-4 text-center">
                          <div className="signin-other-title">
                            <h5 className="fs-13 mb-4 title text-muted">
                              Create account with
                            </h5>
                          </div>

                          <div>
                            <button
                              type="button"
                              className="btn btn-primary btn-icon waves-effect waves-light"
                            >
                              <i className="ri-facebook-fill fs-16"></i>
                            </button>{' '}
                            <button
                              type="button"
                              className="btn btn-danger btn-icon waves-effect waves-light"
                            >
                              <i className="ri-google-fill fs-16"></i>
                            </button>{' '}
                            <button
                              type="button"
                              className="btn btn-dark btn-icon waves-effect waves-light"
                            >
                              <i className="ri-github-fill fs-16"></i>
                            </button>{' '}
                            <button
                              type="button"
                              className="btn btn-info btn-icon waves-effect waves-light"
                            >
                              <i className="ri-twitter-fill fs-16"></i>
                            </button>
                          </div>
                        </div>
                      </Form>
                    </div>
                  </CardBody>
                </Card>
                <div className="mt-4 text-center">
                  <p className="mb-0">
                    Already have an account ?{' '}
                    <Link
                      to="/login"
                      className="fw-semibold text-primary text-decoration-underline"
                    >
                      {' '}
                      Signin{' '}
                    </Link>{' '}
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </ParticlesAuth>
    </React.Fragment>
  );
};

export default Register;
