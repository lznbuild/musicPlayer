import React, { Component } from 'react';
import {withRouter} from  "react-router-dom"
import {connect} from  "react-redux"





import {
    DivWrap
} from './styledComponent'




const MapDispatch = (dispatch)=>{
    return {
        swiperText(){
            dispatch({
                type:'change_musicTextOnOff22',
            })
        }
    }
}

const MapState = (state)=>{
    return {
        musicTextSwiper:state.home.musicTextSwiper
    }
} 





class HeaList extends Component {
    constructor(){ 
        super() 
        this.state = {

        }
    }
    render(){
        return (
             <DivWrap height={this.props.height} bg={this.props.bg}>
                 {
                     this.props.imgList.map((value,index)=>{
                        return  <div key={index} onClick={this.handleClick.bind(this)}>
                                    <img src={value.img} alt=""/>
                                    <p>{value.title}</p>
                                </div>
                     })
                 }
                
             </DivWrap>
            )
    }



    handleClick(e){
        if(this.props.match.path === '/play'){
            e.stopPropagation()
            this.props.swiperText()
        }
    }
}

export default withRouter(connect(MapState,MapDispatch)(HeaList))
  