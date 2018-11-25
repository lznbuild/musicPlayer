import React, { Component } from 'react';

//分类导入
import { NavRed } from 'components/common/navred'

//滚动图
import Swiper from 'components/common/swiper/Swiper'

//样式组件
import {
    RemDiv,
    Title,
    ThemeWrap,
    ThemeItem
} from './styledComponents'

//icon
import Icon from 'components/common/count/Count'

//分类图片导入
import Fm from 'assets/images/aud.svg'
import date from 'assets/images/date.svg'
import muli from 'assets/images/muli.svg'
import order from 'assets/images/order.svg'

import BScroll from 'better-scroll'

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
            ],
            imgList:[
                'http://p1.music.126.net/aLgnTyZ4dQvFDn3FXrwQgg==/109951163677603767.jpg',
                'http://p1.music.126.net/VBq8Mt2DFCOiNxJiHuwNzQ==/109951163677899024.jpg',
                'http://p1.music.126.net/POaB7-D4UVqNs1xrWaODqA==/109951163677886919.jpg',
                'http://p1.music.126.net/gd8cyLPINflYSWJm72SnQw==/109951163677898069.jpg'
            ],
            musicList:[],

        }
        this.handleClick = this.handleClick.bind(this)
    }

    render(){
        return (
            <div>
                <RemDiv></RemDiv>
                <Swiper imgList={this.state.imgList}></Swiper>

                <NavRed data={this.state.classical}></NavRed>
                <Title>推荐歌单</Title>
                <ThemeWrap>
                     {

                         this.state.musicList.length!==0 && this.state.musicList.map((value,index)=>{
                            return <ThemeItem id={value.id} key={index} onClick={()=>{this.handleClick(value.id)}}>
                                     <Icon title={'hear'} num={value.playCount}></Icon>
                                    <img  src={this.Urlcon(value.picUrl)} alt=""/>
                                    <p>{value.name}</p>
                                </ThemeItem> 
                         })
                     }
                </ThemeWrap>
            </div>
        )
    }

    componentDidMount(){
        fetch('http://localhost:3000/personalized')
        .then(response => response.json())
        .then(result => {
           this.setState({
               musicList:result.result
           })
        }) 

      

        
        new BScroll('.view',{
            protype:1,
            click:true,
            bounce: {
                top: false,
                bottom: true,
                left: true,
                right: true
              }
        })

    }

    Urlcon(value){
        return value + '?param=120y120'
    }

    handleClick(id){
        this.props.history.push(`/musicSheet`,{id})
    }
   
    

}

export default Recommend