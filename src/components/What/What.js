import React from 'react';
import './What.css'; 

const What = () => {
  return (
    <div className="what-container">
      <h2>
        WHAT WE DO
      </h2>
      <img id="square-image-what" src="/assets/Rectangle 1715.png" alt="Vierkant" />
      <div className="row-container">
        <div className="container-box">
            <div className="box-image">
                <img src="/assets/TUDIC-Finale-118.png" alt="Voorbeeld 1" />
            </div>
            <div className="box-content">
                <h3>TALENT ACQUISITION</h3>
                <p>Recruitment and selection, job coaching & secondment for young professionals.</p>
            </div>
            <div className="right-square">
                <img src='/assets/Icon fa-solid-star.png' className='square-icon' alt="Voorbeeld 1"/>
            </div> 
        </div>
        <div className="container-box">
            <div className="box-image">
                <img src="/assets/TUDIC-Finale-143.png" alt="Voorbeeld 2" />
            </div>
            <div className="box-content">
                <h3>CAREER EVENTS</h3>
                <p>We facilitate your employer branding by hosting meaningful & connective events and workshops.</p>
            </div>
            <div className="right-square-yellow">
                <img src='/assets/Icon ion-megaphone.png' className='square-icon' alt="Voorbeeld 1"/>
            </div> 
        </div>
      </div>
      <div className="row-container">
        <div className="container-box">
            <div className="box-image">
                <img src="/assets/TUD_speeddates_003.png" alt="Voorbeeld 3" />
            </div>
            <div className="box-content">
                <h3>STUDENT CONSULTANCY</h3>
                <p>Quality (side)jobs for HBO & WO students.</p>
                <br></br>
            </div>
            <div className="right-square-yellow">
                <img src='/assets/Icon awesome-graduation-cap.png' className='square-icon' alt="Voorbeeld 1"/>
            </div>
        </div>
        <div className="container-box">
            <div className="box-image">
                <img src="/assets/TUD_speeddates_007.png" alt="Voorbeeld 4" />
            </div>
            <div className="box-content">
                <h3>INHOUSE SPRINTS</h3>
                <p>Students will work on real business cases, followed by an in-depth presentation with a feasible solution.</p>
            </div>
            <div className="right-square">
                <img src='/assets/Icon awesome-handshake.png' className='square-icon' alt="Voorbeeld 1"/>    
            </div>
        </div>
      </div>
    </div>
  );
}

export default What;