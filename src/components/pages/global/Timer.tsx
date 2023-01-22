
import styles from './Timer.module.scss'
import { useState,useEffect } from 'react'
import { useAppDispatch,useAppSelector } from '../../../reducers/hooks'
import { startCountdown,stopCountDown,resetCountDown } from '../../../reducers/timer_slice'

interface TimerTypes{
  resetTriger : any,
  handleNext: any
}
export function Timer({resetTriger,handleNext}:TimerTypes) {
    const dispatch = useAppDispatch();
    const timer = useAppSelector(state => state.timerSlice.value);
    const [myTime,setMyTime] = useState<NodeJS.Timer|number>(0);
   
  

   useEffect(()=>{
      if(timer === 0){
        dispatch(stopCountDown());
        handleNext()
      }

      return () => {
        setMyTime(0);
      }
   },[timer])

   useEffect(():any => {
    const interval = setInterval(()=> dispatch(startCountdown()),1000);
        setMyTime(interval);
        dispatch(resetCountDown());
      return () => {
        setMyTime(timer)
      }
    },[])

  return (
    <div className={styles.timer_container}>
        <div className={styles.time_label}>Time Remaining:</div>
        <div className={styles.time}>{timer}</div>
    </div>
  )
}