import React from 'react'
import classNames from 'classnames'
import NavBtn from '../../components/btn/NavBtn'
import Cards from '../../components/container/Cards'
import CardSlider from '../../components/slider/CardSlider'
import { common } from '../../constants/common/common'
import homeStyle from './Home.module.scss'

export default function Home() {
  return (
    <div className={homeStyle.contianer}>
      <section>
        <div className={homeStyle.greeting}>
          Learn new 
          <p className={homeStyle.middle}> things and</p> 
          <p className={homeStyle.bottom}> explore more</p>
          <div className={homeStyle.btnWrapper}>
            <NavBtn label={common.start} path={'/tutorials'} inheritStyle={homeStyle.startBtn} />
            <NavBtn label={common.followForMore} path={'/tutorials'} inheritStyle={homeStyle.followBtn} />
          </div>
        </div>
        <CardSlider inheritedStyle={homeStyle.homeStyleSlider} autoplay={true} />
      </section>
        <Cards/>
        <section></section>
    </div>
  )
}
