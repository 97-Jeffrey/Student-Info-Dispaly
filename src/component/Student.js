import React, {useState} from 'react';
import { Button } from 'react-bootstrap';
import switchColor from '../helper/switchColor';
import '../component/Student.css';

function Student(props){
  const { student, median, tag } =props;
  const grades =student.grades;
  const [open, setOpen] = useState(false);
  const [tags, setTags] = useState([]);
  const tagExist = tags.join('').includes(tag);
  
  const onKeyDown = e =>{
    if(e.key === 'Enter'){
      let newVal = e.target.value;
      e.target.value = '';
      setTags(prev=>[...prev, newVal]);
    }
  }

 

  const gradeList = grades.map((grade, index)=>{
   return (
      <div className='grade' key={index}>
        Test{grades.indexOf(grade)+1}: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

        <div id="myProgress">
          <div id="myBar" style={{width:`${grade}%`, backgroundColor:switchColor(grade)}}>{grade}%</div>
        </div>
        
      </div>
     )
  })

  const tagList = tags.map((tag, index) =>{
    return (
      <div 
        className='each-tag' 
        key={index}
      >
        {tag}
      </div>
    )
  })

  


  return (
    <>
   {tagExist &&
    <div className='profile'>
      <div className='avatar'>
        <img src={student.pic} alt={student.firstName}></img>
      </div>
      <div className='info'>
        <h1 className='name'>{student.firstName.toUpperCase()} {student.lastName.toUpperCase()}</h1>
        <div className='email'>Email: {student.email}</div>
        <div className='company'>Company: {student.company}</div>
        <div className='city'>City: {student.city}</div>
        <div className='skill'>Skill: {student.skill}</div>
        <div className='average'>Average: {median}%</div>
        
      
        {open && 
          <div className='all-grades' id="example-collapse-text">
            {gradeList}
            <div className='all-tags'>
              {tagList}
            </div>
            <input className='add-tag-input' placeholder='Add a tag' onKeyDown={onKeyDown}></input>
            {tags.length!==0 &&<button className='remove-tags' onClick={()=>setTags([])}>remove tags</button>}
          </div>}
      </div>

      <div className='switch-btn'>
        {open && <Button className='expand-btn' onClick={() => setOpen(!open)}
        > - </Button>}

        {!open && <Button className='expand-btn' onClick={() => setOpen(!open)}
        > + </Button>}
      </div>
    </div> 
    }   
    </>
  )
}

export default Student;