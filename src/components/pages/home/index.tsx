
import { ImgConfig } from '../../../config/homepage/ImgConfig'
import { Video_Config } from '../../../config/homepage/Video_Config'
import { useEffect, useState } from "react"
import styles from './style.module.scss'
import { courses } from "../../../global/data"
import {useNavigate,useParams} from 'react-router-dom'
import { useAppDispatch,useAppSelector } from "../../../reducers/hooks"
// import { selectCourse } from "../../../reducers/course_slice"
import { selected } from "../../../reducers/course_slice"
import { Header } from "./components/header"
export const Homepage = () => {
    const selected_Course = useAppSelector(state => state.myCourse.value);
    const navigate = useNavigate();


    
    const handleSelectCourse = (val: any) =>{
        return navigate(`/mainpage/${val}`)        
    }


    return(
        <div className={styles.home}>
            <Header/>
            <video src={Video_Config.home_bg_video} autoPlay muted loop></video>
            <div className={styles.content_wrapper}>
                {
                courses.map((item,index)=>(
                    <button key={index} onClick={()=>handleSelectCourse(item.Subject)}>{item.Subject}</button>
                ))
            }
            
            </div>
            <img src={ImgConfig.home_main_bg} alt="" />
        </div>
    )
}