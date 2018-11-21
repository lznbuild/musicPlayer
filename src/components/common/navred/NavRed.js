import React, { Component } from 'react'

import {
    Wrap,
    NavImg,
    NavItem,
    NavText
} from './styledComponents'

class NavRed extends Component {
    constructor(){
        super()
    }

    render(){
        return (
            <Wrap>
                {
                    this.props.data.map((value,index)=>{
                     return  <NavItem key={index}>
                            <NavImg url={value.url}></NavImg>
                            <NavText>{value.text}</NavText>
                        </NavItem>                  
                    })
                }
            </Wrap>
        )
    }
}

export default NavRed