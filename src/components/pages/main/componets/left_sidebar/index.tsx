import styles from './style.module.scss'
import { useAppSelector } from '../../../../../reducers/hooks'
import { useContext,useState } from 'react'
import {ScrollContext} from '../../../home/context/scrollContext'
import classNames from 'classnames'

export const Left_sidebar = () =>{
  const courseSubjects = useAppSelector(state=> state.myMappedCourse.courseSubject)
  const selectedCourse = useAppSelector(state=> state.myMappedCourse.selectedCourse)
  const [myState,setMyState] = useState<React.SetStateAction<any|null>>(null);
  const scrollContext = useContext(ScrollContext); 
  const [isActive,setIsActive] = useState(false)

  const handleSelect = (item : string) => {
    setMyState(courseSubjects.filter(data=> item === data)[0])
  }
  const handleClick = (item:number) => {
    scrollContext.scrollHandler(item)
    setIsActive(!isActive)
  }
    return(
        <div className={styles.left_sidebar}>
           <ul>
            {
              selectedCourse.map((item,index) => (
                <li key={index} onClick={()=>handleClick(index)} className={classNames({'active': isActive})}>
                    {item.Title}
                </li>
              ))
            }
           </ul>
        </div>
    )
}