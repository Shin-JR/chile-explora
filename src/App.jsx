import React, { useEffect, useState } from 'react';
import './App.css';
import MapChile from './components/MapChile';

function App() {
  const [svgContent, setSvgContent] = useState('');

  useEffect(() => {
    // Cargar el contenido del SVG desde el archivo
    fetch('/src/assets/chile.svg')
      .then(response => response.text())
      .then(data => setSvgContent(data))
      .catch(error => console.error('Error loading SVG:', error));
  }, []);

  return (
    <div className="App">
      <MapChile svgContent={svgContent} />
    </div>
  );
}

export default App;
