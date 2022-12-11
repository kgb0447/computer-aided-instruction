import React, { useRef, useState } from 'react'
import { multipleChoiceQuestions } from '../../../../data/multipleChoiceQuestions'
import styles from './style.module.scss'
import useArrayMapper from '../../../../hooks/useArrayMapper'
import { Header } from '../../main/componets/header';
import { type } from '@testing-library/user-event/dist/type';

export default function MultipleChoice() {
  
  const quizQuestion = useArrayMapper(multipleChoiceQuestions, "Question");
  const quizChoices = useArrayMapper(multipleChoiceQuestions, "Choices");

  const myData = ['a','b','c','d'];

const radioRef = useRef(null)
const handleSubmit = (e:any)=>{
  e.preventDefault();
 
  for(let value of e.target.children){
    if(value.checked){
      console.log(value.value,"test")
    }
  }
  
  
}
  return (
    <div className={styles.multipleChoice_container}>
      <Header/>
      <div className={styles.quiz_container}>
        <div className={styles.question}>{quizQuestion}</div>
        <div className={styles.choices_wrapper} >
      <form action="submit" onSubmit={handleSubmit} ref={radioRef}>
      {
        myData.map((item,index)=>(
          <React.Fragment key={index}>
            <input type="radio" name='choices' value={item} />{item}
            </React.Fragment>
        ))
        
      }
      <input type="submit" value="Submit" />
      </form>
       </div>
      </div>
    </div>
  )
}
