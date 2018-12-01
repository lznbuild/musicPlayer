import React, { Component ,Fragment} from 'react';

import { connect } from 'react-redux'

import {withRouter} from 'react-router-dom'

import {
    TimeBar,
    Progress,
    ProgressBar,
    ProgressWrap,
    Range,
    Div
} from './styledComponent'


const mapState = (state)=>{
    return {
        htOnOff:state.home.htOnOff,
        playOnOff:state.home.playOnOff,
        musicText:state.home.musicText
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
        }
    }
}


class PlayBar extends Component {
      constructor(){ 
          super() 
          this.state = {
                ProgressTime:'',
                TotalTime:'',     
                rangeLeft:'',
                progressWidth:'',
                time:''
        }

        this.progressClick = this.progressClick.bind(this)

    }


     render(){
        return (
            <Div>
                 <TimeBar>{this.state.ProgressTime}</TimeBar>
                    <ProgressWrap>
                        <ProgressBar onClick={this.progressClick} ref="totalProgress">
                            <Progress width={this.state.progressWidth}></Progress>
                            <Range left={this.state.rangeLeft}></Range>
                        </ProgressBar>
                    </ProgressWrap>
                    <TimeBar>{this.props.TotalTime}</TimeBar>
            </Div>
        )
     }


     componentDidMount(){
        document.getElementById('play').addEventListener("timeupdate",this.handletime.bind(this));
    }

    progressClick(e){
        //点击设置进度
        if(this.props.playOnOff){
            this.setState({
                rangeLeft:(e.clientX-42)/this.refs.totalProgress.offsetWidth*100 +"%",
                progressWidth:(e.clientX-42)/this.refs.totalProgress.offsetWidth*100 +"%"
            })

            document.getElementById('play').currentTime =(e.clientX-42)/this.refs.totalProgress.offsetWidth*document.getElementById('play').duration;
            
        }
    }


    handletime(){

        // console.log(parseInt(document.getElementById('play').currentTime.toString()))
 
   
            var jidu = document.getElementById('play').currentTime;
            var iNow = parseInt(jidu/this.props.time*100);
            //计算进度时间
            var min1 = parseInt(jidu/60)>=10?parseInt(jidu/60):"0"+ parseInt(jidu/60);
            var sec1 = parseInt(jidu%60)>=10?parseInt(jidu%60):"0"+ parseInt(jidu%60);
            //滑块偏移量
            this.setState({
                rangeLeft:iNow +"%"
            })
            
            //进度条
            this.setState({
                progressWidth:iNow +"%"
            })
    
    
            this.setState({
                ProgressTime:min1+":"+sec1
            })
    
        }
      

    


    
      

}
export default withRouter(connect(mapState,mapDispatch)(PlayBar))