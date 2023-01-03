import logo from './logo.svg';
import {Row, Col} from 'react-bootstrap';
function Header(){
    return (
        
        <header className="App-header">
            <Row>
            <Col lg={6}>Shannon Reidy</Col>
            <Col lg={6}>Front-End Web Developer</Col>
            </Row>
      </header>
    );
}
export default Header;