import React, { useEffect, useRef, useState } from 'react'
import { multipleChoiceQuestions } from '../../../../data/multipleChoiceQuestions'
import styles from './style.module.scss'
import useArrayMapper from '../../../../hooks/useArrayMapper'
import { Header } from '../../main/componets/header';
import { notInitialized } from 'react-redux/es/utils/useSyncExternalStore';

export default function MultipleChoice() {
  
  // const quizQuestion = useArrayMapper(multipleChoiceQuestions, "Question");
  // const quizChoices = useArrayMapper(multipleChoiceQuestions, "Choices");
  const [selectedQuizCat,setSelectedQuizCat] = useState<any>(null)
 

  const handleSelectTopic = (value:any) =>{
    const getIndexOfSelectedCategory =  multipleChoiceQuestions.filter((item:any)=> item === value)[0].Category;
    const getMultipleChoiceQuestionsCategories = multipleChoiceQuestions.map((item:any) => item.Category)
    const selectedIndex = getMultipleChoiceQuestionsCategories.indexOf(getIndexOfSelectedCategory);
    setSelectedQuizCat(multipleChoiceQuestions[selectedIndex].Items)
    
  }


const handleSubmit = (e:any)=>{
  e.preventDefault();
  for(let value of e.target.children){
    if(value.checked){
      console.log(value,"test")
    }
  }
  console.log(e.target.children)
}
console.log(selectedQuizCat);

  return (
    <div className={styles.multipleChoice_container}>
      <Header/>
      <div className={styles.quiz_container}>
      <h1>Select Subject</h1>
      {
        multipleChoiceQuestions.map((item:any,index)=> (
          <React.Fragment key={index}>
            <button onClick={()=>handleSelectTopic(item)}>{item.Category}</button>
          </React.Fragment>
        ))
      },
      <form action="submit" onSubmit={handleSubmit}>
        {selectedQuizCat[0].Question}
      {
         selectedQuizCat !== null ? (
          
          selectedQuizCat.map((item:any,index:number)=>(
            <React.Fragment key={index}>
              <div>{item.Question}</div>
              {
                item.Choices.map((val:any,ind:any)=>(
                  <React.Fragment key={ind}>
                    <input type="radio" name="choices" value={val}/><span> {val}</span>
                  </React.Fragment>
                ))
              }
            </React.Fragment>
          ))
         ) : null
      }
        <input type="submit" value={"Test"}/>
      </form>
        </div>
    </div>
  )
}
