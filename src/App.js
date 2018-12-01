import React, { Component ,Fragment} from 'react';

//路由组件的引入
import  { Home } from 'pages/home/index'
import  { MusicSheet } from 'pages/musicSheet/index'
import  { Music } from 'pages/music'
import  { Play } from 'pages/play/index'
import MvDetical from 'pages/mvdetical/MvDetical'

import AudioControll from 'components/common/audioControll/AudioControll'
import Search from 'pages/search/Search'
import Singer from 'pages/singer/Singer'
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
                <Route path="/mvdetical" component={ MvDetical }></Route>
                <Route path="/search" component={ Search }></Route>
                <Route path="/singer" component={ Singer }></Route>
              </Switch>
              <Music></Music>
          </div>
          <AudioControll></AudioControll>
       </div>
    )
  }

  
}




export default App
