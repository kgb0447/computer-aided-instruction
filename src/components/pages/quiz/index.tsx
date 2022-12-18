import { useState }from 'react'
import { Header } from '../main/componets/header'
import styles from './style.module.scss'
import { useNavigate } from 'react-router-dom'
import { common } from '../../../data/common'
import { multipleChoiceQuestions } from '../../../data/multipleChoiceQuestions'
export default function Quizes() {
    const navigate = useNavigate();
    console.log(multipleChoiceQuestions)
    const [category,setCategory] = useState<boolean>(false);
    const handleSelectCategory = () =>{
      setCategory(true)
    }
    const handleStartQuiz = (arrValue:string) =>{
      
      const selected = multipleChoiceQuestions.filter((item:any)=> arrValue === item)[0].Category;
      console.log(selected,"test sleect");
      navigate(`/multipleChoice/${selected}`)
    }
  return (
    <div className={styles.quiz_container}>
        <Header/>
        {
          !category ? (
            <>
              <header>
                <h1>{common.quizIntroduction}</h1>
                <h2>{common.quizQoute}</h2>
              </header>
              <div className={styles.button_wrapper}>            
                  <button onClick={handleSelectCategory}>{common.multipleChoice}</button>
                  <button onClick={()=>navigate('/trueOrfalse')}>{common.trueOrfalse}</button>
              </div>
            </>
          ) : null
        }
        
        <ul>
        {
          category ? (
            multipleChoiceQuestions.map((item:any,index:number)=>(
              <li key={index} onClick={()=>handleStartQuiz(item)}>{item.Category}</li>
            ))
          ) : null
        }
        </ul>
    </div>
  )
}
