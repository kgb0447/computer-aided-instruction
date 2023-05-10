import React from 'react'
import { Carousel} from 'antd'
import img1 from '../../assets/img/slider/jet_fighter.jpg'
import img2 from '../../assets/img/slider/jet_fighter2.jpg'
import sliderStyle from './Slider.module.scss';

export default function Slider() {
  return (
    <div className={sliderStyle.sliderWrapper}>
        <Carousel autoplay>
           <div className={sliderStyle.sliderItemContainer}>
            <img className={sliderStyle.item} src={img1} alt="" />
           </div>
           <div className={sliderStyle.sliderItemContainer}>
                <img className={sliderStyle.item} src={img2} alt="" />
           </div>
           
        </Carousel>
    </div>
  )
}
