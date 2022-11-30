
import { ImgConfig } from '../../../config/homepage/ImgConfig'
import { Video_Config } from '../../../config/homepage/Video_Config'
import { useEffect, useState } from "react"
import styles from './style.module.scss'
import { courses } from "../../../global/data"
import {useNavigate,useParams} from 'react-router-dom'
import { useAppDispatch,useAppSelector } from "../../../reducers/hooks"
import { selected } from "../../../reducers/course_slice"
import { Header } from "./components/header"
import { setSelectedCourse } from '../../../reducers/mapped_course_slice'

export const Homepage = () => {
    const selected_Course = useAppSelector(state => state.myCourse.value);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const subjects = useAppSelector(state => state.myMappedCourse.courseSubject)
    const x = useAppSelector(state => state.myMappedCourse.selectedCourse)
    console.log(x,"test")

    console.log(courses[1].Topics,"TTTTTT")
    
    const handleSelectCourse = (val: any) =>{
        const selected = subjects.filter(data => data === val)[0];
        const selectedIndex = subjects.indexOf(selected);
        return (
            navigate(`/mainpage/${val}`),
            console.log(selectedIndex,"Trrrrr"),
            dispatch(setSelectedCourse(selectedIndex))
        )
    }



    return(
        <div className={styles.home}>
            <Header/>
            <video src={Video_Config.home_bg_video} autoPlay muted loop></video>
            <div className={styles.content_wrapper}>
                {
                subjects.map((item,index)=>(
                    <button key={index} onClick={()=>handleSelectCourse(item)}>{item}</button>
                ))
            }
            
            </div>
            <img src={ImgConfig.home_main_bg} alt="" />
        </div>
    )
}