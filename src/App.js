import Accountbar from './components/Account/Account'; 
import Navbar from './components/Navbar';
import Phonesbar from './components/Phones/Phones'; 
import Workbar from './components/Work/Work'; 
import Whatbar from './components/What/What'; 
import Partnersbar from './components/Partners/Partners'; 
import Visitbar from './components/Visit/Visit'; 
import Footerbar from './components/Footer/Footer'; 

import './App.css'; 
import './App.css';

function App() {
  return (
    <div className="App">
      <Accountbar />
     <Navbar /> 
     <div
        className="header-background"
        style={{
          background: `transparent url('${process.env.PUBLIC_URL}/assets/TUDIC-Speeddates-091.png') 0% 0% no-repeat padding-box`,
          width: '100%',
          height: '696px',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
         <div className="bottom-left-text">
            CONNECTING YOUNG PROFESSIONALS AND ORGANISATIONS FOR IMPACTFUL CAREERS
        </div>
        <div className="bottom-right-image">
          <img src="/assets/Group 3729.png" alt="Soapbox logo" />
        </div>
      </div>
      <Phonesbar />
      <Workbar />
      <Whatbar />
      <Partnersbar />
      <Visitbar />
      <Footerbar />
    </div>
  );
}

export default App;
