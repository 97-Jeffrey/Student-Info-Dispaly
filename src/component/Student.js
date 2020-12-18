import React, {useState} from 'react';
import '../component/Student.css';
import { Button } from 'react-bootstrap';
<link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>

function Student(props){
  const [open, setOpen] = useState(false);
  const [tags, setTags] = useState([]);
  const grades =props.student.grades;
  const tagExist = tags.join('').includes(props.tag);
  
  const onKeyDown = (e)=>{
    if(e.key === 'Enter'){
      let newVal = e.target.value;
      e.target.value = '';
      setTags(prev=>[...prev, newVal]);
    }
  }
  
  const gradeList = grades.map(grade=>{
   return (
      <div className='grade' key={Math.random()}>
        Test{grades.indexOf(grade)+1}: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

        <div id="myProgress">
          <div id="myBar" style={{width:`${grade}%`}}>{grade}%</div>
        </div>
        
      </div>
     )
  })

  const tagList = tags.map(eachTag =>{
    return (
      <div className='each-tag' key={Math.random()}>
        {eachTag}
      </div>
    )
  })


  return (
    <>
   {tagExist &&
    <div className='profile'>
      <div className='avatar'>
        <img src={props.student.pic} alt={props.student.firstName}></img>
      </div>
      <div className='info'>
        <h1 className='name'>{props.student.firstName.toUpperCase()} {props.student.lastName.toUpperCase()}</h1>
        <div className='email'>Email: {props.student.email}</div>
        <div className='company'>Company: {props.student.company}</div>
        <div className='skill'>Skill: {props.student.skill}</div>
        <div className='average'>Average: {props.median}%</div>
      
        {open && 
          <div className='all-grades' id="example-collapse-text">
            {gradeList}
            <div className='all-tags'>
              {tagList}
            </div>
            <input className='add-tag-input' placeholder='Add a tag' onKeyDown={onKeyDown}></input>
          </div>}
     
      </div>
      {open && <Button className='expand-btn' onClick={() => setOpen(!open)}
      > - </Button>}

      {!open && <Button className='expand-btn' onClick={() => setOpen(!open)}
      > + </Button>}
    </div> 
    }   
    </>
  )
}

export default Student;