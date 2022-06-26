import { Container, Row, Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
function Work (){
    return (
        <Container className = 'workContainer'>
            <h3>Education</h3>
            <Row>
            <Col>
            <Card>
                <Card.Header>Austin Community College <br/> Graduated 2022</Card.Header>
                <Card.Body>
                    <Card.Title>Web Developer Specialist Certifcation</Card.Title>
                    <Card.Text>
                        At ACC I gained a rounded education in different web development technologies. Much of my work was written in Javascript using JQuery but I also developed skills using Java and PHP for writing back end applications.
                        
                    </Card.Text>
                </Card.Body>
            </Card>
            </Col>
            <Col><Card>
                <Card.Header>The Iron Yard Code School <br/> Graduated 2017</Card.Header>
                <Card.Body>
                    <Card.Title>Full Stack Web Development</Card.Title>
                    <Card.Text>
                        At the Iron Yard I developed a passion for working in web development. I started with Javascript working with Node and Express and then moved onto a Java/Springboot development stack. I worked with writing APIs and creating dynamic CRUD applications.
                    </Card.Text>
                </Card.Body>
            </Card>
            </Col>
        </Row>
        <br/>
        <Row>
            <Col>
            <Card>
                <Card.Header>University of North Texas <br/> Graduated 2015</Card.Header>
                <Card.Body>
                    <Card.Title>Bachelor's degree -- French</Card.Title>
                    <Card.Text>
                    I graduated from the University of North Texas with a bachelor’s in French. During my time in school I found that I enjoy being a lifelong student. The French language is a passion of mine and I wanted to use this passion in a teaching capacity, which was something I got to do when I moved to Paris the year after I graduated.
                    </Card.Text>
                </Card.Body>
            </Card>
            </Col>
        </Row>
        <br />

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