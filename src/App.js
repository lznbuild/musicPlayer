import React, { Component ,Fragment} from 'react';

//路由组件的引入
import  { Home } from 'pages/home/index'
import  { MusicSheet } from 'pages/musicSheet/index'
import  { Music } from 'pages/music'
import  { Play } from 'pages/play/index'

import { connect } from 'react-redux'



import {
	Route,
	Switch,
  Redirect
} from 'react-router-dom'

import Load from 'components/common/load/Load'




class App extends Component {
  render() {
    return (
       <div id="Wrap" style={{height:'100%'}}>
          <div className="Mview" style={{height:'100%',display:'flex',flexDirection:'column'}}>
              {/* <Load></Load> */}
              <Switch>
                <Redirect  from = "/" exact to="/home/middle/recommend"></Redirect>
                <Route path="/play" component={ Play }></Route>
                <Route path="/home" component={ Home }></Route>
                <Route path="/musicSheet" component={ MusicSheet }></Route>
              </Switch>
              <Music></Music>
          </div>
            <audio id="play" src="http://m10.music.126.net/20181125130239/f8ffe3772f671f5487dc2767e3258505/ymusic/bc2e/113e/5c74/7bdbe81e15bebf328072e5ab7c358be7.mp3"></audio>
       </div>
    );
  }
}

export default App
