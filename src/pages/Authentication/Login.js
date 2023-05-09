import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Col, Container, Input, Label, Row, Button, CardBody } from 'reactstrap';
import CountUp from "react-countup";

import img from "../../assets/images/auth-one.png";

const Login = () => {

    document.title = "GAP Bank | Signin";

    return (
        <React.Fragment>
            <div className="auth-page-wrapper auth-bg-cover py-5 d-flex justify-content-center align-items-center min-vh-100">
                <div className="bg-overlay"></div>
                <div className="auth-page-content overflow-hidden pt-lg-5">
                    <Container>
                        <Row>
                            <Col lg={12}>
                                <div className="overflow-hidden">
                                    <Row className="gx-2 align-items-center justify-content-center">
                                        <Col lg={5} sm={7} className="">
                                            <div>
                                                <Card className="card-animate card-bg-fill p-0 rounded shadow-lg inquiry-box">
                                                    <CardBody>
                                                        <div className="d-flex align-items-center">
                                                            <p className="m-0 ml-3">Outward Transfer</p>{" "}
                                                            <i className="ri-arrow-right-up-line fs-16 text-secondary"></i>
                                                        </div>
                                                        <div className="d-flex align-items-end justify-content-between my-2">
                                                            <h4 className="fs-22 fw-semibold ff-secondary mb-0">
                                                                <span className="counter-value" data-target="25000.00">
                                                                    <CountUp
                                                                        start={0}
                                                                        prefix="N"
                                                                        suffix=""
                                                                        separator=","
                                                                        end="25000"
                                                                        decimals={0}
                                                                        duration={4}
                                                                    />
                                                                </span>
                                                            </h4>
                                                        </div>
                                                        <div className="d-flex align-items-center">
                                                            <i className="fs-13 ri-checkbox-circle-fill text-success"></i>{" "}
                                                            <p className="m-0 fs-13">Transaction Successful</p>
                                                        </div>
                                                    </CardBody>
                                                </Card>
                                                <img src={img} alt="" className="img-fluid" />
                                            </div>
                                        </Col>
                                        <Col lg={4}>
                                            <Card className="px-4 py-5">
                                                <div>
                                                    <h5 className="text-primary fw-bold">Sign in to Gap Bank</h5>
                                                </div>

                                                <div className="mt-4">
                                                    <p className="mb-0 fw-medium fs-16">New to Gap Bank? <a href="/#" className="fw-semibold text-primary text-decoration-underline"> Create an account</a> </p>
                                                </div>

                                                <div className="mt-5">
                                                    <form action="/">
                                                        <div className="mb-3">
                                                            <Label htmlFor="email" className="form-label">Your Email*</Label>
                                                            <Input
                                                                id="email"
                                                                name="email"
                                                                className="form-control"
                                                                placeholder="example@mail.com"
                                                                type="email"
                                                            // onChange={validation.handleChange}
                                                            // onBlur={validation.handleBlur}
                                                            // value={validation.values.email || ""}
                                                            // invalid={
                                                            //     validation.touched.email && validation.errors.email ? true : false
                                                            // }
                                                            />
                                                        </div>

                                                        <div className="mb-3">
                                                            <Label className="form-label" htmlFor="password-input">Your Password*</Label>
                                                            <div className="position-relative auth-pass-inputgroup mb-3">
                                                                <Input type="password" className="form-control pe-5 password-input fw-bold" placeholder="........." id="password-input" />
                                                                <button className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted password-addon" type="button" id="password-addon"><i className="ri-eye-fill align-middle"></i></button>
                                                            </div>
                                                        </div>

                                                        <div className="my-2">
                                                            <Link to="#" className="">Forgot password?</Link>
                                                        </div>

                                                        <div className="mt-5">
                                                            <Button color="primary" className="w-100 rounded-pill" type="submit">Sign In</Button>
                                                        </div>

                                                    </form>
                                                </div>


                                            </Card>
                                        </Col>

                                    </Row>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

            </div>
        </React.Fragment>
    );
};

export default Login;