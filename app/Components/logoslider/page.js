// pages/LogoSlider.js

import React from 'react';
import './styles.css';

const LogoSlider = () => {
  return (
    <div className="logos">
      <div className="logo_items">
        {/* First set of images */}
        <img src="/images/31.png" alt="Logo 1" />
        <img src="/images/4.png" alt="Logo 2" />
        <img src="/images/5.png" alt="Logo 3" />

      </div>
      <div className="logo_items">
        <img src="/images/31.png" alt="Logo 1" />
        <img src="/images/4.png" alt="Logo 2" />
        <img src="/images/5.png" alt="Logo 3" />
      </div>
    </div>
  );
};

export default LogoSlider;
