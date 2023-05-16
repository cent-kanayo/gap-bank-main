import React, { useEffect } from 'react';

import {
  Alert,
  Button,
  Card,
  CardBody,
  CardHeader,
  Container,
  Col,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  ListGroup,
  ListGroupItem,
  Progress,
  Row,
  UncontrolledDropdown,
} from 'reactstrap';
import { Link } from 'react-router-dom';

import { StoreVisitsCharts } from '../Components/Common/DashboardCharts';
import { TransactionsTable } from './Transfer/Components';
import { useSelector } from 'react-redux';

const Dashboard = () => {
  document.title = 'GAP Finance | Account';

  const { user } = useSelector((state) => state.auth);
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Row>
            <Col xxl={4} xl={4}>
              {/* <Card className="card-height-100">
                        <CardBody> */}
              <div
                className="mx-auto" //style={{ maxWidth: "380px" }}
              >
                <div className="text-bg-info bg-gradient p-4 rounded-3 mb-3">
                  <div className="d-flex">
                    <div className="flex-grow-1">
                      <i className="bx bx-chip h1 text-warning"></i>
                    </div>
                    <div className="flex-shrink-0">
                      <i className="bx bxl-visa display-2 mt-n3"></i>
                    </div>
                  </div>
                  <div className="card-number fs-20" id="card-num-elem">
                    XXXX XXXX XXXX XXXX
                  </div>

                  <Row className="mt-4">
                    <Col xs={4}>
                      <div>
                        <div className="text-white-50">Card Holder</div>
                        <div id="card-holder-elem" className="fw-medium fs-14">
                          Full Name
                        </div>
                      </div>
                    </Col>
                    <Col xs={4}>
                      <div className="expiry">
                        <div className="text-white-50">Expires</div>
                        <div className="fw-medium fs-14">
                          <span id="expiry-month-elem">00</span>/
                          <span id="expiry-year-elem">0000</span>
                        </div>
                      </div>
                    </Col>
                    <Col xs={4}>
                      <div>
                        <div className="text-white-50">CVC</div>
                        <div id="cvc-elem" className="fw-medium fs-14">
                          ---
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>

              <Card className="overflow-hidden shadow-none shadow-none">
                <CardBody className="bg-soft-danger">
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0">
                      <div className="avatar-sm">
                        <div className="avatar-title bg-soft-danger text-danger rounded-circle fs-17">
                          <i className="ri-gift-line"></i>
                        </div>
                      </div>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h6 className="fs-16">Invite your friends to GAP Bank</h6>
                      <p className="text-muted mb-0">
                        Nor again is there anyone who loves or pursues or
                        desires to obtain pain of itself, because it is pain,
                        but because occasionally.
                      </p>
                    </div>
                  </div>
                  <div className="mt-3 text-end">
                    <Link to="#" className="btn btn-danger">
                      Invite Friends
                    </Link>
                  </div>
                </CardBody>
              </Card>

              <Card className="shadow-none">
                <CardHeader className="align-items-center d-flex">
                  <h4 className="card-title mb-0 flex-grow-1">
                    Store Visits by Source
                  </h4>
                  <div className="flex-shrink-0">
                    <UncontrolledDropdown
                      className="card-header-dropdown"
                      direction="start"
                    >
                      <DropdownToggle
                        tag="a"
                        className="text-reset dropdown-btn"
                        role="button"
                      >
                        <span className="text-muted">
                          Report<i className="mdi mdi-chevron-down ms-1"></i>
                        </span>
                      </DropdownToggle>
                      <DropdownMenu className="dropdown-menu-end">
                        <DropdownItem>Download Report</DropdownItem>
                        <DropdownItem>Export</DropdownItem>
                        <DropdownItem>Import</DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </div>
                </CardHeader>

                <div className="card-body">
                  <div dir="ltr">
                    <StoreVisitsCharts dataColors='["--vz-primary", "--vz-success", "--vz-warning", "--vz-danger", "--vz-info"]' />
                  </div>
                </div>
              </Card>
            </Col>

            <Col xxl={8} xl={8}>
              <Row>
                <Col sm={12}>
                  <h5 className="mb-3 fw-semibold">Quick Actions</h5>
                </Col>
                <Col md={4} sm={12}>
                  <div className="form-check card-radio">
                    <Link to={'/transfer'}>
                      <label className="form-check-label">
                        <div className="d-flex align-items-center">
                          <div className="flex-shrink-0">
                            <div className="avatar-xs">
                              <div className="avatar-title bg-soft-success text-success fs-18 rounded">
                                <i className="ri-visa-fill"></i>
                              </div>
                            </div>
                          </div>
                          <div className="flex-grow-1 ms-3">
                            <b className="pay-amount">Transfer</b>
                            <h6 className="mb-1 fw-normal">Instant transfer</h6>
                          </div>
                        </div>
                      </label>
                    </Link>
                  </div>
                </Col>
                <Col md={4} sm={12}>
                  <div className="form-check card-radio">
                    <label className="form-check-label">
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0">
                          <div className="avatar-xs">
                            <div className="avatar-title bg-soft-info text-info fs-18 rounded">
                              <i className="ri-bank-card-2-line"></i>
                            </div>
                          </div>
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <b className="pay-amount">Buy Airtime</b>
                          <h6 className="mb-1 fw-normal">Instant top-up</h6>
                        </div>
                      </div>
                    </label>
                  </div>
                </Col>
                <Col md={4} sm={12}>
                  <div className="form-check card-radio">
                    <label className="form-check-label">
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0">
                          <div className="avatar-xs">
                            <div className="avatar-title bg-soft-danger text-danger fs-18 rounded">
                              <i className="ri-mastercard-line"></i>
                            </div>
                          </div>
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <b className="pay-amount">Pay Bills</b>
                          <h6 className="mb-1 fw-normal">Pay your bills</h6>
                        </div>
                      </div>
                    </label>
                  </div>
                </Col>
              </Row>
              <Card className="shadow-none mt-3">
                <CardHeader>
                  <h5 className="card-title mb-0">Transactions</h5>
                </CardHeader>
                <CardBody>
                  <TransactionsTable style={{ width: '100%' }} />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
