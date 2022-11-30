import { useNavigate } from "react-router-dom"
import { selected } from "../../../reducers/course_slice";
import styles from './style.module.scss'
import { courses } from "../../../global/data";
import { useAppDispatch,useAppSelector } from "../../../reducers/hooks";
// import {setMappedTopic} from '../../../reducers/mapped_course_slice'
import React, { useEffect } from "react";
import { stringify } from "querystring";
import { Left_sidebar } from "./left_sidebar";
import { Header } from "./header";
export const MainPage = () =>{
    const navigate = useNavigate()
    const dispatch = useAppDispatch();
    const selectedCourse = useAppSelector(state=> state.myMappedCourse.selectedCourse)

    const handle_route_home = () =>{
        navigate('/')
        dispatch(selected(""));
    }
    
    return(
        <div className={styles.main_page}>
            <Header/> 
            <section>   
                <Left_sidebar/> 
                <div className={styles.wrapper}>  
                {
                    selectedCourse.map((item,index)=>(
                        <React.Fragment key={index}>
                            <header>
                                {item.Title}
                            </header>
                            <div className={styles.topic_desc}>{item.Desc}</div>
                        </React.Fragment>
                    ))
                }
                {
                    selectedCourse.map((item,index)=>(
                        <React.Fragment key={index}>
                            <header>
                                {item.Title}
                            </header>
                            <div className={styles.topic_desc}>{item.Desc}</div>
                        </React.Fragment>
                    ))
                }
                {
                    selectedCourse.map((item,index)=>(
                        <React.Fragment key={index}>
                            <header>
                                {item.Title}
                            </header>
                            <div className={styles.topic_desc}>{item.Desc}</div>
                        </React.Fragment>
                    ))
                }{
                    selectedCourse.map((item,index)=>(
                        <React.Fragment key={index}>
                            <header>
                                {item.Title}
                            </header>
                            <div className={styles.topic_desc}>{item.Desc}</div>
                        </React.Fragment>
                    ))
                }
                </div>
            </section>    
        </div>
    )
}