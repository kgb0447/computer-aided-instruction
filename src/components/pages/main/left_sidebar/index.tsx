import styles from './style.module.scss'
import { useAppSelector } from '../../../../reducers/hooks'
import { courses } from '../../../../global/data'
import { useEffect,useState } from 'react'
import { setCourseSubject,setSelectedCourse } from '../../../../reducers/mapped_course_slice'
import { useAppDispatch } from '../../../../reducers/hooks'
export const Left_sidebar = () =>{
  const dispatch = useAppDispatch();
  const courseSubjects = useAppSelector(state=> state.myMappedCourse.courseSubject)
  const selectedCourse = useAppSelector(state=> state.myMappedCourse.selectedCourse)
  const [myState,setMyState] = useState<React.SetStateAction<any|null>>(null);

  // console.log(first)

  const handleSelect = (item : string) => {
    setMyState(courseSubjects.filter(data=> item === data)[0])
    // console.log(myState,"Statet")
  }
  console.log(selectedCourse,"Statet")
  console.log(courses[1],"Test data");
  console.log(courseSubjects.indexOf(myState),"ss")
 

    return(
        <div className={styles.left_sidebar}>
           <ul>
            {
              selectedCourse.map((item,index) => (
                <li key={index}>
                    {item.Title}
                </li>
              ))
            }
           </ul>
        </div>
    )
}