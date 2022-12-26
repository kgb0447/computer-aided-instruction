import React from 'react'
import styles from './Timer.module.scss'
import { useState,useEffect,useRef } from 'react'
import { useAppDispatch } from '../../../reducers/hooks'

export function Timer() {
    const [time,setTime] = useState(10)
    const [isStartTimer,setIsStartTimer] = useState(false);
    const [myTime,setMyTime] = useState(0)


    useEffect(() => {
        let interval : any= null;
        if(isStartTimer){
            interval = setInterval(()=>{
                setTime(prev=> prev -= 1)
            },1000)

            setMyTime(interval)
        }
        else{
            clearInterval(myTime)
        }
    }, [])
    

   const startCountDown = () => {
    setIsStartTimer(true)
   }
   const stopCountDown = () => {
    setIsStartTimer(false)
    setTime(10 + time)
   }
  return (
    <div className={styles.timer_container}>
        <div className={styles.time_label}>Time Remaining:</div>
        <div className={styles.time}>{time}</div>
        {/* <button onClick={startCountDown}>Start</button>
        <button onClick={stopCountDown}>Stop</button> */}
    </div>
  )
}
