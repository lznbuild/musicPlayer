import React ,{ Component } from 'react'

import Count from 'components/common/count/Count'

import {
    DivWrap,
    Title,
    Content
} from './styledComponent'

class HedNav extends Component {
   
    render(){
        return (
            <DivWrap>
                <div>
                    <img src={this.props.url} alt=""/>
                    <Count title={'hear'} num={this.props.num}></Count>
                </div>
                <div className='text'>
                    <Title>{this.props.title}</Title>
                    <Content>{this.props.text}</Content>
                </div>
            </DivWrap>
        )
    }
}

export default HedNav
