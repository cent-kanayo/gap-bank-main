import React from 'react';
import { Slide } from 'react-awesome-reveal';
import { Link } from 'react-router-dom';
import {
  Card,
  CardBody,
  Col,
  Container,
  Row,
  UncontrolledTooltip,
} from 'reactstrap';

import Student from '../../assets/images/student.png';

const FindJob = () => {
  return (
    <React.Fragment>
      <section className="section">
        <Container>
          <Row
            className="align-items-center gy-4 justify-content-center"
            xs="1"
            lg="6"
          >
            <Col className="col-lg-6 order-2 order-lg-1">
              <Slide duration="1000" direction="left">
                <div className="mt-5 mt-lg-0">
                  {/* <h5 className="fs-12 text-uppercase text-success fw-semibold">
                  Hot Featured Company
                </h5> */}
                  <h1 className="mb-3 ff-secondary fw-bold text-capitalize lh-base">
                    Helping students and youth do more with{' '}
                    <span className="text-primary">ZERO</span> access banking.
                  </h1>
                  <p className="ff-secondary mb-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et.{' '}
                    <b>dolore magna aliqua. Ut enim</b> ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  </p>
                  {/* <p className="mb-4 ff-secondary">
                  A Content Writer is Link professional who writes
                  informative and engaging articles to help brands showcase
                  their products.
                </p> */}

                  <div className="mt-4">
                    <Link to="#" className="btn btn-primary rounded-pill">
                      Get Started{' '}
                      <i className="ri-arrow-right-line align-middle ms-1"></i>
                    </Link>
                  </div>
                </div>
              </Slide>
            </Col>
            <Col className="col-lg-6 col-sm-7 col-10 ms-lg-auto mx-auto order-1 order-lg-2">
              <Slide duration="1500" direction="right">
                <img src={Student} alt="" className="" />
              </Slide>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default FindJob;
