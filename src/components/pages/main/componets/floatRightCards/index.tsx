import styles from './style.module.scss'
import { common } from '../../../../../data/common'
export const FloatRightCards = () =>{
    return(
        <div className={styles.floatRightCards}>
            <div className={styles.card}>
                <header>
                    <h2>{common.Feature}</h2>
                </header>
                <button>{common.takeQuiz}</button>
                <button>{common.watchVideo}</button>
                <button>{common.practiceCode}</button>
            </div>
            <div className={styles.button_wrapper}>
            
            </div>
        </div>
    )
}