import React, { Component ,Fragment} from 'react';
import  { Home } from 'pages/home/index'
import { Music } from 'pages/music'
class App extends Component {
  render() {
    return (
    <Fragment>
       <Home></Home>
      <Music></Music>
    </Fragment>
    );
  }
}

export default App;
