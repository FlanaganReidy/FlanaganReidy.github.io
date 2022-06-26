import { Container } from "react-bootstrap";
import profilepic from "./Profile.jpg";
import Image from 'react-bootstrap/Image';
import { Row,Col } from "react-bootstrap";

function Profile(){
    return(
        <Container>
            <Row>
                <Col>
                    <h3>
                        Who am I?
                        </h3>    
                </Col>
                <Col>
                    <Image src={profilepic} rounded="true" alt="It's me!" className="profilePic"/>
                </Col>
                
            </Row>
            
        </Container>
       
    );
}
export default Profile;