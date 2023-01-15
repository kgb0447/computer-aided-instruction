import React from 'react'
import styles from './Modal.module.scss'
import { useNavigate } from 'react-router-dom'
interface ModalPropTypes {
    inheritedState: number;
    message: string,
    inheritedStateDispatch?: any
}
export const Modal  = ({
    inheritedState = 0,
    message,
    inheritedStateDispatch,
} : ModalPropTypes)=> {

    const{setShowScore,setScoreState} = inheritedStateDispatch;
    const naviagate = useNavigate()
    const handleCloseModal = () => {
        setShowScore(false)
        naviagate('/quizPage');
        setScoreState(0)

    }
    const handleTryAgain = () => {
        inheritedStateDispatch.setShowScore(false);
        window.location.reload()
    }

  return (
    <div className={styles.modal_overlay}>
        <div className={styles.modal_container}>
            <header className={styles.modal_header}>
                <h1>{message}</h1> 
            </header>
            <section>
                <p>{inheritedState}</p>
                <div className={styles.button_wrapper}>
                    <button className={styles.try_again} onClick={handleTryAgain}>Try Again</button>
                    <button className={styles.close} onClick={handleCloseModal}>Close</button>
                </div>
            </section>
        </div>
    </div>
  )
}
