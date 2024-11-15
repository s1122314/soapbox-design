import React, { useState } from 'react';
import './Phones.css'; 

const Phones = () => {
  const [isVisible, setIsVisible] = useState(true); 
  const [isVisibleRight, setIsVisibleRight] = useState(true); 

  // Functies om de zichtbaarheid aan te passen
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const toggleVisibilityRight = () => {
    setIsVisibleRight(!isVisibleRight);
  };
  return (
    <div>
        <h2 className='phone-title'>[Y]OUR TALENT </h2>
        <img id="square-image" src="/assets/Rectangle 1715.png" alt="Vierkant" />
        <div className="phones-container">
            {/* Linkerknop voor navigatie */}
            {isVisibleRight && (
              <button className="navigation-button left-button" onClick={toggleVisibility} aria-label="Go to the left">&#9664;</button>
            )}    
            {!isVisibleRight && (
              <button className="navigation-button left-button hidden"></button>
             )}


            {/* Linker iPhone afbeelding */}
            <div className="phone-container">
              <img src="/assets/Group 3603.png" alt="iPhone" className="phone-image small-phone" />
              <div className="phone-screen small-phone-screen">
              {isVisible && (
                <img src="/assets/IMG_9033.00_00_29_06.Still001.png" alt="iPhone Content" className="screen-content" />

                )}
                {!isVisible && (
                  <img src="/assets/IMG_9033.00_00_09_02.Still002.png" alt="iPhone Content" className="screen-content" />
                )}
               </div>
            </div>
           
            {/* Middelste iPhone afbeelding */}
            <div className="phone-container">
                <img src="/assets/Group 3603.png" alt="iPhone" className="phone-image large-phone" />
                <div className="phone-screen">
                {isVisible && isVisibleRight && (
                  <img src="/assets/IMG_9033.00_00_09_02.Still002.png" alt="iPhone Content" className="screen-content" />
                )}
                {!isVisible && (
                  <img src="/assets/IMG_9033.00_00_29_06.Still001.png" alt="iPhone Content" className="screen-content" />
                )}
                {!isVisibleRight && (
                  <img src="/assets/IMG_9033.00_00_05_23.Still003.png" alt="iPhone Content" className="screen-content" />
                )}
                
                  <div className="iphone-shadow">
                    <img src='/assets/Icon feather-triangle.png' className='play-icon' alt='Play button' />
                    <div className="iphone-text-container">
                      <div className="iphone-row">
                        <img src='assets/Group 3775.png' className='school-icon' alt='School icon' />
                        {isVisible && isVisibleRight && (
                        <p className="iphone-text">
                          Zuyd Hogeschool
                        </p>
                        )}
                        {!isVisible &&  (
                          <p className="iphone-text">
                            Hogeschool Leiden
                          </p>
                        )}
                        {!isVisibleRight &&  (
                          <p className="iphone-text">
                            Hogeschool Amsterdam
                          </p>
                        )}
                      </div>
                      <div className="iphone-row">
                        <img src='assets/Group 3773.png' className='school-icon' alt='Bachelor icon' />
                        {isVisible && isVisibleRight && (
                        <p className="iphone-text">
                          Bachelor of Facility Management
                        </p>
                        )}
                        {!isVisible && (
                        <p className="iphone-text">
                          Bachelor of Science
                        </p>
                        )}
                        {!isVisibleRight && (
                        <p className="iphone-text">
                          Bachelor of Arts
                        </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="shadow-strip"></div>
                <div className="white-circle">
                  <img src="/assets/Icon fa-solid-heart.png" alt="heart icon" className="heart-icon" />
                </div> 
            </div>
            
            {/* Rechter iPhone afbeelding */}
            <div className="phone-container">
              <img src="/assets/Group 3603.png" alt="iPhone" className="phone-image small-phone" />
              <div className="phone-screen small-phone-screen">
                {isVisibleRight && (
                  <img src="/assets/IMG_9033.00_00_05_23.Still003.png" alt="iPhone Content" className="screen-content" />
                  )}
                  {!isVisibleRight && (
                    <img src="/assets/IMG_9033.00_00_09_02.Still002.png" alt="iPhone Content" className="screen-content" />
                  )}
                
              </div>
            </div>

             {/* Rechterknop voor navigatie */}
             {isVisible && (
              <button className="navigation-button right-button" onClick={toggleVisibilityRight} aria-label="Go to the right">&#9654;</button>
             )}
            {!isVisible && (
              <button className="navigation-button right-button hidden"></button>
             )}
        </div>
    </div>
  );
}

export default Phones;