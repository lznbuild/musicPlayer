import React, { Component } from 'react';

import {
    Content,
    Text,
    Span,
    Quality,
    Wrap,
  
} from './styledComponent'

import Header from 'components/common/header/Header'

class MvDetical extends Component {
      constructor(){ 
          super() 
          this.state = {
                data:null,
                classIndex:2
            }
    }

     render(){
  
        return (
            this.state.data&&<div>
                <Header title="MV"></Header>
                <video ref = {"Video"}  controls  autoPlay style ={{width:'100%',height:'2.1rem'}} src={this.state.data.brs[480]}></video>
                <Content>
                    <Wrap>
                        <Quality className={this.state.classIndex === 1?"active":"" } onClick={this.handle1.bind(this)}>标清</Quality>
                        <Quality className={this.state.classIndex === 2?"active":""}  onClick={this.handle2.bind(this)}>高清</Quality>
                        <Quality className={this.state.classIndex === 3?"active":""} onClick={this.handle3.bind(this)}>超清</Quality>
                    </Wrap>
                    <p><Span>精选</Span>{this.state.data.name}</p>
                    <Text>明星：{this.state.data.artistName}</Text>
                    <Text>收藏:{this.state.data.subCount}</Text>
                    <Text>播放:{this.state.data.duration/1000 + "万"}</Text>
                    <div>{this.state.data.desc}</div>
                </Content>
            </div>
        )
     }

     componentDidMount(){
        let id = this.props.location.state.id
        fetch(`http://localhost:3000/mv/detail?mvid=${id}`)
        .then(response => response.json())
        .then(result => {
           this.setState({
               data:result.data
           })
          
        }) 
     }

     handle1(){
         this.setState({
             classIndex:1
         })
         this.refs.Video.src = this.state.data.brs["240"]
     }

     handle2(){
        this.setState({
            classIndex:2
        })
        this.refs.Video.src = this.state.data.brs["480"]

    }

    handle3(){
        this.setState({
            classIndex:3
        })
        this.refs.Video.src = this.state.data.brs["720"]

    }
}
export default MvDetical