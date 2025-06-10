import React from 'react';

const BlackLogoWithText = ({ logoHeight = 80, textHeight = 150 }) => (
  <div style={{ display: 'flex', alignItems: 'center' }}>
    <img
      src="/logo/blacklogo.png"
      alt="Black Pebble Logo"
      style={{ height: logoHeight }}
    />
    <img
      src="/logo/blacktext.png"
      alt="Black Text"
      style={{ height: textHeight }}
    />
  </div>
);

export default BlackLogoWithText;