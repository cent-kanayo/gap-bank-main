import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardHeader, Col, Container, Form, Input, Label, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import classnames from "classnames";
import Flatpickr from "react-flatpickr";

import InstantTransfer from './Instant';
import TransferHistory from './History';

const Settings = () => {

    document.title="GAP Bank | Transfer";

    const [activeTab, setActiveTab] = useState("1");

    const tabChange = (tab) => {
        if (activeTab !== tab) setActiveTab(tab);
    };

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <Row>
                        <Col xl={12}>
                            <Nav className="nav-tabs-custom rounded card-header-tabs border-bottom-0"
                                role="tablist">
                                <NavItem>
                                    <NavLink
                                        className={classnames({ active: activeTab === "1" })}
                                        onClick={() => {
                                            tabChange("1");
                                        }}>
                                        <i className="fas fa-home"></i>
                                        Instant Transfer
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink to="#"
                                        className={classnames({ active: activeTab === "2" })}
                                        onClick={() => {
                                            tabChange("2");
                                        }}
                                        type="button">
                                        <i className="far fa-user"></i>
                                        History
                                    </NavLink>
                                </NavItem>
                            </Nav>

                            <TabContent activeTab={activeTab}>
                                <TabPane tabId="1">
                                    <InstantTransfer />
                                </TabPane>

                                <TabPane tabId="2">
                                    <TransferHistory />
                                </TabPane>
                            </TabContent>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default Settings;