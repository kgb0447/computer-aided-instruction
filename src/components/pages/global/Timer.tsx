import React from 'react'
import styles from './Timer.module.scss'
import { useState,useEffect,useRef } from 'react'
import { useAppDispatch,useAppSelector } from '../../../reducers/hooks'
import { startCountdown,stopCountDown,resetCountDown } from '../../../reducers/timer_slice'

export function Timer({resetTriger,handleNext}:{resetTriger:any,handleNext:any}) {
    const dispatch = useAppDispatch();
    const timer = useAppSelector(state => state.timerSlice.value);
    const isTimerStart = useAppSelector(state => state.timerSlice.isStart)
    const [time,setTime] = useState(10)
    const [isStart,setIsStart] = useState(true)
    const [myTime,setMyTime] = useState<any>(0)


    

    
   const startCountDown = () => {
    setMyTime(setInterval(()=> dispatch(startCountdown()),1000));
    dispatch(resetCountDown())
    return resetTriger(handleNext())
   }

   useEffect(()=>{
      if(timer === 0 ){
        clearInterval(myTime);
      } 
      
   },[timer])

   const stopCountDowns = () =>{
    dispatch(stopCountDown())
   }
  return (
    <div className={styles.timer_container}>
        <div className={styles.time_label}>Time Remaining:</div>
        <div className={styles.time}>{timer}</div>
        <button onClick={startCountDown}>Start</button>
        <button onClick={stopCountDowns}>Stop</button>
    </div>
  )
}
