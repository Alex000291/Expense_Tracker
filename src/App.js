// src/App.js
import React, { useState } from 'react';
import MyContext from './MyContext'; // 确保路径正确
import ChildComponent from './ChildComponent';

const App = () => {
  const [state, setState] = useState('Hello, World!');

  return (
    <MyContext.Provider value={{ state, setState }}>
      <ChildComponent />
    </MyContext.Provider>
  );
};

export default App;
