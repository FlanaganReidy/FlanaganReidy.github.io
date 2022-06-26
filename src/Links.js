import Button from 'react-bootstrap/Button';
import { Container } from "react-bootstrap";

function Contact(){
    return(
        <Container >
            <Button className = "buttonLink" href="https://www.linkedin.com/in/shannon-reidy-943676152/">LinkedIn</Button>
            <Button className = "buttonLink" href="https://github.com/FlanaganReidy">Github Profile</Button>
        </Container>
    );
}
export default Contact;