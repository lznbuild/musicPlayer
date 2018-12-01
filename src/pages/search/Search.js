import React, { Component } from 'react';

import  Back from 'assets/images/back.svg'
import {withRouter} from 'react-router-dom' 

import {
    Head,
    Wrap,
    InputBar,
    Input,
    UlBar,
    LiItem,
    SubNav,
    SubLi,
  

} from './styledComponent'






class Search extends Component {
        
      constructor(){ 
          super() 
          this.state = {
                hot:[],
                subNavSwiper:true,
                songList:[],
                manList:[]
            }
        }

     render(){
        return (
            <div>
                <Wrap>
                    <Head>
                        <img src={Back} alt="" onClick={this.handleClick.bind(this)}/>
                    </Head>
                    <InputBar>
                        <Input  ref={'input'} onInput = {this.handle.bind(this)}></Input>
                        {this.state.subNavSwiper&&<SubNav>
                            {
                                 this.state.songList&&this.state.songList.length!==0&&this.state.songList.map((value,index)=>{
                                    return   <SubLi 
                                    type={'song'}
                                    key={index}
                                    onClick={this.LiClick.bind(this,value.id)}>{value.name}</SubLi>
                                })
                            
                            }      

                             {
                                 this.state.manList&&this.state.manList.length!==0&&this.state.manList.map((value,index)=>{
                                    return   <SubLi 
                                    type={'man'}
                                    key={index}
                                    onClick={this.LiClick.bind(this,value.id)}>{value.name}</SubLi>
                                })
                            
                            }               
                  
                        </SubNav>
                        }
                    </InputBar>
                    
                </Wrap>
               
                <div>
                    <p style={{lineHeight:'.5rem',fontWeight:'bold',fontSize:'.2rem'}}>热门搜索</p>
                    <UlBar>
                        { this.state.hot.length&& this.state.hot.map((v,i)=>{
                         return <LiItem key={i}>{v.first}</LiItem>
                        })}
                        
                       
                    </UlBar>
                </div>
            </div>
        )
        
     }

     handleClick(){
        this.props.history.go(-1)
        
    }

    
    handle(){
        this.setState({
            subNavSwiper:true
        })

        if(this.refs['input'].value){
            fetch(`http://localhost:3000/search/suggest?keywords=${this.refs['input'].value}`)
            .then(response => response.json())
            .then(result => {
                this.setState({
                    songList:result.result.songs,
                    manList:result.result.artists
                })

            })
        }else{
            this.setState({
                subNavSwiper:false
            })
        }
       
    }

    LiClick(id,e){

        if(e.target.type ==="song"){
            this.props.history.push('/play',{id})
        }else{
          
            this.props.history.push('/singer',{id})            
        }
    }
  
    componentDidMount(){
        fetch('http://localhost:3000/search/hot')
        .then(response => response.json())
        .then(result => {
          this.setState({
            hot:result.result.hots
        })
        })
    }

}
export default withRouter(Search)