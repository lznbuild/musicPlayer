import React, { Component } from 'react';

//轮播
import Swiper from 'components/common/swiper/Swiper'

//样式
import {
    Wrap
} from './styledComponent'

import { NavRed } from 'components/common/navred'


//分类图片导入
import Fm from 'assets/images/dt1.svg'
import date from 'assets/images/dt2.svg'
import muli from 'assets/images/dt3.svg'
import order from 'assets/images/dt4.svg'


class RadioStation extends Component{
   constructor(){
       super()
       this.state = {
        classical:[
            {
              url:Fm,
              text:'电台分类'
            },
            {
             url:date,
             text:'电台排行'
           },
           {
             url:muli,
             text:'DI电音'
           },
           {
             url:order,
             text:'小冰电台'
           },
        ],
        imgList:[
            "http://p1.music.126.net/-yYeYRIirwIvECnKfgK0bQ==/109951163680811399.jpg",
           "http://p1.music.126.net/7l6ieGb1oXP3lCMsf0Twxw==/109951163680828650.jpg",
            "http://p1.music.126.net/cOOB3zk7XjCEUcMaRphV9Q==/109951163680412559.jpg",
            "http://p1.music.126.net/CQiKmGlXq8oUSrhUN8Ayrw==/109951163680705969.jpg"
        ]
       }
   }

    render(){
        return (
            <div>
                <Wrap>
                    <Swiper imgList={this.state.imgList}></Swiper>
                </Wrap>
                <NavRed data={this.state.classical}></NavRed>
            </div>

        )
    }
}

export default RadioStation