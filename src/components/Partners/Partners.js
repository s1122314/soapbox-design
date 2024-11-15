import React from 'react';
import './Partners.css'; // Importeer de CSS-styling voor Partners component

const Partners = () => {
  return (
    <div className="partners-container">
        <h2 className='partners-title'>PARTNERS</h2>

        <div className="groups-container">
        {/* Groep 1 */}
        <div className="group">
          <h3>Organisations</h3>
          <div className="round-icon-container">
            <img src='/assets/building-solid.svg' className='partner-title-icon' alt='Building Icon' />
          </div>
          <div className="row">
            <div className="partner-box">
                <img src='/assets/ASML.png' className='partner-image-small' alt='ASML logo'/>
            </div>
            <div className="partner-box">
                <img src='/assets/Albert Heijn.png' className='partner-image-big' alt='Albert Heijn logo'/> 
            </div>
          </div>
          <div className="row">
            <div className="partner-box">
                <img src='/assets/NXP_Semiconductors_logo_2023.svg.png' className='partner-image-biggest' alt='NXP logo'/>
            </div>
            <div className="partner-box">
                <img src='/assets/Medtronic-Logo.png' className='partner-image-big' alt='Medtronic logo'/>
            </div>
          </div>
          <div className="row">
            <div className="partner-box">
                <img src='/assets/Vattenfall_logo2.svg.png' className='partner-image' alt='Vattenfall logo'/>
            </div>
            <div className="partner-box">
                <img src='/assets/mumc_logo.png' className='partner-image' alt='Maastricht UMC logo'/>
            </div>
          </div>
        </div>

        {/* Groep 2 */}
        <div className="group">
          <h3>Educational institutes</h3>
          <div className="round-icon-container">
            <img src='/assets/graduation-cap-solid.svg' className='partner-title-icon' alt='Graduation icon' />
          </div>
          <div className="row">
            <div className="partner-box">
                <img src='/assets/ASML.png' className='partner-image' alt='partner image'/>
            </div>
            <div className="partner-box">
                <img src='/assets/ASML.png' className='partner-image' alt='partner image'/>
            </div>
          </div>
          <div className="row">
            <div className="partner-box">
                <img src='/assets/ASML.png' className='partner-image' alt='partner image'/>
            </div>
            <div className="partner-box">
                <img src='/assets/ASML.png' className='partner-image' alt='partner image'/>
            </div>
          </div>
          <div className="row">
            <div className="partner-box">
                <img src='/assets/ASML.png' className='partner-image' alt='partner image'/>
            </div>
            <div className="partner-box">
                <img src='/assets/ASML.png' className='partner-image' alt='partner image'/>
            </div>
          </div>
        </div>

        {/* Groep 3 */}
        <div className="group">
          <h3>Government</h3>
          <div className="round-icon-container">
            <img src='/assets/landmark-solid.svg' className='partner-title-icon' alt='Building icon' />
          </div>
          <div className="row">
            <div className="partner-box">
                <img src='/assets/ASML.png' className='partner-image' alt='partner image'/>
            </div>
            <div className="partner-box">
                <img src='/assets/ASML.png' className='partner-image' alt='partner image'/>
            </div>
          </div>
          <div className="row">
            <div className="partner-box">
                <img src='/assets/ASML.png' className='partner-image' alt='partner image'/> 
            </div>
            <div className="partner-box">
                <img src='/assets/ASML.png' className='partner-image' alt='partner image'/>
            </div>
          </div>
          <div className="row">
            <div className="partner-box">
                <img src='/assets/ASML.png' className='partner-image' alt='partner image'/>
            </div>
            <div className="partner-box">
                <img src='/assets/ASML.png' className='partner-image' alt='partner image'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partners;