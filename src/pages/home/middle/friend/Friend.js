import React, { Component } from 'react';

//样式组件
import {
    Title,
    UlBar,
    LiBar
} from './styledComponent'

//收听
import Icon from 'components/common/count/Count'

import BScroll from 'better-scroll'

class Friend extends Component{
    constructor(){
        super()
        this.state = {
            mvList:[]
        }
    }

    render(){
        return (
            <div>
                <Title>MV精选</Title>
                <UlBar>
               {
                   this.state.mvList.length!==0 && this.state.mvList.data.map((value,index)=>{
                       return  <LiBar key={value.id}>
                                <Icon title={'play'} num={value.playCount}></Icon>
                                <img src={value.cover} alt=""/>
                                <p>{value.name}</p>
                            </LiBar>
                                
                   })
                }
                </UlBar>
            </div>
        )
    }

    componentDidMount(){
        fetch('http://localhost:3000/top/mv?limit=10')
        .then(response => response.json())
        .then(result => {
           this.setState({
               mvList:result
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

}

export default Friend