import React from 'react';
import './Visit.css'; 

const Visit = () => {
  return (
    <div className="visit-container">
      <h2>VISIT US IN</h2>
      <div className="locations-grid">
        <div className="location-item">
            <img src='/assets/Group 3726.png' className='location-image' alt='Street in Amsterdam' />
            <h3>SOAPBOX <br></br> AMSTERDAM</h3>
            <p>Van Diemenstraat 118 <br></br>1013 CN Amsterdam<br></br>The Netherlands<br></br><em>+ 31 (0)43 7600 300</em><br></br><em>info@soapbox.nl</em></p>
        </div>
        <div className="location-item">
            <img src='/assets/Group 3725.png' className='location-image' alt='Street in Maastricht' />
            <h3>SOAPBOX <br></br> MAASTRICHT</h3>
            <p>Avenue Ceramique 300 <br></br>6221 KX Maastricht<br></br>The Netherlands<br></br><em>+ 31 (0)43 7600 300</em><br></br><em>info@soapbox.nl</em></p>
        </div>
        <div className="location-item">
            <img src='/assets/Group 3727.png' className='location-image' alt='Overview of Capetown' />
            <h3>SOAPBOX <br></br> SOUTH-AFRICA</h3>
            <p>
            UP Workspace <br></br>14 Upper Pepper Street<br></br>8000 Cape Town, South Africa <br></br><em>+ 27 (0) 7235 29 806</em> <br></br><em>info@soapboxsouthafrica.co.za</em>
            </p>
        </div>
      </div>
    </div>
  );
}

export default Visit;