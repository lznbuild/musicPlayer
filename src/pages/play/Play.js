import React, { Component } from 'react';
import Header from 'components/common/header/Header'

import { connect } from 'react-redux'

//图片
import mu1 from 'assets/images/mu0w.svg'
import mu2 from 'assets/images/mu1w.svg'
import mu3 from 'assets/images/mu2w.svg'
import mu4 from 'assets/images/歌词.svg'

import btn1 from 'assets/images/单曲循环.svg'
import btn2 from 'assets/images/0.svg'
import btn3 from 'assets/images/播放.svg'
import btn4 from 'assets/images/1.svg'
import btn5 from 'assets/images/3.svg'
import btn6 from 'assets/images/暂停.svg'



//样式组件
import {
    Wrap,
    ImgBar,
    CoverBar,
    NavBar,
    ButtonBar,

} from './styledComponent'

import ImgSwiper from 'assets/images/cd_tou.png'
import HeaList from 'components/common/hedList/HeaList'
import MusicText from 'pages/play/musicText/MusicText'
import PlayBar from 'pages/play/playbar/PlayBar'


const mapState = (state)=>{
    return {
        htOnOff:state.home.htOnOff,
        playOnOff:state.home.playOnOff,
        musicText:state.home.musicText,
        musicTextSwiper:state.home.musicTextSwiper
    }
} 

const mapDispatch = (dispatch,action)=>{
    return {
        chan(){
            dispatch({
                type:'change_htOnOff',
            })
        },
        change(){
            dispatch({
                type:'change_playOnOff',
            })
        },
        musicText(value){
            dispatch({
                type:'change_musicText',
                payload:value
            })
        }
    }
}


class Play extends Component {
    constructor(){
        super()
        this.state = {
            imgList:[
                {
                    img:mu1,
                    title:''
                },
                {
                    img:mu2,
                    title:''
                },
                {
                    img:mu3,
                    title:''
                },
                {
                    img:mu4,
                    title:''
                }
            ],
            animateOnOff:false,
            rotateOnOff:false,
            musicDetical:null,
            time:''


        }
    }

    render(){
       
        return (
            <Wrap>
               <MusicText></MusicText>
                <Header title={this.state.musicDetical!==null?this.state.musicDetical.name:''} bg={'rgb(0,0,0,0)'}></Header>
                <ImgBar>
                    <img className={this.state.animateOnOff ? 'active':''} src={ImgSwiper} alt=""/>
                </ImgBar>
                <CoverBar>
                    <div>
                        <img className={this.state.rotateOnOff ? 'action':''} src={this.state.musicDetical!==null?this.state.musicDetical.al.picUrl:''} alt=""/>
                    </div>
                </CoverBar>
                <NavBar>
                    <HeaList imgList={this.state.imgList} height={'.35rem'}></HeaList>
                </NavBar>
                <PlayBar TotalTime={this.state.TotalTime} time={this.state.time}>
                   
                </PlayBar>
                <ButtonBar>
                    <img src={btn1} alt=""/>
                    <img src={btn4} alt=""/>
                    <img src={this.props.playOnOff? btn6 : btn3} alt="" onClick={this.playSwiper.bind(this)}/>
                    <img src={btn2} alt=""/>
                    <img src={btn5} alt=""/>
                </ButtonBar>
                
            </Wrap>
        )
    }



    componentDidMount(){
        document.getElementById('play').addEventListener("ended",this.endPlay.bind(this));


        let id = this.props.location.state.id

        fetch(`http://localhost:3000/lyric?id=${id}`)
        .then(response =>response.json())
        .then(result=>{

            this.props.musicText(result.lrc.lyric)

        })
        

        fetch(`http://localhost:3000/song/url?id=${id}`)
        .then(response => response.json())
        .then(result => {
       
            //找不到资源就跳回上一页
            if(result.data[0].url === null){
                alert('暂未找到资源')
                this.props.history.go(-1)
                //就算跳路由，下面的代码还是会执行
            }else{
                document.getElementById('play').src = result.data[0].url  
                localStorage.songUrl = result.data[0].url               
                // this.playSwiper()
                // this.mountedPlay()
            }
        }) 


        fetch(`http://localhost:3000/song/detail?ids=${id}`)
        .then(response =>response.json())
        .then(result =>{
            this.state.time = result.songs[0].dt/1000
            var time = this.state.time
            var min = parseInt(time/60)>=10?parseInt(time/60):"0"+ parseInt(time/60);
            var sec = parseInt(time%60)>=10?parseInt(time%60):"0"+ parseInt(time%60);


            this.setState({
                musicDetical:result.songs[0],
                TotalTime:min+':'+sec,
            })
            
            //存入localstorage
            localStorage.song = this.state.musicDetical.name
            localStorage.songImg = this.state.musicDetical.al.picUrl
            localStorage.singer = this.state.musicDetical.ar.reduce((value1,value2)=>{return value1.name+"&"+value2.name})
        })
    }
   


    //点击播放，开启2个动画，音乐播放
    async playSwiper(){
        await this.props.change()

        this.setState((prevState)=>{
           return  {
               animateOnOff : !prevState.animateOnOff,
            }
        })

        //旋转停止
        if(this.state.rotateOnOff){
            this.setState((prevState)=>{
                return  {
                    rotateOnOff: !prevState.rotateOnOff
                 }
             })
        }else{
            //让小竹竿到圆盘上再旋转
            setTimeout((pervState)=>{
                this.setState((prevState)=>{
                    return  {
                        rotateOnOff: !prevState.rotateOnOff
                     }
                 })
            },1000)
        }
       

        //音乐播放与暂停
        if(!this.props.playOnOff){
                  
            document.getElementById('play').pause()            

        }else{
            //让小竹竿到圆盘上再播放
           
            this.mountedPlay()
        }       
        
    }

    mountedPlay(){
        setTimeout(()=>{   
            document.getElementById('play').play()
        },1000)
    }

      //播放完毕的监听
      endPlay(){
        this.setState({
            animateOnOff:false,
            rotateOnOff:false
        })

        this.props.change()
    }

}

export default connect(mapState,mapDispatch)(Play)