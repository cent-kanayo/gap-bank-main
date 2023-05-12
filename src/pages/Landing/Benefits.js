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
                  Gap Finance, one app unlimited possibilities
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
                        Our Customers can have peace of mind knowing that their
                        personal and financial information is secure with their
                        online bank
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
                        Our Customers can have peace of mind knowing that their
                        personal and financial information is secure with their
                        online bank
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
