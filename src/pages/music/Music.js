import React ,{ Component } from 'react'
import { withRouter } from 'react-router-dom'

//样式组件
import {
    MusicBar,
    ImgBar,
    Text,
    IconBar
} from './styledComponent'

//图片
import iconOpen from 'assets/images/open.svg'
import list from 'assets/images/listM.svg'

class Music extends Component{

    constructor(){
        super()
        this.state = {
            imgUrl:'http://p1.music.126.net/FKj7nycb_AU7VuaG2hVHUQ==/109951163533077724.jpg?param=140y140',
            icon:iconOpen
        }
    }

    render(){
        return (
           <MusicBar onClick={this.MusicPlay.bind(this)}>
               <ImgBar>
                    <img src={this.state.imgUrl} alt=""/>
               </ImgBar>
               <Text>
                   <h2>歌名啊</h2>
                   <p>我是歌手</p>
               </Text>
               <IconBar>
                    <img src={this.state.icon} alt=""/>
               </IconBar>
               <IconBar>
                    <img src={list} alt=""/>
               </IconBar>
           </MusicBar>
        )
    }

    MusicPlay(){
        this.props.history.push('/play')
    }
}

export default withRouter(Music)