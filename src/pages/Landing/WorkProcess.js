import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Fade, Zoom } from 'react-awesome-reveal';
// Import Images
import processArrow from '../../assets/images/landing/process-arrow-img.png';
import './Home.css';

const WorkProcess = () => {
  return (
    <React.Fragment>
      <section className="section">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="text-center mb-1">
                <h3 className="mb-3 fw-bold text-primary how-it">
                  How it works
                </h3>
                {/* <p className="mb-4 ff-secondary para">
                  In an ideal world this website wouldn’t exist, a client would
                  acknowledge the importance of having web copy before the Proin
                  vitae ipsum vel ex finibus semper design starts.
                </p> */}
              </div>
            </Col>
          </Row>

          <Row className="text-center">
            <Col lg={4}>
              <Zoom right>
                <div className="process-card mt-4">
                  <div className="process-arrow-img d-none d-lg-block">
                    <img src={processArrow} alt="" className="img-fluid" />
                  </div>
                  <div className="avatar-sm icon-effect mx-auto mb-4">
                    <div className="avatar-title bg-transparent text-primary rounded-circle h1">
                      <i className="ri-quill-pen-line"></i>
                    </div>
                  </div>

                  <h4 className="fw-bold fs-18 text-secondary para">
                    Create an account
                  </h4>
                  <p className="ff-secondary para1">
                    Register yourself as a GAP Finance customer. Create either a
                    Personal or Business account.
                  </p>
                </div>
              </Zoom>
            </Col>

            <Col lg={4}>
              <Zoom right>
                <div className="process-card mt-4">
                  <div className="process-arrow-img d-none d-lg-block">
                    <img src={processArrow} alt="" className="img-fluid" />
                  </div>
                  <div className="avatar-sm icon-effect mx-auto mb-4">
                    <div className="avatar-title bg-transparent text-primary rounded-circle h1">
                      <i className="ri-user-follow-line"></i>
                    </div>
                  </div>

                  <h4 className="fw-bold fs-18 text-secondary para">Verify</h4>
                  <p className="ff-secondary para1">
                    In order to protect your account it is required you verify
                    the account.
                  </p>
                </div>
              </Zoom>
            </Col>

            <Col lg={4}>
              <Zoom right>
                <div className="process-card mt-4">
                  <div className="avatar-sm icon-effect mx-auto mb-4">
                    <div className="avatar-title bg-transparent text-primary rounded-circle h1">
                      <i className="ri-book-mark-line"></i>
                    </div>
                  </div>

                  <h4 className="fw-bold fs-18 text-secondary para">Enjoy</h4>
                  <p className="ff-secondary para1">
                    Start enjoying our services. From our virtual cards to loans
                    to bills payment to investments
                  </p>
                </div>
              </Zoom>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default WorkProcess;
