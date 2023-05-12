import React from 'react'
import cs from 'classnames'
import { useNavigate } from 'react-router-dom'
import navBtnStyle from './NavBtn.module.scss'
import homeStyle from '../../pages/home/Home.module.scss'

interface navBtnPropTypes {
    label: string,
    path?: string,
    inheritStyle?: any
}

export default function NavBtn({
    label, 
    path="/",
    inheritStyle = {}
} : navBtnPropTypes) {
    const testChild = cs(navBtnStyle.navBtnWrapper,inheritStyle)
    const navigate = useNavigate();
    const handleNavigation = () => {
        navigate(path);
    }
  return (
    <div className={ cs(navBtnStyle.navBtnWrapper,inheritStyle)} onClick={handleNavigation} >{label}</div>
  )
}
