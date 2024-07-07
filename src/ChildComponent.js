// src/ChildComponent.js
import React, { useContext } from 'react';
import MyContext from './MyContext'; // 确保路径正确

const ChildComponent = () => {
  const { state, setState } = useContext(MyContext);

  const handleClick = () => {
    setState('Hello, React!');
  };

  return (
    <div>
      <p>{state}</p>
      <button onClick={handleClick}>Change State</button>
    </div>
  );
};

export default ChildComponent;
