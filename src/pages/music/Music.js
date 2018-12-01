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
import iconpause from 'assets/images/zantingb.svg'

import { connect } from 'react-redux'


const mapState = (state)=>{
    return {
        playSwiper:state.home.playSwiper,
        playOnOff:state.home.playOnOff
    }
}


class Music extends Component{  

    constructor(){
        super()
        this.state = {
            imgUrl:'http://p1.music.126.net/FKj7nycb_AU7VuaG2hVHUQ==/109951163533077724.jpg?param=140y140',
            icon:iconOpen,
            OnOff:false
        }
    }

    render(){
      
        return (
            !this.props.playSwiper?"":
           <MusicBar onClick={this.MusicPlay.bind(this)}>
               <ImgBar>
                    <img src={localStorage.songImg?localStorage.songImg:this.state.imgUrl} alt=""/>
               </ImgBar>
               <Text>
                   <h2>{localStorage.song}</h2>
                   <p>{localStorage.singer}</p>
               </Text>
               <IconBar>
                    <img src={this.state.OnOff?iconpause:this.state.icon} onClick={this.handle.bind(this)}/>
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

    componentDidMount(){
        document.getElementById('play').addEventListener('play',()=>{
            this.setState({
                OnOff:true
            })
        })
    }

    async handle(e){
        e.stopPropagation()

        await this.setState((prevState)=>{
            return {
                OnOff:!prevState.OnOff
            }
        })

        if(this.state.OnOff){
            console.log('开')
            document.getElementById('play').play()
        }else{    
            console.log('关')        
            document.getElementById('play').pause() 
        }
           
     
 
       
    }
    
}


export default  withRouter(connect(mapState,null)(Music))