import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Change 'Switch' to 'Routes'
import Greeting from './Greeting';

function App() {
  return (
      <div>
        <Routes>
          <Route path="/" element={<Greeting />} />
        </Routes>
      </div>
  );
}

export default App;