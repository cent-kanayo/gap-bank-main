import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import { Fade } from 'react-awesome-reveal';

import img from '../../assets/images/landing/benefits.png';

const Benefits = () => {
  return (
    <React.Fragment>
      <section className="section">
        <Container>
          <Row className="align-items-center justify-content-right gy-4">
            <Col lg={8} className="order-2 order-lg-1">
              {/* text-muted */}

              <div className="">
                <h5 className="fs-12 text-uppercase text-primary">
                  --Benefits
                </h5>
                <h4 className="mb-3 fw-bold text-secondary">
                  Gap Bank, one app unlimited possibilities
                </h4>
                <div className="vstack gap-1">
                  <div className="d-flex">
                    <div className="flex-shrink-0 me-2">
                      <div className="avatar-xs">
                        <div className="avatar-title bg-transparent rounded-circle h4">
                          <i className="ri-check-fill fs-14"></i>
                        </div>
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <p className="mb-4 ff-secondary">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </p>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="flex-shrink-0 me-2">
                      <div className="avatar-xs">
                        <div
                          // text-success
                          className="avatar-title bg-transparent rounded-circle h4"
                        >
                          <i className="ri-check-fill fs-14"></i>
                        </div>
                      </div>
                    </div>
                    <div className="flex-grow-1">
                      <p className="mb-4 ff-secondary">
                        Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <Link to="#" className="btn btn-primary rounded-pill">
                    Read More{' '}
                    <i className="ri-arrow-right-line align-middle ms-1"></i>
                  </Link>
                </div>
              </div>
            </Col>

            <Col lg={4} sm={7} className="col-10 ms-auto order-1 order-lg-2">
              <div>
                <img src={img} alt="" className="img-fluid" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Benefits;
