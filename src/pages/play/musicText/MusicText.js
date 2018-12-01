import React, { Component,Fragment } from 'react';
import Lyric from 'lyric-parser'

import { connect } from 'react-redux'
import BScroll from 'better-scroll'


import {
    WrapText,
    TextBar    
} from './styledComponent'



const mapState = (state)=>{
 return {
    musicTextSwiper:state.home.musicTextSwiper,
    playOnOff:state.home.playOnOff,
    text:state.home.musicText
 }
}


const mapdisPatch = (dispatch,action)=>{
    return  {
        change(value){
            dispatch({
                type:'change_musicText',
                payload:value
            })
        }
    }
}



class MusicText extends Component {
    constructor(){ 
        super() 
        this.state = {
            currentLyric:null,
            scroll:null,
   
        }
        this.num = 1
    }
    render(){

        return (
            
         <Fragment>
            
             <WrapText className = {this.props.musicTextSwiper?"":"class222"}>
                <TextBar className="views">
                <div>
                    
                <ul>
                
                    {
                        this.state.currentLyric && this.state.currentLyric.lines.map((value,index)=>{
                            return <li key={index}>{value.txt}</li>
                        })
                        
                    }
                    </ul>
                
                </div>
                </TextBar>
            </WrapText>
             
         </Fragment>
         
        )
    }


    componentDidUpdate(){   

        this.state.currentLyric = new Lyric(this.props.text,this.handle.bind(this))
        
        this.state.scroll =  new BScroll('.views',{
            click:true
        })
        
        setTimeout(()=>{        
            this.state.currentLyric.play() 
        },100)
        

        slfjlkasjdflksjlsajflkdsajlkfjljflkajslkflsljflkdsjklfjkldsjlkfjs
    
    }
    
  

    handle({lineNum, txt}){
  
        if(this.props.playOnOff){
         
            if(lineNum===0){
                document.querySelectorAll("ul>li")[0].style.color = "red"
            }else{
                document.querySelectorAll("ul>li")[lineNum].style.color = "red"
                document.querySelectorAll("ul>li")[lineNum-1].style.color = ""

                if(document.querySelectorAll("ul>li")[lineNum].offsetTop>300){
                    this.state.scroll.scrollBy(0, -10, 1)
                }
                // console.log(document.querySelectorAll("ul>li")[lineNum].offsetTop)
            }
            
        }else{
           
            this.state.currentLyric.stop() 
            
        }
       
    }

}
export default connect(mapState,mapdisPatch)(MusicText)
