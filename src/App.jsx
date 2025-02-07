import React, { useEffect, useState } from 'react';
import './App.css';
import MapChile from './components/MapChile';

function App() {
  const [svgContent, setSvgContent] = useState('');
  const [isHorizontal, setIsHorizontal] = useState(false);

  useEffect(() => {
    // Cargar el contenido del SVG desde el archivo
    fetch('/src/assets/cl.svg')
      .then(response => response.text())
      .then(data => setSvgContent(data))
      .catch(error => console.error('Error loading SVG:', error));
  }, []);

  const handleRegionClick = (event) => {
    const regionTitle = event.target.getAttribute("name");
    if (regionTitle) {
      console.log(`Clicked on region: ${regionTitle}`);
      alert(`Clicked on ${regionTitle}`);
    }
  };

  const toggleOrientation = () => {
    setIsHorizontal(!isHorizontal);
  };

  return (
    <div className="App">
      <h1>Chile Explora</h1>
      <button onClick={toggleOrientation}>
        Cambiar a {isHorizontal ? "Vertical" : "Horizontal"}
      </button>
      <MapChile svgContent={svgContent} isHorizontal={isHorizontal} handleRegionClick={handleRegionClick} />
    </div>
  );
}

export default App;
