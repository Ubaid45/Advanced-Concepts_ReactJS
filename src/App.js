import React from 'react';
import './App.css';
import Movie from './hoc/Movie';
import Counter from './hooks/Counter';

function App() {
  return (
    <Counter id={1}/>
  );
}

export default App;
