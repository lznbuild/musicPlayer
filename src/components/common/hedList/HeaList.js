import React, { Component } from 'react';

import {
    DivWrap
} from './styledComponent'

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
                        return  <div key={index}>
                                    <img src={value.img} alt=""/>
                                    <p>{value.title}</p>
                                </div>
                     })
                 }
                
             </DivWrap>
            )
    }
}
export default HeaList
