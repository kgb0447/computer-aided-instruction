import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AnyAction } from 'redux'
import { useAppDispatch, useAppSelector } from '../../reducers/hooks';
import { setSelectedCourse } from '../../reducers/mapped_course_slice';
import { DISPLAYED_TEXTS } from '../../utils/const'
import ScrollContext from '../pages/home/context/scrollContext';
import styles from './header.module.scss'

export default function HeaderV2({navigation} : {navigation: any}) {

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
      dispatch(setSelectedCourse(selectedIndex)),
      scrollContext.scrollHandler(0)
    )
  }
  return (
    <div className={styles.header}>
      <h1>{DISPLAYED_TEXTS.PROJECT_TITLE}</h1>
      <nav>
        {
          navigation.map((item:string,index: number) => (
            <div className={styles.navItems} key={item + index} onClick={()=> handleSelectCourse(item)}>{item}</div>
          ))
        }
      </nav>
    </div>
  )
}
