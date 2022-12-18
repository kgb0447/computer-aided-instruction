import React, { HTMLInputTypeAttribute, useLayoutEffect, useRef, useState } from 'react'
import { multipleChoiceQuestions } from '../../../../data/multipleChoiceQuestions'
import styles from './style.module.scss'
import useArrayMapper from '../../../../hooks/useArrayMapper'
import { Header } from '../../main/componets/header';
import { notInitialized } from 'react-redux/es/utils/useSyncExternalStore';


export default function MultipleChoice() {
  
  // const quizQuestion = useArrayMapper(multipleChoiceQuestions, "Question");
  // const quizChoices = useArrayMapper(multipleChoiceQuestions, "Choices");
  const [selectedQuizCat,setSelectedQuizCat] = useState<any>(null)
  const [randomNumber,setRandomNumber] = useState<number|null>(null)
  const [showedQuestion, setShowedQuestion] = useState(0);
  const inputSubmitRef = useRef<any>(true);
  const [scoreState,setScoreState] = useState<React.SetStateAction<number>>(0)
 

  const handleSelectTopic = (value:any) =>{
    const getIndexOfSelectedCategory =  multipleChoiceQuestions.filter((item:any)=> item === value)[0].Category;
    const getMultipleChoiceQuestionsCategories = multipleChoiceQuestions.map((item:any) => item.Category)
    const selectedIndex = getMultipleChoiceQuestionsCategories.indexOf(getIndexOfSelectedCategory);
    setSelectedQuizCat(multipleChoiceQuestions[selectedIndex].Items);
    if(selectedQuizCat !== null) {
      const randomNum = Math.floor(Math.random() * ( selectedQuizCat.length - 0) + 0);
      setRandomNumber(randomNum)
    }
    
  }

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

console.log(multipleChoiceQuestions[0].Items[showedQuestion].Answer)
// const handleNext = () =>{
//   if(selectedQuizCat !== null) {
//     const randomNum = Math.floor(Math.random() * ( selectedQuizCat.length - 0) + 0);
//     setRandomNumber(randomNum)
//   }
// }

const length = multipleChoiceQuestions[0].Items.length - 1;
  let shuffledArray: any = Math.floor(Math.random() * (length - 0) + 0);

  const [testMap, setTestMap] = useState<any>([]);
  const quizItems = multipleChoiceQuestions[0].Items;


  useLayoutEffect(() => {
    let currentIndex = quizItems.length,
      randomIndex;

    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [quizItems[currentIndex], quizItems[randomIndex]] = [
        quizItems[randomIndex],
        quizItems[currentIndex]
      ];
    }
    setTestMap(quizItems);
  }, []);
  

  const handleLoadQuestions = (min: number, max: number) => {
    return Math.random() * (max - min) + min;
  };

  const shuffledAndSelectedQuestions = [
    ...quizItems,
    quizItems[Math.floor(handleLoadQuestions(1, 5)) - 1]
  ].slice(0, 4);//set the max items

  const handleNext = () => {
    if (showedQuestion === shuffledAndSelectedQuestions.length - 1) {
      console.log("end of quiz");
      return null;
    } else {
      setShowedQuestion((prev) => prev + 1);
    }

  };

  const handleCheck = () =>{
    inputSubmitRef.current.disabled = !inputSubmitRef.current;
  }

  return (
    <div className={styles.multipleChoice_container}>
      <Header/>
      <div className={styles.quiz_container}>
      <h1>Select Subject</h1>
      {/* {
        multipleChoiceQuestions.map((item:any,index)=> (
          <React.Fragment key={index}>
            <button onClick={()=>handleSelectTopic(item)}>{item.Category}</button>
          </React.Fragment>
        ))
      }, */}
      
       <form action="submit" onSubmit={handleSubmit}>
        <h2>{multipleChoiceQuestions[0].Items[showedQuestion].Question}</h2>
        {multipleChoiceQuestions[0].Items[showedQuestion].Choices.map(
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
        
    </div>
  )
}
