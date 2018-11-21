import React, { Component } from 'react';

//分类导入
import { NavRed } from 'components/common/navred'

//滚动图
import Swiper from './Swiper'

//样式组件
import {
    RemDiv,
    Title,
    ThemeWrap,
    ThemeItem
} from './styledComponents'

//分类图片导入
import Fm from 'assets/images/aud.svg'
import date from 'assets/images/date.svg'
import muli from 'assets/images/muli.svg'
import order from 'assets/images/order.svg'





class Recommend extends Component{
    constructor(){
        super()
        this.state = {
            classical:[
                {
                  url:Fm,
                  text:'私人FM'
                },
                {
                 url:date,
                 text:'每日推荐'
               },
               {
                 url:muli,
                 text:'歌单'
               },
               {
                 url:order,
                 text:'排行榜'
               },
               ]
        }
    }

    render(){
        return (
            <div>
                <RemDiv></RemDiv>
                <Swiper></Swiper>

                <NavRed data={this.state.classical}></NavRed>
                {/* music-classical */}
                <Title>推荐歌单</Title>
                <ThemeWrap>
                     <ThemeItem>
                        <img className="active" src="http://p4.music.126.net/MHiEn1Gw-_KyMRBW3CyLGA==/109951163568447243.jpg?param=120y120" alt=""/>
                        <p>井口附近上空算了到付即可</p>
                    </ThemeItem> 
                    <ThemeItem>
                        <img className="active" src="http://p4.music.126.net/MHiEn1Gw-_KyMRBW3CyLGA==/109951163568447243.jpg?param=120y120" alt=""/>
                        <p>井口附近上空算了到付即可</p>
                    </ThemeItem> 
                    <ThemeItem>
                        <img className="active" src="http://p4.music.126.net/MHiEn1Gw-_KyMRBW3CyLGA==/109951163568447243.jpg?param=120y120" alt=""/>
                        <p>井口附近上空算了到付即可</p>
                    </ThemeItem> 
                    <ThemeItem>
                        <img className="active" src="http://p4.music.126.net/MHiEn1Gw-_KyMRBW3CyLGA==/109951163568447243.jpg?param=120y120" alt=""/>
                        <p>井口附近上空算了到付即可</p>
                    </ThemeItem> 
                </ThemeWrap>
            </div>
        )
    }
}

export default Recommend