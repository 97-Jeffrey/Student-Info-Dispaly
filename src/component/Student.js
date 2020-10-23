import React from 'react';
import '../component/Student.css'

function Student(props){


  return(
    <>
    <div className='profile'>
      <div className='avatar'>
        <img src={props.item.pic} alt={props.item.firstName}></img>
      </div>
      <div className='info'>
      <h1 className='name'>{props.item.firstName.toUpperCase()} {props.item.lastName.toUpperCase()}</h1>
      <div className='email'>Email: {props.item.email}</div>
      <div className='company'>Company: {props.item.company}</div>
      <div className='skill'>Skill: {props.item.skill}</div>
      <div className='average'>Average: {props.median}%</div>
      </div>
    </div>
    </>
  )

}


export default Student