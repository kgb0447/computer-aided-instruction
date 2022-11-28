import { useNavigate } from "react-router-dom"
import { selected } from "../../../reducers/course_slice";
import styles from './style.module.scss'
import { courses } from "../../../global/data";
import { useAppDispatch,useAppSelector } from "../../../reducers/hooks";
// import {setMappedTopic} from '../../../reducers/mapped_course_slice'
import { useEffect } from "react";
import { stringify } from "querystring";
import { Left_sidebar } from "./left_sidebar";
export const MainPage = () =>{
    const navigate = useNavigate()
    const dispatch = useAppDispatch();
    const selected_mapped_course = useAppSelector(state => state.mapped_course.course_topics)

    const handle_route_home = () =>{
        navigate('/')
        dispatch(selected(""));
    }

    // useEffect(() => {
    //  dispatch(setMappedTopic())
    // }, [])
    console.log(selected_mapped_course,"Test")
    
    return(
        <div className={styles.main_page}>
            {/* <button onClick={()=> dispatch(setMappedTopic())}>ddd</button> */}
            {/* {selected_mapped_course.map((item:any,index)=> (
                <div>
                    <h2>{}</h2>
                </div>
            ))} */}
            <Left_sidebar/>
           
        </div>
    )
}