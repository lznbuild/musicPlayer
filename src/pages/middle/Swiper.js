import React,{ Component } from 'react'

import { Carousel, WingBlank } from 'antd-mobile';

class Swiper extends Component {
  state = {
    data: ['aLgnTyZ4dQvFDn3FXrwQgg==/109951163677603767', 'VBq8Mt2DFCOiNxJiHuwNzQ==/109951163677899024', 'POaB7-D4UVqNs1xrWaODqA==/109951163677886919','gd8cyLPINflYSWJm72SnQw==/109951163677898069'],
    imgHeight: 140,
    
  }
  // componentDidMount() {
  //   // simulate img loading
  //   setTimeout(() => {
  //     this.setState({
  //       data: ['aLgnTyZ4dQvFDn3FXrwQgg==/109951163677603767', 'VBq8Mt2DFCOiNxJiHuwNzQ==/109951163677899024', 'POaB7-D4UVqNs1xrWaODqA==/109951163677886919','gd8cyLPINflYSWJm72SnQw==/109951163677898069'],
  //     });
  //   }, 100);
  // }
  render() {
    return (
      <div  style={{position:'absolute',top:'1rem',width:'96%',left:'0',right:'0',padding:'0',margin:'0 auto',zIndex:'1'}}>
        <WingBlank style={{width:'100%',margin:'0',borderRadius:'4px',overflow:'hidden'}}>
        <Carousel
          autoplay={true}
          infinite
          
        >
          {this.state.data.map(val => (
            <a
              key={val}
              href=""
              style={{ display: 'inline-block', width: '100%', height: '1.42rem' }}
            >
              <img
                src={`http://p1.music.126.net/${val}.jpg`}
                alt=""
                style={{ width: '100%',height:'100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
      </WingBlank>
      </div>
    );
  }
}

export default Swiper