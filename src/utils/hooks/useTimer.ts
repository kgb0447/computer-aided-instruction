import React,{useState,useRef,useEffect,useMemo} from 'react'

function useTimer(init:number) {
  const [time,setTime] = useState<number>(init);
  const timeRef = useRef<any>(null);

  const clearTimer = () =>{
    clearTimeout(timeRef.current);
    timeRef.current = null;
  }

  useEffect(() => {
    timeRef.current = setTimeout(() => {
        if (time > 0) {
            setTime((prev : number) => prev - 1);
        }
    },1000)
  
    return () => {
      clearTimeout(timeRef.current);
      timeRef.current = null;
    }
  }, [time])

  return {time,setTime,clearTimer}
  
}

export default useTimer