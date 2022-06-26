import { Container } from "react-bootstrap";
import profilepic from "./Profile.jpg";
import Image from 'react-bootstrap/Image';
import { Row,Col } from "react-bootstrap";
import Contact from "./Links.js";

function Profile(){
    return(
        <Container>
            <Row>
                <Col>
                    <h3>
                        Who am I?
                    </h3>
                    <br /> 
                    
                    <p>
                        My name is Shannon Reidy and I'm a Junior Web Developer from Austin, Texas. <br /> <br /> In my work history I've worn many different hats, working in operations and customer service while persuing my dream of web development I've learned how to adapt and grow to rise to any challenge that's in front of me. <br /> <br /> In my personal life, I have a deep love of game design and fiction writing. I like to apply my love of puzzle solving to the work that I do. I want to share my passion with everyone and I bring this energy to everything that I do. 
                        
                    </p>
                </Col>
                <Col>
                    <Image src={profilepic} rounded alt="It's me!" className="profilePic"/>
                    <Contact />
                </Col>
                
            </Row>
            
        </Container>
       
    );
}
export default Profile;