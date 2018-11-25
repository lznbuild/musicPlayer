import React,{ Component } from 'react'

import {
    Wrap,
    Item,
    Cover
} from './styledComponent'

class Load extends Component{

    constructor(){
        super()
        this.state = {
            a:1
        }
    }

    render(){
        return (
            <div>
                {/* 在Wrap上传, bg,itembg*/}
                <Wrap>
                    <Item bg={'#315674'}></Item>
                    <Item bg={'linear-gradient(to right,#375571,#44536b)'}></Item>
                    <Item bg={'linear-gradient(to right,#505265,#6c4d58)'}></Item>
                    <Item bg={'linear-gradient(to right,#774a53,#954544)'}></Item>
                    <Item bg={'linear-gradient(to right,#a1433e,#ba3f33)'}></Item>
                    <Item bg={'#d83b26'}></Item>
                </Wrap>
                <Cover></Cover>
            </div>
        )
    }
}



export default Load