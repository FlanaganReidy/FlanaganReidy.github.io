import logo from './logo.svg';
import {Row, Col} from 'react-bootstrap';
import Contact from './Contact';
function Header(){
    return (
        
        <header className="App-header">
            <div className="bg"></div>
            <div className="bg bg2"></div>
            <div className="bg bg3"></div>
            <Row className='title-header'>
                <Col>Shannon Reidy</Col>
                <Col>Front-End Web Developer</Col>
                <Contact />
            </Row>
      </header>
    );
}
export default Header;