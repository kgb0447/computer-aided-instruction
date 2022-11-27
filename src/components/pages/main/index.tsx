import { useNavigate } from "react-router-dom"
import { useAppDispatch } from "../../../reducers/hooks";
import { selected } from "../../../reducers/course_slice";
export const MainPage = () =>{
    const navigate = useNavigate()
    const dispatch = useAppDispatch();
    const handle_route_home = () =>{
        navigate('/')
        dispatch(selected(""));
    }
    return(
        <div>
            <button onClick={handle_route_home}>Back Home</button>
        </div>
    )
}