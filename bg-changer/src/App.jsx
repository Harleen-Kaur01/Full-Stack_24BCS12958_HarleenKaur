import React, { useState } from 'react';

function App() {
  const [color, setColor] = useState("white");

  return (
    <div style={{ backgroundColor: color, height: "100vh", padding: "20px" }}>
      <h1>Background Changer</h1>
      <p>Current Color: {color}</p>

      <button onClick={() => setColor("red")}>Red</button>
      <button onClick={() => setColor("green")}>Green</button>
      <button onClick={() => setColor("blue")}>Blue</button>
      <button onClick={() => setColor("yellow")}>Yellow</button>
    </div>
  );
}

export default App;
