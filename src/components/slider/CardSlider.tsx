import React, { useEffect, useRef, useState } from 'react'
import { Card, Carousel} from 'antd'
import img1 from '../../assets/img/slider/slide1.jpg'
import img2 from '../../assets/img/slider/slide2.jpg'
import img3 from '../../assets/img/slider/slide3.jpg'
import img4 from '../../assets/img/slider/slide4.jpg'
import img5 from '../../assets/img/slider/slide5.jpg'
import cs from 'classnames'
import sliderStyle from './CardSlider.module.scss';
import Meta from 'antd/es/card/Meta'

interface sliderPropTypes {
  data ?: any,
  inheritedStyle?: any,
  showArrow?:boolean
  autoplay?:boolean,
  hasHoverEffec?:boolean
}
export default function CardSlider({data,inheritedStyle,autoplay = true,showArrow = false,hasHoverEffec=false} : sliderPropTypes) {
  const sliderImg = [img1,img2,img3,img4,img5];
  const [isshowCards,setIsShowCards] = useState(false);
  const cardRef = useRef<any>([]);

  const setCarDisplay = (isOn:boolean) => {
    if(isOn) {
      setIsShowCards(true)
    } else {
      setIsShowCards(false)
    }
  }
  console.log(cardRef,"current")

  return (  
    <div className={cs(sliderStyle.sliderWrapper,inheritedStyle)} onMouseEnter={()=> setCarDisplay(true)}
    onMouseLeave={()=> setCarDisplay(false)}
      >
        {/* <LeftOutlined className={cs(sliderStyle.arrowIcons,sliderStyle.left)} 
          style={setArrowDisplay()}
          /> */}
        <Carousel autoplay={autoplay} arrows={showArrow}>
          {
            sliderImg.map((item,index) => (
              <div key={item + index} className={sliderStyle.sliderItemContainer}  >
                <img className={sliderStyle.item} src={item} alt="" />
                  
                  { hasHoverEffec ? (
                    <Card hoverable={true} cover={
                      <h1>Study</h1>
                    }>
                      <Meta title={"Testss"} description="www.instagram.com" /> 
                    </Card>
                    ) : null
                  }
              </div>
            ))
          }
        </Carousel>
        {/* <RightOutlined className={cs(sliderStyle.arrowIcons,sliderStyle.right)} style={setArrowDisplay()} /> */}
    </div>
  )
}
