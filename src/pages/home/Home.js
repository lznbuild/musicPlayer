import React, { Component ,Fragment} from 'react';

//样式的引入
import { 
  MiddleContainer,
  ImgDiv,
  Div
}  
from './styledComponent'

 //图片导入
 import list from 'assets/images/list.svg'
 import music from 'assets/images/music.svg'
 import wyy from 'assets/images/wyy.svg'
 import audio from 'assets/images/audio.svg'
 import sou from 'assets/images/sou.svg'


 //路由导入
 import {
	Route,
 Link,
 Switch,
 Redirect
} from 'react-router-dom'

//组件导入
import { MusicList } from './musiclist'
import { Middle } from './middle'
import { Audio } from './audio'

class Home extends Component {

  constructor(props){
    super(props)
    this.state = {
      list,
      music,
      wyy,
      audio,
      sou
    }

 }

  render() {
    return (
       <Fragment>
          <Div className="wrap">
            {/* 顶部图标 */}
            <MiddleContainer>
            <ImgDiv url={this.state.list}></ImgDiv>
            <div className="list">
               <Link to="/home/musiclist">
                  <ImgDiv url={this.state.music}></ImgDiv>
                </Link>

                <Link to="/home/middle">
                    <ImgDiv url={this.state.wyy}></ImgDiv>
                </Link>

                <Link to="/home/audio">
                    <ImgDiv url={this.state.audio}></ImgDiv>
                </Link>          
            </div>
            <ImgDiv url={this.state.sou} onClick={this.search.bind(this)}></ImgDiv>
            
            </MiddleContainer>
        </Div>
          <Switch>
            <Redirect from="/" exact to="/home/middle/recommend"></Redirect>
            <Route path="/home/musiclist" component={MusicList}></Route>
            <Route path="/home/middle" component={Middle}></Route>
            <Route path="/home/audio" component={Audio}></Route>
          </Switch>
       </Fragment>

    )

    
  }


      search(){
        this.props.history.push('/search')
      }
}

export default Home;