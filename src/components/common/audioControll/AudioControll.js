import React, { Component } from 'react';



class AudioControll extends Component {
    constructor(){ 
        super() 
        this.state = {

        }
    }

    render(){

        return (
            <audio id="play"  src={localStorage.songUrl} ></audio>
        )
    }

    shouldComponentUpdate(nextState,nextProps){
       return false
    }

}


export default AudioControll
