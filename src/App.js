import React, { useState } from 'react';
import './App.css';
import Students from './component/students';
import SearchBar from './component/searchBar';




function App() {

  const [name, setName] = useState('');
  const [tag, setTag] = useState('');

  return (
    <div>
    <SearchBar 
      id='name-input'
      value={name}
      onChange = {e=>setName(e.target.value)}
      placeholder='Search by name'
    />
    <SearchBar
      id='add-tag-input'
      value={tag}
      onChange = {e=>setTag(e.target.value)}
      placeholder='Search by tags'
    />
    
    <Students 
      name={name} 
      tag={tag}
    />
    </div>
  );
}

export default App;
