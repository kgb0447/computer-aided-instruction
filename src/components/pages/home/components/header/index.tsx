import styes from './style.module.scss'
import {common} from '../../../../../data/common'
export const Header = () => {
    return(
        <div className={styes.header}>
            <header>{common.Project_Title}</header>
            <nav>
                <button>Home</button>
                <button>About</button>
                <button>FAQs</button>
            </nav>
        </div>
    )
}