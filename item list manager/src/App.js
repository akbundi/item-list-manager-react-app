import React, { useState } from 'react';
import './App.css';

function App() {
  // State to hold the list of items
  const [items, setItems] = useState([]);
  // State to hold the current value of the input field
  const [inputValue, setInputValue] = useState('');

  // Function to handle input change
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Function to handle adding an item to the list
  const handleAddItem = () => {
    if (inputValue.trim() !== '') { // Check if the input is not empty
      setItems([...items, inputValue]); // Add the new item to the list
      setInputValue(''); // Clear the input field
    }
  };

  return (
    <div className="App">
      <h1>Item List Manager</h1>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type an item"
        />
        <button onClick={handleAddItem}>Add Item</button>
      </div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;