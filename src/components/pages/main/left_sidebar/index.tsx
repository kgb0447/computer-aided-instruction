import styles from './style.module.scss'
import { useAppSelector } from '../../../../reducers/hooks'
import { courses } from '../../../../global/data'
export const Left_sidebar = () =>{
  const course_topics = useAppSelector(state=> state.mapped_course.course_topics)

  const map1 =  courses[0].Topics.map(item=> item.Title);
  console.log(map1,"@@@");

    return(
        <div className={styles.left_sidebar}>
           {
            
           }
        </div>
    )
}