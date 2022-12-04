import { useRoutes } from "react-router-dom"
import { Homepage } from "../pages/home"
import { ErrorPage } from "../pages/errorpage/ErrorPage"
import { MainPage } from "../pages/main"

export const Routes =()=>{
    const myRuotes = useRoutes( 
        [
            {
                path: '/',
                element: <Homepage/>
            },
            {
                path: '/mainpage/:id',
                element: <MainPage/>
            },
            {
                path:'*',
                element: <ErrorPage/>
            }

        ]
        
    )
    return myRuotes;
} 