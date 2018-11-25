import React,{ Component } from 'react'

import { Carousel, WingBlank } from 'antd-mobile';

class Swiper extends Component {
  state = {
    imgHeight: 140,
  }

  render() {
    
    return (
      <div  style={{position:'absolute',top:'0',width:'96%',left:'0',right:'0',padding:'0',margin:'0 auto',zIndex:'1'}}>
        <WingBlank style={{width:'100%',margin:'0',borderRadius:'4px',overflow:'hidden'}}>
        <Carousel
          autoplay={true}
          infinite
          
        >

          {this.props.imgList.map(val => (
            <div
              key={val}
              style={{ display: 'inline-block', width: '100%', height: '1.42rem' }}
            >
              <img
                src={`${val}`}
                alt=""
                style={{ width: '100%',height:'100%', verticalAlign: 'top' }}
              />
            </div>
          ))}
        </Carousel>
      </WingBlank>
      </div>
    );
  }

 

}

export default Swiper