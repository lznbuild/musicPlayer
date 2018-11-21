import React, { Component } from 'react';

//样式导入
import { 
         MiddleContainer,
         ImgDiv,
         NavDiv,
         NavItem
       }  
 from './styledComponents'

 //路由导入
import {
	BrowserRouter as Router,
	Route,
	Switch,
  Redirect,
  NavLink
} from 'react-router-dom'

 //图片导入
import list from 'assets/images/list.svg'
import music from 'assets/images/music.svg'
import wyy from 'assets/images/wyy.svg'
import audio from 'assets/images/audio.svg'
import sou from 'assets/images/sou.svg'



//路由组件导入
import Recommend from './Recommend'
import Friend from './Friend'
import RadioStation from './RadioStation'

class Middle extends Component {
  constructor(props){
     super(props)
     this.state = {
       list,
       music,
       wyy,
       audio,
       sou,
      
     }
  }

  render() {
    return (
      <div>
        {/* 顶部图标 */}
        <MiddleContainer>
         <ImgDiv url={this.state.list}></ImgDiv>
         <div className="list">
            <ImgDiv url={this.state.music}></ImgDiv>
            <ImgDiv url={this.state.wyy}></ImgDiv>
            <ImgDiv url={this.state.audio}></ImgDiv>          
         </div>
         <ImgDiv url={this.state.sou}></ImgDiv>
         
        </MiddleContainer>
        {/* 导航栏 */}
        <NavDiv>
          <NavItem>
              <NavLink activeClassName="active" to="/recommend">推荐</NavLink>
          </NavItem>
          <NavItem>
              <NavLink activeClassName="active" to="/friend">朋友</NavLink>
          </NavItem>
          <NavItem>
            <NavLink activeClassName="active" to="/radioStation">电台</NavLink>             
          </NavItem>
        </NavDiv>

         

          <Switch>
            <Redirect from = "/" exact to="/recommend"></Redirect>
            <Route path="/recommend" component={ Recommend }></Route>
            <Route path="/friend" component={ Friend }></Route>
            <Route path="/radioStation" component={ RadioStation }></Route>
          </Switch>
      </div>
    );
  }

  
}

export default Middle;