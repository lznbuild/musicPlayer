import React, { Component,Fragment } from 'react';

import Header from 'components/common/header/Header'
import HedNav from 'components/common/hednav/HedNav'
import HeaList from 'components/common/hedList/HeaList'

//图片
import HeaList1 from 'assets/images/healist1.svg'
import HeaList2 from 'assets/images/healist2.svg'
import HeaList3 from 'assets/images/healist3.svg'
import HeaList4 from 'assets/images/healist4.svg'

import open from 'assets/images/li.svg'
import dian from 'assets/images/dian.svg'
import po from 'assets/images/po.svg'

import BScroll from 'better-scroll'

import { connect } from 'react-redux'

//样式组件
import {
   
    Mli,
    IndexBar,
    TextBar,
    IconBar,
    Title,
    Content,
    Wrap
} from './styledComponent'


const mapDispatch = (dispatch)=>{
    return {
        chan(){
            dispatch({
                type:'change',
                payload:false
            })
        }
    }
}



class MusicSheet extends Component {
    constructor(){
        super()
        this.state = {
            imgList:[
                {
                    title:'多选',
                    img:HeaList1,
                },
                {
                    title:'分享',
                   img:HeaList2,
                },
                {
                    title:'评论',                 
                    img:HeaList3,
                },
                {
                    title:'下载',
                    img:HeaList4,
                }
            ],
            data:null,
            musicList:[]
    
        }
    }

    render(){
        return (
           
                       
                this.state.data === null? "":
               <Fragment>
                    <Header title={'歌单'} ></Header>
                  
                    <Wrap className="div1">
                    <div>
                    <HedNav title={this.state.data.name} text={this.state.data.description} url={this.state.data.coverImgUrl} num={this.state.data.playCount}></HedNav>
                        <HeaList imgList={this.state.imgList} bg={'#3d9b86'}></HeaList>
                        <Content>
                            <div>
                                <Title>
                                    <img src={po} alt=""/>
                                    <span>播放全部</span>
                                </Title>
                            { this.state.musicList.length!==0 && this.state.musicList.map((value,index)=>{
                                return <Mli  id={value.id} onClick={this.MliClick.bind(this,value.id)} key={index}>
                                        <IndexBar>
                                            <img src={value.al.picUrl} alt=""/>
                                        </IndexBar>
                                            <TextBar>
                                                <p>{value.name}</p>
                                                {value.ar.slice(0,4).map((item)=>{
                                                    return <span key={item.id}>{item.name}</span>
                                                })}
                                            </TextBar>
                                            <IconBar>
                                                <img src={open} alt=""/>
                                                <img src={dian} alt=""/>
                                            </IconBar>
                                        </Mli>
                                    })
                            }
                            
                            </div>
                        </Content>
                    </div>
                    </Wrap> 
               </Fragment>
                   

        
            
        )
        
    }


    componentDidMount(){

        let id = this.props.location.state.id

        fetch(`http://localhost:3000/playlist/detail?id=${id}`)
        .then(response => response.json())
        .then(result => {
           this.setState({
               data:result.playlist
           })

        }) 


        fetch('http://localhost:3000/artists?id=6452')
        .then(response => response.json())
        .then(result => {
            this.setState({
                musicList:result.hotSongs
            },()=>{
               setTimeout(()=>{
                new BScroll('.div1',{
                    protype:1,
                    click:true,
                    bounce: {
                        top: false,
                        bottom: true,
                        left: true,
                        right: true
                      }
                })
               },1000)
            })

           
        }) 


           
       

    }

    MliClick(id){
        this.props.mapDispatch()
        this.props.history.push('/play',{id})
    }

   
}

export default connect(null,mapDispatch)(MusicSheet)
