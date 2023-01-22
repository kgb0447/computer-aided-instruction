
import { ImgConfig } from '../../../config/homepage/ImgConfig'
import { Video_Config } from '../../../config/homepage/Video_Config'
import styles from './style.module.scss'
import {useNavigate,useParams} from 'react-router-dom'
import { useAppDispatch,useAppSelector } from "../../../reducers/hooks"
import { Header } from "./components/header"
import { setSelectedCourse } from '../../../reducers/mapped_course_slice'
import classNames from 'classnames'
import { FloatRightCards } from '../main/componets/floatRightCards'
import { useContext,useEffect, useRef, useState } from 'react'
import HeaderV2 from '../../header'

export const Homepage = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const subjects = useAppSelector(state => state.myMappedCourse.courseSubject)
    const [scrollHeightState,setScrollHeightState] = useState(subjects.slice(0,subjects.length));
    const [mySelected,setMySelected] = useState(0)
   
    const itemRef = useRef([])

    const navigation :any = [
        "About",
        "FaQs",
        "Contact Us"
    ]
    

    // useEffect(()=>{
    //     scrollHeight.map((item,index)=>(
    //         //@ts-ignore
    //         scrollHeight[index] = itemRef.current[index].offsetTop - 50
    //     ))
    // },[])

    const scrollHandler = (element:any) => {
        if(itemRef.current[mySelected]){
            //@ts-ignore
            itemRef.current[element].scrollIntoView({block: "start",behavior:"smooth"})
        }
    } 
    const handleSelectCourse = (val: any) =>{
        const selected = subjects.filter(data => data === val)[0];
        const selectedIndex = subjects.indexOf(selected);
        return (
            navigate(`/mainpage/${val}`),
            console.log(selectedIndex,"Trrrrr"),
            dispatch(setSelectedCourse(selectedIndex))
        )
    }
console.log({id},"test Id");
    return(
        <div className={styles.home}>
            <HeaderV2 navigation={navigation}/>
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