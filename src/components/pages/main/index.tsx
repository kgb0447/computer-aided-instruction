import styles from './style.module.scss'
import { useAppSelector } from "../../../reducers/hooks";
import { useRef } from "react";
import { Left_sidebar } from "./componets/left_sidebar/index";
import { Header } from "./componets/header";
import { ScrollContext } from "../home/context/scrollContext";
import { FloatRightCards } from "./componets/floatRightCards";
import HeaderV2 from '../../header';
import { courses } from '../../../global/data';
export  interface UserProps{
    scrollHandler: any,
    handler:any
}
export const MainPage = () =>{

    const GET_SUBJECTS = courses.map((item:any) => item.Subject);
    console.log(GET_SUBJECTS,"eddd");
    const itemsRef = useRef<any[]>([]);
    const selectedCourse = useAppSelector(state=> state.myMappedCourse.selectedCourse)

    const scrollHandler = (element:any) =>{
        itemsRef.current[element].scrollIntoView({
            block:"start",
            behavior:"smooth"
        });
    } 
  
    return(
        <div className={styles.main_page}>
            <ScrollContext.Provider value={{scrollHandler,itemsRef}}>
            <HeaderV2 navigation={GET_SUBJECTS}/>
            {/* <Header/> */}
            <section>   
                <Left_sidebar/> 
                <div className={styles.wrapper} >  
                {
                    selectedCourse.map((item,index)=>(
                        <div className={styles.item_wrapper} key={index} ref={(el:any) => itemsRef.current[index] = el} >
                            <header>
                                {item.Title}
                            </header>
                            <div className={styles.topic_desc}>{item.Desc}</div>
                        </div>
                    ))
                }
                </div>
                <FloatRightCards/>
            </section>
            </ScrollContext.Provider>
        </div>
    )
}