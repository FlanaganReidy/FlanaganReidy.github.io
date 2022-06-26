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
                        I came onto a team that was in flux after there was some staffing changes and quickly rose to a position of prominence. I trained multiple classes of new hires and brought them up to production quickly. I have an eye for detail that was exemplified by my work within quality control for the products that I supported. In addition, I created reports using Jira and Salesforce to express complex internal concepts in more concise ways that sales could share with the client.
                    </Card.Text>
                </Card.Body>
            </Card>
            </Col>
            <Col><Card>
                <Card.Header>Stitch Fix - 2017-2021</Card.Header>
                <Card.Body>
                    <Card.Title>Agent III</Card.Title>
                    <Card.Text>
                        Worked in direct communication with our clients to ensure that their needs were met while remaining business focused. Customer retention and tier 3 support. Workforce management twice a week--assessed priority of our diffeerent contact channels and direct agent responses to best help the most clients.
                        <br/>
                        <br/>
                        <br/>
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
                    I moved from Texas to Paris, France to provide English language instruction. While designing classes for the child in my care I also adapted to moving to a new country. It was a phenomenal experience and was a proven example of how well I can adapt to new situations.

                    </Card.Text>
                </Card.Body>
            </Card>
            </Col>
            <Col><Card>
                <Card.Header>More Fun Game Center - 2015-2016</Card.Header>
                <Card.Body>
                    <Card.Title>Sales Representative</Card.Title>
                    <Card.Text>
                    Working with a small group I oversaw events with up to 100 attendants. I maintained sales knowledge on a wide variety of products and games with information that could change daily, including providing product demonstrations for customers that walked in off the street.
                    </Card.Text>
                </Card.Body>
            </Card>
            </Col>
        </Row>
        </Container>
    );
}
export default Work;