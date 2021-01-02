import React, { useState, useEffect } from 'react';
import Student from './Student';
import average from '../helper/average';
import matchName from '../helper/matchName';
import axios from 'axios';


function Students({name, tag}){
  const [students, setStudent] = useState([]);
  const apiEndPoint = `https://api.hatchways.io/assessment/students`;
  useEffect(()=>{
    axios.get(apiEndPoint)
    .then(response=>{
      console.log(response);
      setStudent(response.data.students)
    })
  },[apiEndPoint]);


  return(
    <div>
      {students
      .filter(student=>matchName(student, name))
      .map(student=>{ 
        return (
          <Student 
            key = {student.id}
            student = {student}
            median = {average(student.grades)}
            tag={tag}
          />
        )
    })}
    </div>
  )
}

export default Students;