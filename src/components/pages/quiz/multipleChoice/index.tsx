import React, {  useLayoutEffect, useRef, useState } from 'react'
import { multipleChoiceQuestions } from '../../../../data/multipleChoiceQuestions'
import styles from './style.module.scss'
import { Header } from '../../main/componets/header';
import {AiOutlineClose} from 'react-icons/ai'
import { useParams } from 'react-router-dom'

export default function MultipleChoice() {
  const {id} = useParams();
  const quizCategory = multipleChoiceQuestions.map((item:any)=> item.Category);
  const selectedQuizCat : number = quizCategory.indexOf(id);
  const [showedQuestion, setShowedQuestion] = useState(0);
  const inputSubmitRef = useRef<any>(true);
  const [scoreState,setScoreState] = useState<React.SetStateAction<number>>(0)
  const [showScore,setShowScore] = useState<boolean>(false)
  const quizItems = multipleChoiceQuestions[0].Items;

  
  const handleSubmit = (e:any)=>{
    e.preventDefault();
    for(let value of e.target.children){
      if(value.checked){
        console.log(e)
        if(value.value === multipleChoiceQuestions[0].Items[showedQuestion].Answer){
          setScoreState((prev:number) => prev + 1)
        }
        else{
          console.log("wrong");
        }

        handleNext();
        return (
          value.checked = false,
          inputSubmitRef.current.disabled = inputSubmitRef.current
        )
      }
    }
  }

  const handleLoadQuestions = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
  };

  const shuffledAndSelectedQuestions = [
    ...quizItems,
    quizItems[Math.floor(handleLoadQuestions(1, 5)) - 1]
  ].slice(0, 4);//set the max items of quiz
  
  const handleNext = () => {
    if (showedQuestion === shuffledAndSelectedQuestions.length - 1) {
      setShowScore(true)
      return null;
    } else {
      setShowedQuestion((prev) => prev + 1);
    }
  };

  const handleCheck = () =>{
    inputSubmitRef.current.disabled = !inputSubmitRef.current;
  }
  const handleCloseModal =() =>{
    setShowScore(false)
    setScoreState(0)
  }
  return (
    <div className={styles.multipleChoice_container}>
      <Header/>
      <div className={styles.quiz_container}>
      <h1>Select Subject</h1>
       <form action="submit" onSubmit={handleSubmit}>
        <h2>{multipleChoiceQuestions[selectedQuizCat].Items[showedQuestion].Question}</h2>
        {multipleChoiceQuestions[selectedQuizCat].Items[showedQuestion].Choices.map(
          (item: any, index: number) => (
            <React.Fragment key={index}>
              <input
                className="choices"
                type="radio"
                name="choices"
                id={item}
                value={item} onChange={handleCheck}
              />
               <label htmlFor={item}>{item}</label><br/>
            </React.Fragment>
          )
        )}
        <input type="submit" name="Submit" ref={inputSubmitRef} disabled/>
        </form>
        </div>
     
        {
          showScore ? (
            <><div className={styles.overlay}></div>
            <div className={styles.modal}>
              <header><h1>Quiz Results for {id}</h1><AiOutlineClose className={styles.close_icon} onClick={handleCloseModal}/></header>
               {/* @ts-ignore */}
              <h1>Your final score is {scoreState}</h1>
              <footer>
                <button onClick={()=> window.location.reload()}>Try Again</button>
              </footer>
            </div>
            </>
          ) : null
        }
    </div>
  )
}
