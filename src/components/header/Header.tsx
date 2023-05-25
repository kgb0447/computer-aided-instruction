import intl from 'react-intl-universal'
import React from 'react'
import headerStyle from './Header.module.scss'
import { common } from '../../constants/common/common'
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const navigate = useNavigate();
  const routeHome = () => {
    navigate('/')
  }
  return (
    <header className={headerStyle.headerWrapper}>
        <h2 className={headerStyle.title} onClick={routeHome}>{common.project_name}</h2>
        <nav className={headerStyle.navigation}>
          <div className={headerStyle.navItem}>{intl.get("ProjectName")}</div>
            <div className={headerStyle.navItem}>Tutorials</div>
            <div className={headerStyle.navItem}>FAQs</div>
            <div className={headerStyle.navItem}>About</div>
        </nav>
    </header>
  )
}
