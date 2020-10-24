import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Student from './component/Student';
import average from './helper/average';

function App() {

  const [students, setStudent] = useState([]);
  const [name, setName] = useState('');
  const [tag, setTag] = useState('');

useEffect(()=>{
  axios.get(`https://api.hatchways.io/assessment/students`)
  .then(response=>{

    setStudent(response.data.students)
  })
},[]);

  const studentList = students.map(item=>{
    let median = average(item.grades);
    if(item.firstName.toLowerCase().includes(name) || item.lastName.toLowerCase().includes(name)){
    return (
      <Student 
        key = {item.id}
        item = {item}
        median = {median}
        tag={tag}
      />
    )
   }
  })

  return (
    <div>
    <input
      id='name-input'
      value={name}
      onChange = {e=>setName(e.target.value)}
      placeholder='Search by name'
    />
    <input
      id='add-tag-input'
      value={tag}
      onChange = {e=>setTag(e.target.value)}
      placeholder='Search by tags'
    />
      {studentList}
    </div>
  );
}

export default App;
