import React from 'react'
import { Carousel} from 'antd'
import img1 from '../../assets/img/slider/slide1.jpg'
import img2 from '../../assets/img/slider/slide2.jpg'
import img3 from '../../assets/img/slider/slide3.jpg'
import img4 from '../../assets/img/slider/slide4.jpg'
import img5 from '../../assets/img/slider/slide5.jpg'
import sliderStyle from './CardSlider.module.scss';

export default function CardSlider() {
  const sliderImg = [img1,img2,img3,img4,img5];
  return (  
    <div className={sliderStyle.sliderWrapper}>
        <Carousel autoplay>
          {
            sliderImg.map((item,index) => (
              <div key={item + index} className={sliderStyle.sliderItemContainer}>
                <img className={sliderStyle.item} src={item} alt="" />
              </div>
            ))
          }
        </Carousel>
    </div>
  )
}
