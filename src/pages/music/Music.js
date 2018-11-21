import React ,{ Component } from 'react'

//样式组件
import {
    MusicBar
} from './styledComponent'

class Music extends Component{
    render(){
        return (
           <MusicBar>音乐</MusicBar>
        )
    }
}

export default Music