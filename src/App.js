import React, { useState } from 'react';
import './App.css';
import Students from './component/students';
import SearchBar from './component/searchBar';
import Button from './component/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {

  const [name, setName] = useState('');
  const [tag, setTag] = useState('');
  const notify=()=>{
    toast.info('Please feel free to add some tag(s) for students when expand student information to make search eaiser')
  }

  return (
    <div>
    <Button
      className="btn btn-outline-primary m-2"
      onClick={notify}
      text='Customize student tag'/>
    <ToastContainer />
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
