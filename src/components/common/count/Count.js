import React, { Component } from 'react';

//样式组件
import {
    IconBar
} from './styledComponent'

//图片
import play from 'assets/images/san.svg'
import hear from 'assets/images/erji.svg'




class Count extends Component{
    constructor(){
        super()
        this.state = {
           
        }
    }

    
    render(){
        return (
            <IconBar>
                <img src={this.props.title==='play'?play:hear} alt=""/>
                <span>{this.num(this.props.num)}</span>
            </IconBar>
        )
    }

    num(value){
        var val
        if(value.toString().indexOf('.')!==-1){
            val = value.toString().slice(0,value.toString().indexOf('.'))         
        }else{
            val = value.toString()
        }
        if(val.length>4){       
            return (val.slice(0,val.length-4) + "万" + "+")
        }else{
            return val
        }
           

    }
}

export default Count


