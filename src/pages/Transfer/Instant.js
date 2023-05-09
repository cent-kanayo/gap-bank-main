import React, { useState } from 'react';
import { Card, CardBody, CardHeader, Col, Container, Input, Label, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';

import dummyUser from "../../assets/images/users/user-dummy-img.jpg";
import logoDark from "../../assets/images/logo-dark.png";

import classnames from "classnames";
import BreadCrumb from "../../Components/Common/BreadCrumb";
import { loadAnimation } from "lottie-web";
import { defineLordIconElement } from "lord-icon-element";
// register lottie and define custom element
defineLordIconElement(loadAnimation);

const InstantTransfer = () => {
    document.title = "Widgets | Velzon - React Admin & Dashboard Template";

    const [activeTab, setactiveTab] = useState(1);
    const [activeArrowTab, setactiveArrowTab] = useState(4);
    const [activeVerticalTab, setactiveVerticalTab] = useState(1);
    const [progressbarvalue, setprogressbarvalue] = useState(0);
    const [passedSteps, setPassedSteps] = useState([1]);
    const [passedarrowSteps, setPassedarrowSteps] = useState([1]);
    const [passedverticalSteps, setPassedverticalSteps] = useState([1]);

    function toggleTab(tab, value) {
        if (activeTab !== tab) {
            var modifiedSteps = [...passedSteps, tab];

            if (tab >= 1 && tab <= 4) {
                setactiveTab(tab);
                setPassedSteps(modifiedSteps);
            }
        }
        setprogressbarvalue(value);
    }

    function toggleArrowTab(tab) {
        if (activeArrowTab !== tab) {
            var modifiedSteps = [...passedarrowSteps, tab];

            if (tab >= 4 && tab <= 7) {
                setactiveArrowTab(tab);
                setPassedarrowSteps(modifiedSteps);
            }
        }
    }

    function toggleVerticalTab(tab) {
        if (activeVerticalTab !== tab) {
            var modifiedSteps = [...passedverticalSteps, tab];

            if (tab >= 1 && tab <= 4) {
                setactiveVerticalTab(tab);
                setPassedverticalSteps(modifiedSteps);
            }
        }
    }

    return (
        <React.Fragment>
            {/* <div className="page-content">
                <Container fluid> */}
            <Row>
                <Col xl={12}>
                    <Card className="shadow-none">
                        {/* <CardHeader>
                                    <h4 className="card-title mb-0">Transfer</h4>
                                </CardHeader> */}
                        <CardBody>
                            <form className="vertical-navs-step form-steps">
                                <Row className="">
                                    <Col lg={3}>
                                        <Nav
                                            className="flex-column custom-nav nav-pills"
                                        >
                                            <NavItem>
                                                <NavLink
                                                    href="#"
                                                    className={
                                                        (classnames({
                                                            active: activeVerticalTab === 1,
                                                            done: (activeVerticalTab <= 4 && activeVerticalTab > 1)
                                                        }))
                                                    }
                                                // onClick={() => {
                                                //     toggleVerticalTab(1);
                                                // }}
                                                >
                                                    <span className="step-title me-2">
                                                        <i className="ri-close-circle-fill step-icon me-2"></i>
                                                        Step 1
                                                    </span>
                                                    Account
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    href="#"
                                                    className={
                                                        (classnames({
                                                            active: activeVerticalTab === 2,
                                                            done: (activeVerticalTab <= 4 && activeVerticalTab >= 2)
                                                        }))
                                                    }
                                                // onClick={() => {
                                                //     toggleVerticalTab(2);
                                                // }}
                                                >
                                                    <span className="step-title me-2">
                                                        <i className="ri-close-circle-fill step-icon me-2"></i>
                                                        Step 2
                                                    </span>
                                                    Amount
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    href="#"
                                                    className={classnames({
                                                        active: activeVerticalTab === 3,
                                                        done: (activeVerticalTab <= 4 && activeVerticalTab >= 3)
                                                    })}
                                                // onClick={() => {
                                                //     toggleVerticalTab(3);
                                                // }}
                                                >
                                                    <span className="step-title me-2">
                                                        <i className="ri-close-circle-fill step-icon me-2"></i>
                                                        Step 3
                                                    </span>
                                                    Summary
                                                </NavLink>
                                            </NavItem>
                                            <NavItem>
                                                <NavLink
                                                    href="#"
                                                    className={classnames({
                                                        active: activeVerticalTab === 4,
                                                        done: (activeVerticalTab <= 4 && activeVerticalTab >= 4)
                                                    })}
                                                // onClick={() => {
                                                //     toggleVerticalTab(4);
                                                // }}
                                                >
                                                    <span className="step-title me-2">
                                                        <i className="ri-close-circle-fill step-icon me-2"></i>
                                                        Step 4
                                                    </span>
                                                    Finish
                                                </NavLink>
                                            </NavItem>
                                        </Nav>
                                    </Col>
                                    <Col lg={9}>
                                        <div className="px-lg-4">
                                            <TabContent activeTab={activeVerticalTab}>
                                                <TabPane tabId={1}>
                                                    <Row>
                                                        <Col lg={7}>
                                                            <div>
                                                                <h5>Account Number</h5>
                                                                <p className="text-muted">
                                                                    Enter the 10 Digit Bank account number
                                                                </p>
                                                            </div>

                                                            <div>
                                                                <Row className="g-3">
                                                                    <Col sm={12}>
                                                                        <Input
                                                                            type="text"
                                                                            className="form-control"
                                                                            id="accountNumber"
                                                                            placeholder="Enter Account Number"
                                                                            defaultValue=""
                                                                        />
                                                                    </Col>
                                                                </Row>
                                                            </div>

                                                            <div className="d-flex align-items-start gap-3 mt-4">
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-success btn-label right ms-auto nexttab nexttab"
                                                                    onClick={() => {
                                                                        toggleVerticalTab(activeVerticalTab + 1);
                                                                    }}
                                                                >
                                                                    <i className="ri-arrow-right-line label-icon align-middle fs-16 ms-2"></i>
                                                                    Proceed
                                                                </button>
                                                            </div>
                                                        </Col>

                                                        <Col lg={5}>
                                                            <div className="d-flex justify-content-between align-items-center mb-3">
                                                                <h5 className="fs-14 text-primary mb-0">
                                                                    Beneficiaries
                                                                </h5>
                                                            </div>
                                                            <ul className="list-group mb-3">
                                                                <li className="list-group-item d-flex justify-content-between lh-sm">
                                                                    <div>
                                                                        <h6 className="my-0">Kay Michael</h6>
                                                                        <small className="text-muted">
                                                                            First Bank of Nigeria 1063801000
                                                                        </small>
                                                                    </div>
                                                                </li>
                                                                <li className="list-group-item d-flex justify-content-between lh-sm bg-light">
                                                                    <div>
                                                                        <h6 className="my-0">Kay Michael</h6>
                                                                        <small className="text-muted">
                                                                            First Bank of Nigeria 1063801000
                                                                        </small>
                                                                    </div>
                                                                </li>
                                                                <li className="list-group-item d-flex justify-content-between lh-sm">
                                                                    <div>
                                                                        <h6 className="my-0">Kay Michael</h6>
                                                                        <small className="text-muted">
                                                                            First Bank of Nigeria 1063801000
                                                                        </small>
                                                                    </div>
                                                                </li>
                                                                <li className="list-group-item d-flex justify-content-between lh-sm">
                                                                    <div>
                                                                        <h6 className="my-0">Kay Michael</h6>
                                                                        <small className="text-muted">
                                                                            First Bank of Nigeria 1063801000
                                                                        </small>
                                                                    </div>
                                                                </li>
                                                                <li className="list-group-item d-flex justify-content-between lh-sm">
                                                                    <div>
                                                                        <h6 className="my-0">Kay Michael</h6>
                                                                        <small className="text-muted">
                                                                            First Bank of Nigeria 1063801000
                                                                        </small>
                                                                    </div>
                                                                </li>
                                                                <li className="list-group-item d-flex justify-content-between lh-sm">
                                                                    <div>
                                                                        <h6 className="my-0">Kay Michael</h6>
                                                                        <small className="text-muted">
                                                                            First Bank of Nigeria 1063801000
                                                                        </small>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </Col>
                                                    </Row>
                                                </TabPane>

                                                <TabPane tabId={2}>
                                                    <Row>
                                                        <Col lg={7}>
                                                            <div>
                                                                <h5>Amount</h5>
                                                                {/* <p className="text-muted">
                                                                    Fill all information below
                                                                </p> */}
                                                            </div>

                                                            <div>
                                                                <div className="mt-4">
                                                                    <Label
                                                                        className="form-label fw-normal">
                                                                        Receiver
                                                                    </Label>
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
                                                                                    <b className="pay-amount">John Smith Bay</b>
                                                                                    <h6 className="mb-1 fw-normal">First Bank of Nigeria 1063801000</h6>
                                                                                </div>
                                                                            </div>
                                                                        </label>
                                                                    </div>
                                                                </div>

                                                                <div className="mt-3">
                                                                    <Label
                                                                        htmlFor="amount"
                                                                        className="form-label fw-normal">
                                                                        Amount
                                                                    </Label>
                                                                    <Input
                                                                        type="number"
                                                                        className="form-control"
                                                                        id="amount"
                                                                        placeholder="0.00"
                                                                    />
                                                                </div>

                                                                <div className="mt-3">
                                                                    <Label
                                                                        className="form-label fw-normal"
                                                                        htmlFor="narration-input">
                                                                        Narrattion
                                                                    </Label>
                                                                    <Input
                                                                        type="textarea"
                                                                        className="form-control"
                                                                        placeholder="Enter Narration"
                                                                        id="narration-input"
                                                                        rows="3"
                                                                    ></Input>
                                                                </div>
                                                            </div>
                                                            <div className="d-flex align-items-start gap-3 mt-4">
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-light btn-label previestab"
                                                                    onClick={() => {
                                                                        toggleVerticalTab(activeVerticalTab - 1);
                                                                    }}
                                                                >
                                                                    <i className="ri-arrow-left-line label-icon align-middle fs-16 me-2"></i>{" "}
                                                                    Back
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-success btn-label right ms-auto nexttab"
                                                                    onClick={() => {
                                                                        toggleVerticalTab(activeVerticalTab + 1);
                                                                    }}
                                                                >
                                                                    <i className="ri-arrow-right-line label-icon align-middle fs-16 ms-2"></i>
                                                                    Next
                                                                </button>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </TabPane>

                                                <TabPane tabId={3}>
                                                    <Row>
                                                        <Col lg={7}>
                                                            <div>
                                                                <h5>Summary</h5>
                                                                <p className="text-muted">
                                                                    Kindly confirm the transfer details
                                                                </p>
                                                            </div>

                                                            <div>
                                                                <div className="my-3">
                                                                    <ul className="list-group mb-3">
                                                                        <li className="list-group-item d-flex justify-content-between lh-sm bg-light">
                                                                            <h6 className="my-0">Transfer Details</h6>
                                                                        </li>
                                                                        <li className="list-group-item lh-sm bg-light">
                                                                            <div className="d-flex justify-content-between my-1">
                                                                                <h6 className="fw-normal">Amount:</h6>
                                                                                <span className="text-muted fw-semibold">N21,000.00</span>
                                                                            </div>
                                                                            <div className="d-flex justify-content-between my-1">
                                                                                <h6 className="fw-normal">Fees:</h6>
                                                                                <span className="text-muted fw-semibold">N10.00</span>
                                                                            </div>
                                                                        </li>
                                                                        <li className="list-group-item d-flex justify-content-between lh-sm bg-light">
                                                                            <h6 className="fw-normal my-0">Total Debit</h6>
                                                                            <span className="fw-semibold">N21,010.00</span>
                                                                        </li>
                                                                    </ul>
                                                                </div>

                                                                <div className="">
                                                                    <Label
                                                                        className="form-label fw-normal">
                                                                        Beneficiary Details
                                                                    </Label>
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
                                                                                    <b className="pay-amount">John Smith Bay</b>
                                                                                    <h6 className="mb-1 fw-normal">First Bank of Nigeria 1063801000</h6>
                                                                                </div>
                                                                            </div>
                                                                        </label>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="d-flex align-items-start gap-3 mt-4">
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-light btn-label previestab"
                                                                    onClick={() => {
                                                                        toggleVerticalTab(activeVerticalTab - 1);
                                                                    }}
                                                                >
                                                                    <i className="ri-arrow-left-line label-icon align-middle fs-16 me-2"></i>{" "}
                                                                    Back
                                                                </button>
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-success btn-label right ms-auto nexttab"
                                                                    onClick={() => {
                                                                        toggleVerticalTab(activeVerticalTab + 1);
                                                                    }}
                                                                >
                                                                    <i className="ri-arrow-right-line label-icon align-middle fs-16 ms-2"></i>{" "}
                                                                    Transfer
                                                                </button>
                                                            </div>
                                                        </Col>
                                                    </Row>
                                                </TabPane>

                                                <TabPane tabId={4}>
                                                    <div className="text-center pt-4 pb-2">
                                                        <div className="mb-4">
                                                            <lord-icon
                                                                src="https://cdn.lordicon.com/lupuorrc.json"
                                                                trigger="loop"
                                                                colors="primary:#0ab39c,secondary:#405189"
                                                                style={{ width: "120px", height: "120px" }}
                                                            ></lord-icon>
                                                        </div>
                                                        <h5>Transfer Successful</h5>
                                                        <p className="text-muted">
                                                            Your transfer request was completed Successfully.
                                                        </p>
                                                    </div>
                                                </TabPane>
                                            </TabContent>
                                        </div>
                                    </Col>
                                </Row>
                            </form>
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            {/* </Container>
            </div> */}
        </React.Fragment>
    );
};

export default InstantTransfer;
