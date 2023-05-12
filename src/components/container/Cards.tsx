import React from 'react'
import containerStyles from './Cards.module.scss'
import img1 from '../../assets/img/slider/slide1.jpg';
import { Card } from 'antd'
import Meta from 'antd/es/card/Meta';
import Title from '../titles/Title';

export default function Container() {
  return (
    <div className={containerStyles.wrapper}>
        <Title title='Subjects' />
        <section className={containerStyles.cardContainer}>
         <Card cover={<img src={img1} alt='' />}>
            <Meta title={"Test"} description="www.instagram.com" /> 
         </Card>
         <Card cover={<img src={img1} alt='' />}>
            <Meta title={"Test"} description="www.instagram.com" /> 
         </Card>
         <Card cover={<img src={img1} alt='' />}>
            <Meta title={"Test"} description="www.instagram.com" /> 
         </Card>
         <Card cover={<img src={img1} alt='' />}>
            <Meta title={"Test"} /> 
         </Card>
         <Card cover={<img src={img1} alt='' />}>
            <Meta title={"Test"} /> 
         </Card>
        </section>
    </div>
  )
}
