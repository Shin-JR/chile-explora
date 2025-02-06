import React from "react";
import "./MapChile.css"; // Importa los estilos

const MapChile = ({ svgContent }) => {
  const handleRegionClick = (event) => {
    const regionTitle = event.target.getAttribute("title");
    if (regionTitle) {
      console.log(`Clicked on region: ${regionTitle}`);
    }
  };

  return (
    <div className="map-container">
      <h1>Mapa de Chile</h1>
      <div
        className="map"
        onClick={handleRegionClick}
        dangerouslySetInnerHTML={{ __html: svgContent }} // Renderiza el SVG aquí
      />
    </div>
  );
};

export default MapChile;
