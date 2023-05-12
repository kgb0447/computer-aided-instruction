import React, { useState } from 'react'
import { Drawer } from 'antd'
import tutorialStyle from './Tutorials.module.scss'

export default function Tutorials() {
  const [isOpen,setIsOpen] = useState<boolean>(false);

  const onClose = () => {
    setIsOpen(false);
  };
  return (
    <div className={tutorialStyle.container}>
      <Drawer title={"Topics"}
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
      <button onClick={()=> setIsOpen(true)}>Test</button>
    </div>
  )
}
