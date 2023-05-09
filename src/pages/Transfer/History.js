import React, { useState } from 'react';
import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap';
import { TransactionsTable } from './Components';

const TransferHistory = () => {
    document.title = "Widgets | Velzon - React Admin & Dashboard Template";

    return (
        <React.Fragment>
            <Row>
                <Col xl={12}>
                    <Card className="shadow-none">
                        <CardHeader>
                            <h5 className="card-title mb-0">Transactions</h5>
                        </CardHeader>
                        <CardBody>
                            <TransactionsTable style={{ width: "100%" }} />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default TransferHistory;
