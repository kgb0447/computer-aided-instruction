import { useNavigate } from "react-router-dom"
import { useAppDispatch,useAppSelector } from "../reducers/hooks"
import { setSelectedCourse } from "../reducers/mapped_course_slice";
import { useEffect } from "react";
export const useMappedButton = (val:any) =>{

    const subjects = useAppSelector(state => state.myMappedCourse.courseSubject)
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
   
    const handleSelectCourse = () => {
        const selected = subjects.filter(data => data === val)[0];
        const selectedIndex = subjects.indexOf(selected);
        return (
            navigate(`/mainpage/${val}`),
            console.log(selectedIndex,"Trrrrr"),
            dispatch(setSelectedCourse(selectedIndex))
        )
    }
    
    
    return handleSelectCourse
   
}