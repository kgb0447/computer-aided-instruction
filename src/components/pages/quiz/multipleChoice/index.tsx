import React, { useEffect, useRef, useState } from 'react'
import { multipleChoiceQuestions } from '../../../../data/multipleChoiceQuestions'
import styles from './style.module.scss'
import { Header } from '../../main/componets/header';
import { useParams } from 'react-router-dom'
import {Modal} from '../../global/Modal'
import { common } from '../../../../data/common';
import { Timer } from '../../global/Timer';
import { useAppDispatch,useAppSelector } from '../../../../reducers/hooks';
import { stopCountDown } from '../../../../reducers/timer_slice';

export default function MultipleChoice() {

  const dispatch = useAppDispatch();
  const {id} = useParams();
  const quizCategory = multipleChoiceQuestions.map((item:any)=> item.Category);
  const selectedQuizCat : number = quizCategory.indexOf(id);
  const [showedQuestion, setShowedQuestion] = useState(0);
  const inputSubmitRef = useRef<any>(true);
  const [scoreState,setScoreState] = useState<React.SetStateAction<number>>(0)
  const [showScore,setShowScore] = useState<boolean>(false)
  const quizItems = multipleChoiceQuestions[selectedQuizCat].Items; 
  const SHUFFLED_ITEMS = [...quizItems].sort(()=> Math.random() > 0.5 ? 1 : -1 ).slice(0,quizItems.length);
  const [isStartQuiz,setIsStartQuiz] = useState<React.SetStateAction<boolean>>(false);


  enum quizLength {
    hard = 20,
    intermediate = 15,
    easy = 2
  }

  const handleSubmit = (e: any) =>{
    e.preventDefault();
     for(let value of e.target.children){
      if(value.checked){
        console.log(e)
        if(value.value === SHUFFLED_ITEMS[showedQuestion].Answer){
          setScoreState((prev:number) => prev + 1)
        }
        else{
          console.log("wrong");
        }

        handleNext();
        dispatch(stopCountDown());
        return (
          value.checked = false,
          inputSubmitRef.current.disabled = inputSubmitRef.current
          
        )
      }
    }
    
  }

  const handleNext = () => {
    if (showedQuestion === quizLength.easy) {
      setShowScore(true)
      return null
     
    } else {
      setShowedQuestion((prev) => prev + 1);
    }
  };

  useEffect(() => {
    handleNext();
  }, [])
  
 
  const handleCheck = () =>{
    inputSubmitRef.current.disabled = !inputSubmitRef.current;
  }

  const handleStart = () => {
    setIsStartQuiz(true);
  }
  return (
    <div className={styles.multipleChoice_container}>
      <Header/>
      {!isStartQuiz ? <div className={styles.start_section} onClick={handleStart}>Click to anywhere to start</div> : null}
      {
        isStartQuiz ? (
          <div className={styles.quiz_container}>
        <form action="submit" onSubmit={handleSubmit}>
          <h2>{SHUFFLED_ITEMS[showedQuestion].Question}</h2>
          {SHUFFLED_ITEMS[showedQuestion].Choices.map(
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
          {/* @ts-ignore */}
          <Timer resetTriger = {(e)=>handleSubmit(e)} handleNext={handleNext}
           />
        </div>
        ) : null
      }
        {/* @ts-ignore */}
        {showScore ? <Modal inheritedState={scoreState} message={`${common.quizResultMessage} ${id}`} inheritedStateDispatch={{setShowScore,setScoreState}}/> : null}
    </div>
  )
}