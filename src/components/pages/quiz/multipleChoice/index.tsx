import React, { useEffect } from 'react'
import { multipleChoiceQuestions } from '../../../../data/multipleChoiceQuestions'
import styles from './style.module.scss'
import useArrayMapper from '../../../../hooks/useArrayMapper'
import { Header } from '../../main/componets/header';
export default function MultipleChoice() {
  
  const quizQuestion = useArrayMapper(multipleChoiceQuestions, "Question");
  const quizChoices = useArrayMapper(multipleChoiceQuestions, "Choices");
  const handleSubmit = (item : string) =>{
    const answer = multipleChoiceQuestions[0].Items[0].Choices.filter(data => data === item)
    console.log(answer,"Test answer");
    if(answer[0] === multipleChoiceQuestions[0].Items[0].Answer ){
      console.log("correct")
    } else{
      console.log("wrong");
    }
  }

 
  return (
    <div className={styles.multipleChoice_container}>
      <Header/>
      <div className={styles.quiz_container}>
        <div className={styles.question}>{quizQuestion}</div>
        <div className={styles.choices_wrapper} >
      {
        quizChoices.map((item,index)=>(
            <button key={index}>{item}</button>
        ))
      }
       </div>
      </div>
    </div>
  )
}
