import React from 'react'
import { Header } from '../main/componets/header'
import styles from './style.module.scss'
import { useNavigate } from 'react-router-dom'
import { common } from '../../../data/common'
export default function Quizes() {
    const navigate = useNavigate();
  return (
    <div className={styles.quiz_container}>
        <Header/>
        <header>
            <h1>{common.quizIntroduction}</h1>
            <h2>{common.quizQoute}</h2>
        </header>
        <div className={styles.button_wrapper}>            
            <button onClick={()=>navigate('/multipleChoice')}>{common.multipleChoice}</button>
            <button onClick={()=>navigate('/trueOrfalse')}>{common.trueOrfalse}</button>
        </div>
        
    </div>
  )
}
