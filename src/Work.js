import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
function Work (){
    return (
        <Container className = 'workContainer'>
        <Row>
            <Col>
            <Card>
                <Card.Header>Indeed - 2021-2022</Card.Header>
                <Card.Body>
                    <Card.Title>GPC Product Specialist</Card.Title>
                    <Card.Text>
                        I did stuff and they paid me for it. Which was rad.
                    </Card.Text>
                </Card.Body>
            </Card>
            </Col>
            <Col><Card>
                <Card.Header>Stitch Fix - 2017-2021</Card.Header>
                <Card.Body>
                    <Card.Title>Agent III</Card.Title>
                    <Card.Text>
                        I did stuff and they paid me for it. Which was rad.
                    </Card.Text>
                </Card.Body>
            </Card>
            </Col>
        </Row>
        </Container>
    );
}
export default Work;