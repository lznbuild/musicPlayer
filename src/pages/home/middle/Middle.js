import React, { Component ,Fragment} from 'react';

//样式导入
import { 
         NavDiv,
         NavItem,
         ScroDiv,
       }  
 from './styledComponent'

 //路由导入
import {
	Route,
	Switch,
  Redirect,
  NavLink
} from 'react-router-dom'



//路由组件导入
import Recommend from './recommend/Recommend'
import Friend from './friend/Friend'
import RadioStation from './radioStation/RadioStation'


class Middle extends Component {
  

  render() {
    return (
      
        
        <Fragment>
            {/* 导航栏 */}
          <NavDiv>
            <NavItem>
                <NavLink activeClassName="active" to="/home/middle/recommend">推荐</NavLink>
            </NavItem>
            <NavItem>
                <NavLink activeClassName="active" to="/home/middle/friend">MV</NavLink>
            </NavItem>
            <NavItem>
              <NavLink activeClassName="active" to="/home/middle/radioStation">电台</NavLink>             
            </NavItem>
          </NavDiv>

          
          <ScroDiv  className = "view">
              <Switch>
                    <Redirect from = "/home/middle" exact to="/home/middle/recommend"></Redirect>
                    <Route exact path="/home/middle/recommend" component={ Recommend }></Route>
                    <Route exact path="/home/middle/friend" component={ Friend }></Route>
                    <Route exact path="/home/middle/radioStation" component={ RadioStation }></Route>
              </Switch>
          </ScroDiv>
        </Fragment>
          
            

    );
  }

  

}

export default Middle;