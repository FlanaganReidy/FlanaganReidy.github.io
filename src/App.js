import './App.css';
import Header from './Header.js';
import Skills from './Skills.js';
import Work from './Work.js';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Profile from './Profile.js';
import Contact from './Links.js';
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import  Footer  from './Footer.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Tabs defaultActiveKey="about" id="uncontrolled-tab-example" className="tab-container"> 
          <Tab eventKey="about" title="About Me">
          <Profile />
          </Tab>
          <Tab eventKey="work" title="Experience">
          <Work />
          </Tab>
          <Tab eventKey="skills" title="Skills">
          <Skills />
          </Tab>
      </Tabs>
      <Footer />
      
    </div>
  );
}

export default App;
