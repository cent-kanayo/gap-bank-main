import React from 'react';
import { Zoom } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';

const Products = () => {
  return (
    <React.Fragment>
      <section className="section bg-light py-7" id="features">
        <div className="bg-overlay bg-overlay-pattern"></div>
        <Container>
          <Row className="justify-content-center">
            {/* <Col lg={8}>
                            <div className="text-center mb-5">
                                <h1 className="mb-3 ff-secondary fw-semibold lh-base">A Digital web design studio creating modern & engaging online</h1>
                                <p className="text-muted">To achieve this, it would be necessary to have uniform grammar,
                                    pronunciation and more common words. If several languages coalesce the grammar</p>
                            </div>
                        </Col> */}
            <Col lg={5} sm={7} className="mx-auto">
              <div>
                <h3 className="mb-3 fw-bold text-secondary">
                  Why our product are different.
                </h3>
                <p className="mb-4 ff-secondary fs-16">
                  We stand out for their convenience, cost savings, and enhanced
                  security. Customers can manage their finances from anywhere
                  using their computer or mobile device, and often enjoy lower
                  fees and higher interest rates. With advanced security
                  features, we provide a safe and secure option for banking.
                </p>
              </div>
            </Col>
            <Col lg={5}>
              <div className="">
                <Row className="pt-3">
                  <Col className="col-3">
                    <Zoom right>
                      <div className="text-center">
                        <h2 className="text-primary">10m</h2>
                        <p className="text-muted fs-13">Total user</p>
                      </div>
                    </Zoom>
                  </Col>
                  <Col className="col-3">
                    <Zoom right>
                      <div className="text-center">
                        <h2 className="text-primary">25+</h2>
                        <p className="text-muted fs-13">Total features</p>
                      </div>
                    </Zoom>
                  </Col>
                  <Col className="col-4">
                    <Zoom right>
                      <div className="text-center">
                        <h2 className="text-primary">50k</h2>
                        <p className="text-muted fs-13">Support Staff</p>
                      </div>
                    </Zoom>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>

          {/* <Row className="align-items-center gy-4">
                        
                    </Row> */}

          <Row className="g-3 mt-4">
            <Col lg={4}>
              <div className="d-flex p-3">
                <div className="flex-shrink-0 me-3">
                  <div className="avatar-sm icon-effect">
                    <div className="avatar-title bg-transparent text-primary rounded-circle">
                      <i className="ri-pencil-ruler-2-line fs-36"></i>
                    </div>
                  </div>
                </div>
                <div className="flex-grow-1">
                  <h5 className="fs-18">Withdrawals</h5>
                  <p className="my-3 ff-secondary">
                    We make withdrawals convenient and fast.
                  </p>
                  {/* <div>
                                        <Link to="#" className="fs-13 fw-medium">Learn More <i className="ri-arrow-right-s-line align-bottom"></i></Link>
                                    </div> */}
                </div>
              </div>
            </Col>

            <Col lg={4}>
              <div className="d-flex p-3">
                <div className="flex-shrink-0 me-3">
                  <div className="avatar-sm icon-effect">
                    <div className="avatar-title bg-transparent rounded-circle text-primary">
                      <i className="ri-palette-line fs-36"></i>
                    </div>
                  </div>
                </div>
                <div className="flex-grow-1">
                  <h5 className="fs-18">Fund Transfer</h5>
                  <p className="my-3 ff-secondary">
                    Send money to loved ones or business transactions in a
                    heartbeat.
                  </p>
                  {/* <div>
                                        <Link to="#" className="fs-13 fw-medium">Learn More <i className="ri-arrow-right-s-line align-bottom"></i></Link>
                                    </div> */}
                </div>
              </div>
            </Col>

            <Col lg={4}>
              <div className="d-flex p-3">
                <div className="flex-shrink-0 me-3">
                  <div className="avatar-sm icon-effect">
                    <div className="avatar-title bg-transparent text-primary rounded-circle">
                      <i className="ri-lightbulb-flash-line fs-36"></i>
                    </div>
                  </div>
                </div>
                <div className="flex-grow-1">
                  <h5 className="fs-18">Investment</h5>
                  <p className="my-3 ff-secondary">
                    Make a passive income from dividends paid directly into your
                    trading account
                  </p>
                  {/* <div>
                                        <Link to="#" className="fs-13 fw-medium">Learn More <i className="ri-arrow-right-s-line align-bottom"></i></Link>
                                    </div> */}
                </div>
              </div>
            </Col>

            <Col lg={4}>
              <div className="d-flex p-3">
                <div className="flex-shrink-0 me-3">
                  <div className="avatar-sm icon-effect">
                    <div className="avatar-title bg-transparent text-primary rounded-circle">
                      <i className="ri-customer-service-line fs-36"></i>
                    </div>
                  </div>
                </div>
                <div className="flex-grow-1">
                  <h5 className="fs-18">Business Loans</h5>
                  <p className="my-3 ff-secondary">
                    Access business loans easily when you bank with us
                  </p>
                  {/* <div>
                                        <Link to="#" className="fs-13 fw-medium">Learn More <i className="ri-arrow-right-s-line align-bottom"></i></Link>
                                    </div> */}
                </div>
              </div>
            </Col>

            <Col lg={4}>
              <div className="d-flex p-3">
                <div className="flex-shrink-0 me-3">
                  <div className="avatar-sm icon-effect">
                    <div className="avatar-title bg-transparent text-primary rounded-circle">
                      <i className="ri-stack-line fs-36"></i>
                    </div>
                  </div>
                </div>
                <div className="flex-grow-1">
                  <h5 className="fs-18">Bills Payment</h5>
                  <p className="my-3 ff-secondary">
                    pay bills instantly with our intuitive dashboard
                  </p>
                  {/* <div>
                                        <Link to="#" className="fs-13 fw-medium">Learn More <i className="ri-arrow-right-s-line align-bottom"></i></Link>
                                    </div> */}
                </div>
              </div>
            </Col>

            <Col lg={4}>
              <div className="d-flex p-3">
                <div className="flex-shrink-0 me-3">
                  <div className="avatar-sm icon-effect">
                    <div className="avatar-title bg-transparent text-primary rounded-circle">
                      <i className="ri-settings-2-line fs-36"></i>
                    </div>
                  </div>
                </div>
                <div className="flex-grow-1">
                  <h5 className="fs-18">Savings</h5>
                  <p className="my-3 ff-secondary">
                    keeping money away for the future is smart but it takes
                    discipline….we can help
                  </p>
                  {/* <div>
                                        <Link to="#" className="fs-13 fw-medium">Learn More <i className="ri-arrow-right-s-line align-bottom"></i></Link>
                                    </div> */}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Products;
