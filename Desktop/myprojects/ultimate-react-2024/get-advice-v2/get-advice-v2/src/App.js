import { useState } from 'react';
export default function App() {
  const [advice, setAdvice] = useState('');
  
  async function getAdvice() {
    setAdvice(''); // Reset the advice state before fetching new advice
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    setAdvice(data.slip.advice);
  }

  return (
    <div>
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get Advice</button>
    </div>
  );
}

