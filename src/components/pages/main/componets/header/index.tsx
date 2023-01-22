import styles from './styles.module.scss'
import { useAppSelector } from '../../../../../reducers/hooks'
import { setSelectedCourse } from '../../../../../reducers/mapped_course_slice'
import { useAppDispatch } from '../../../../../reducers/hooks'
import {AiFillHome} from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import {common} from '../../../../../data/common'
import {useContext} from 'react'
import ScrollContext from '../../../home/context/scrollContext'

export const Header = () =>{
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const courseSubjects = useAppSelector(state=> state.myMappedCourse.courseSubject)
    const subjects = useAppSelector(state => state.myMappedCourse.courseSubject)
    const scrollContext = useContext(ScrollContext);
    
    const handleSelectCourse = (val: any) =>{
      const selected = subjects.filter(data => data === val)[0];
      const selectedIndex = subjects.indexOf(selected);
      return (
        navigate(`/mainpage/${val}`),
        console.log(selectedIndex,"Trrrrr"),
        dispatch(setSelectedCourse(selectedIndex)),
        scrollContext.scrollHandler(0)
      )
    }
  
    const handleNavigateHome = () => {
      navigate('/')
    }

    return(
        <div className={styles.header}>
            <AiFillHome className={styles.home_icon} onClick={handleNavigateHome}/>
              <h2>{common.Project_Title}</h2>
            <nav>
                {
                courseSubjects.map((item,index)=>(
                    <div key={index} onClick={()=> handleSelectCourse(item)}>{item}</div>
                ))
                }
            </nav>
        </div>
    )
}