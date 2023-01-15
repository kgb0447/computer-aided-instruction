
import styles from './Timer.module.scss'
import { useState,useEffect } from 'react'
import { useAppDispatch,useAppSelector } from '../../../reducers/hooks'
import { startCountdown,stopCountDown,resetCountDown } from '../../../reducers/timer_slice'

export function Timer({resetTriger,handleNext}:{resetTriger:any,handleNext:any}) {
    const dispatch = useAppDispatch();
    const timer = useAppSelector(state => state.timerSlice.value);
    const [myTime,setMyTime] = useState<NodeJS.Timer|number>(0)

   useEffect(()=>{
      if(timer === 0){
        dispatch(stopCountDown());
        handleNext()
      } 
   },[timer])

   useEffect(():any => {
        setMyTime(setInterval(()=> dispatch(startCountdown()),1000));
        dispatch(resetCountDown())
      }
   ,[])

  return (
    <div className={styles.timer_container}>
        <div className={styles.time_label}>Time Remaining:</div>
        <div className={styles.time}>{timer}</div>
    </div>
  )
}
