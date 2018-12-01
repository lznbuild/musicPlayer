import React, { Component } from 'react';

import { connect } from 'react-redux'

//样式组件
import {
    Title,
    UlBar,
    LiBar
} from './styledComponent'

//收听
import Icon from 'components/common/count/Count'

import BScroll from 'better-scroll'

const mapdispatch = (dispatch)=>{
    return {
        change(){
            dispatch({
                type:'change_playSwiper',
            })
        }
       
    }
}




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
                       return  <LiBar key={value.id}  id={value.id} onClick={()=>{this.handleClick(value.id)}}>
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
        fetch('http://localhost:3000/top/mv?limit=20')
        .then(response => response.json())
        .then(result => {
           this.setState({
               mvList:result
           })
     
        })
        setTimeout(()=>{
            new BScroll('.view',{
                click:true,
                bounce: {
                    top: false,
                    bottom: true,
                    left: true,
                    right: true
                  }
            })
        },1000)
    }

    handleClick(id){
        document.getElementById('play').pause()
        this.props.change()

        this.props.history.push('/mvdetical',{id})
    }

}

export default connect(null,mapdispatch)(Friend)