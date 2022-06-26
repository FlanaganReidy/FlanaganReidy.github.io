import './App.css';
import Header from './Header.js';
import Skills from './Skills.js';
import Work from './Work.js';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Profile from './Profile.js';

function App() {
  return (
    <div className="App">
      <Header />
      <Tabs defaultActiveKey="about" id="uncontrolled-tab-example" className="mb-3"> 
          <Tab eventKey="about" title="About Me">
          <Profile />
          </Tab>
          <Tab eventKey="work" title="Work Experience">
          <Work />
          </Tab>
          <Tab eventKey="skills" title="Skills">
          <Skills />
          </Tab>
          <Tab eventKey="links" title="Links">
        </Tab>
      </Tabs>
      
      
    </div>
  );
}

export default App;
