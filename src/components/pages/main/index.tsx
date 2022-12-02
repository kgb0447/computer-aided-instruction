import { useNavigate } from "react-router-dom"
import { selected } from "../../../reducers/course_slice";
import styles from './style.module.scss'
import { useAppDispatch,useAppSelector } from "../../../reducers/hooks";
import React, { useEffect } from "react";
import { Left_sidebar } from "./left_sidebar";
import { Header } from "./header";
import { FloatRightCards } from "../home/components/floatRightCards";
import { useRef } from "react";
export const MainPage = () =>{
    const navigate = useNavigate()
    const dispatch = useAppDispatch();
    const selectedCourse = useAppSelector(state=> state.myMappedCourse.selectedCourse)
    const topicRef = useRef<any>([])

    useEffect(()=>{
        // return topicRef.current.splice(0,selectedCourse.length)
    },[])
    const handle_route_home = () =>{
        navigate('/')
        dispatch(selected(""));
    }
    const scrollToRef = (e: any) => {
        window.scrollTo({ 
          top: e.current.offsetTop, 
          behavior: "smooth" 
        });
      }
    console.log(topicRef.current,"ddd")
    return(
        <div className={styles.main_page}>
            <Header/> 
            <section>   
                <Left_sidebar/> 
                <div className={styles.wrapper}>  
                {
                    selectedCourse.map((item,index)=>(
                        <div key={index}>
                            <header ref={(el:any) => topicRef.current[index] = el}>
                                {item.Title}
                            </header>
                            <div className={styles.topic_desc}>{item.Desc}</div>
                        </div>
                    ))
                }
                </div>
                <FloatRightCards/>

                
            </section>
            
        </div>
    )
}