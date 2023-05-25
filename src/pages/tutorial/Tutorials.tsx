import React, { useState } from 'react'
import { Drawer } from 'antd'
import tutorialStyle from './Tutorials.module.scss'
import NavBtn from '../../components/btn/NavBtn';
import CardSlider from '../../components/slider/CardSlider';

export default function Tutorials() {
  const [isOpen,setIsOpen] = useState<boolean>(false);
  const [isShow,setIsShow] = useState<boolean>(false)

  const onClose = () => {
    setIsOpen(false);
  };
  return (
    <div className={tutorialStyle.container}>
      <CardSlider inheritedStyle={tutorialStyle.tuturialSlider} 
        showArrow={true} hasHoverEffec={true} 
          autoplay={false}/>
      {/* <Drawer title={"Topics"}
       placement="left"  open={isOpen}
      //  onClose={onClose}
       getContainer={false}
       maskStyle={{backgroundColor:'yellow',width:"0px"}}
       className={tutorialStyle.leftNav}
      >
        <div className={tutorialStyle.items}>dfdfdfdfdfdf</div>
        <div className={tutorialStyle.items}>dfdfdfdfdfdf</div>
        <div className={tutorialStyle.items}>dfdfdfdfdfdf</div>
        <div className={tutorialStyle.items}>dfdfdfdfdfdf</div>
      </Drawer>
      <button onClick={()=> setIsOpen(true)}>Test</button> */}
    </div>
  )
}
