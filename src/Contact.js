import Button from 'react-bootstrap/Button';
import { Container } from "react-bootstrap";
import {SocialIcon} from 'react-social-icons'

function Contact(){
    return(
        <Container >
            <SocialIcon bgColor="white" url="https://www.linkedin.com/in/shannon-reidy-943676152/" />
            <SocialIcon bgColor="white" url="https://github.com/FlanaganReidy"/>
        </Container>
    );
}
export default Contact;