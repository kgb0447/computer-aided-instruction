import styles from './style.module.scss'
import { common } from '../../../../../data/common'
import { useNavigate } from 'react-router-dom'
export const FloatRightCards = () =>{
    const navigate = useNavigate();
    return(
        <div className={styles.floatRightCards}>
            <div className={styles.card}>
                <header>
                    <h2>{common.Feature}</h2>
                </header>
                <button onClick={()=>navigate('/quizPage')}>{common.takeQuiz}</button>
                <button>{common.watchVideo}</button>
                <button onClick={() => navigate('/codePage')}>{common.practiceCode}</button>
            </div>
            <div className={styles.button_wrapper}>
            
            </div>
        </div>
    )
}