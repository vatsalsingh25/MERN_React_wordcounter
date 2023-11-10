import './App.css';
import React, { useState } from 'react';

function App() {
  const [text, setText] = useState('');

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);
  };

  const countWords = (text) => {
    const words = text.trim().split(/\s+/);
    return words.length;
  };

  return (
    <div className="App">
      <h1>Responsive Paragraph Word Counter</h1>
      <textarea
        placeholder="Type here..."
        rows="5"
        value={text}
        onChange={handleTextChange}
      />
      <p>Word Count: {countWords(text)}</p>
    </div>
  );
}

export default App;
