
import Container from 'react-bootstrap/Container'
import React from 'react';
import Accordion from 'react-bootstrap/Accordion'
import { ListGroup, Row, Col } from 'react-bootstrap';
function Skills(){
    return(
        <Container className="workContainer">
            <Row>
                <Col md={6}>
            <h3>Languages</h3>
            <ListGroup>
            <ListGroup.Item>
                    Javascript
                </ListGroup.Item>
                <ListGroup.Item>
                    HTML 5/CSS
                </ListGroup.Item>
                <ListGroup.Item >
                    Java
                </ListGroup.Item>
                <ListGroup.Item >
                    PHP
                </ListGroup.Item>
                <ListGroup.Item>
                    C#
                </ListGroup.Item>
            </ListGroup>
            </Col>
            <Col md={6}>
            <h3>Skills</h3>
            <ListGroup>
            <ListGroup.Item>
                    Jira
                </ListGroup.Item>
                <ListGroup.Item>
                    Salesforce
                </ListGroup.Item>
                <ListGroup.Item >
                    Zendesk
                </ListGroup.Item>
                <ListGroup.Item >
                    Customer Service
                </ListGroup.Item>
                <ListGroup.Item >
                    Call Management
                </ListGroup.Item>
            </ListGroup>
            </Col>
            </Row>
            </Container>
    );
}
export default Skills;