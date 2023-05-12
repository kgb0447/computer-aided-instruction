import React from 'react'
import headerStyle from './Header.module.scss'
import { common } from '../../constants/common/common'

export default function Header() {
  return (
    <header className={headerStyle.headerWrapper}>
        <h2 className={headerStyle.title}>{common.project_name}</h2>
        <nav className={headerStyle.navigation}>
            <div className={headerStyle.navItem}>Home</div>
            <div className={headerStyle.navItem}>Tutorials</div>
            <div className={headerStyle.navItem}>FAQs</div>
            <div className={headerStyle.navItem}>About</div>
        </nav>
    </header>
  )
}
