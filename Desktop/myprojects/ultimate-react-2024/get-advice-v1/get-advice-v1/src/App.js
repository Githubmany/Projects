import React from 'react';

export default function App() {
  // Define the function that fetches the advice from the API
const getAdvice = () => {
  // Fetch the advice from the API
  fetch('https://api.adviceslip.com/advice')
    // Convert the response to JSON
    .then(response => response.json())
    // Use the data
    .then(data => {
      // Get the advice element
      const adviceElement = document.querySelector("#advice");
      
      // Set the text of the advice element to the advice from the API
      adviceElement.textContent = data.slip.advice;
    })
    .catch(error => console.error(error));
};
return (
  <div className="App">
    <h1>Get advice</h1> 
    <button onClick={getAdvice}>Get advice</button>
    <p id="advice">Click the button to get advice</p>
  </div>
  );
}

