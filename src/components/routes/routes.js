import { useRoutes } from "react-router-dom"
import { Homepage } from "../pages/home"
import { ErrorPage } from "../pages/errorpage/ErrorPage"
import { MainPage } from "../pages/main"
import MultipleChoice from "../pages/quiz/multipleChoice"
import Quizes from "../pages/quiz"
import TrueOrFalse from "../pages/quiz/trueOrfalse"
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
                path: '/quizPage',
                element: <Quizes/>
            },
            {
                path: '/multipleChoice/:id',
                element: <MultipleChoice/>
            },
            {
                path: '/trueOrfalse',
                element: <TrueOrFalse/>
            },
            {
                path:'*',
                element: <ErrorPage/>
            }
            

        ]
        
    )
    return myRuotes;
} 