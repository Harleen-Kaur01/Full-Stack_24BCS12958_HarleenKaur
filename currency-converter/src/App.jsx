import React, { useState } from 'react';

function App() {
  const [usd, setUsd] = useState(0);
  const [inr, setInr] = useState(0);

  const convertToInr = (e) => {
    const dollars = e.target.value;
    setUsd(dollars);
    setInr(dollars * 83); // Simple fixed rate
  };

  return (
    <div>
      <h1>Currency Converter (USD to INR)</h1>
      
      <div>
        <label>USD: </label>
        <input type="number" value={usd} onChange={convertToInr} />
      </div>
      
      <br />

      <div>
        <label>INR: </label>
        <input type="number" value={inr} readOnly />
      </div>
    </div>
  );
}

export default App;
