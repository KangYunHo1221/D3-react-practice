import React, { useRef } from 'react';

const data = [25, 20, 45, 60, 20];

function App() {
  const svgRef = useRef(null);

  return (
    <div>
      <svg ref={svgRef}></svg>
    </div>
  );
}

export default App;
