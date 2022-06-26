import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
function Work (){
    return (
        <Container className = 'workContainer'>
            <h3>Work Experience</h3>
        <Row>
            <Col>
            <Card>
                <Card.Header>Indeed - 2021-2022</Card.Header>
                <Card.Body>
                    <Card.Title>GPC Operations Specialist</Card.Title>
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
                        Worked in direct communication with our clients to ensure that their needs
                        were met while remaining business focused. Customer retention and tier 3 
                        support. Workforce management twice a week--assessed priority of our diffeerent
                        contact cchannels and direct agent responses to best help the most clients.
                    </Card.Text>
                </Card.Body>
            </Card>
            </Col>
        </Row>
        <br />
        <Row>
            <Col>
            <Card>
                <Card.Header>Vernoux-Chevalier Family - 2016-2017</Card.Header>
                <Card.Body>
                    <Card.Title>Au Pair</Card.Title>
                    <Card.Text>
                        I 
                    </Card.Text>
                </Card.Body>
            </Card>
            </Col>
            <Col><Card>
                <Card.Header>More Fun Game Center - 2015-2016</Card.Header>
                <Card.Body>
                    <Card.Title>Sales Representative</Card.Title>
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