import React, { Component } from 'react';

import { connect } from 'react-redux'

import Load from 'components/common/load/Load'

const mapState = (state)=>{
    return {
        list:state.home.playSwiper
    }
}

const mapDispatch = (dispatch)=>{
    return {
        addItem(){
            dispatch({
                type:'change',
                payload:'hello'
            })
        }   
    }
}



class MusicList extends Component {
    constructor(){
        super()
        this.state = {
            on:true
        }
    }
    render(){
        return (
            <div>
                MusicListdddd
                <button onClick={this.handle.bind(this)}>按钮</button>
                {this.state.on && <Load></Load>}
            </div>
        )
    }


    handle(){
        // this.props.addItem()
        console.log(this.props.list)
        // this.setState({
        //     on:true
        // })
        // setTimeout(()=>{
        //     this.setState({
        //         on:false
        //     })
        // },3000)
    }

}

export default  connect(mapState,mapDispatch)(MusicList)
