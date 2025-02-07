import React from 'react';
import './MapChile.css'; // Importa los estilos

const MapChile = ({ svgContent, isHorizontal, handleRegionClick }) => {
  return (
    <div className={`map ${isHorizontal ? 'horizontal' : ''}`}>
      <div
        onClick={handleRegionClick}
        dangerouslySetInnerHTML={{ __html: svgContent }}
      />
    </div>
  );
};

export default MapChile;
