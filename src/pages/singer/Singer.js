import React, { Component } from 'react';

import {
    Content,
    Mli,
    IndexBar,
    TextBar,
    IconBar,
    Head
} from './styledComponent'

import BScroll from 'better-scroll'

import open from 'assets/images/li.svg'
import dian from 'assets/images/dian.svg'
import  Back from 'assets/images/back.svg'


class Singer extends Component {
    constructor() {
        super()
        this.state = {
            musicList:[],
            detical:null
        }
    }

    render() {
        return (
            <div>
                <div className='viewlis'>
                <Head url={this.state.detical?this.state.detical.picUrl:''}>
                    <img src={Back} alt="" onClick={this.handleClick.bind(this)}/>
                </Head>
                <Content>
                        {this.state.musicList.length !== 0 && this.state.musicList.map((value, index) => {
                            return <Mli id={value.al.id}  key={index} onClick={this.MliClick.bind(this,value.al.id)}>
                                <IndexBar>
                                   <div>{index+1}</div>
                                </IndexBar>
                                <TextBar>
                                    <p style={{lineHeight:'.28rem'}}>{value.name}</p>
                              
                                    <span>{value.alia.length!==0?value.alia:value.ar[0].name+"-"+value.al.name}</span>
                        
                                </TextBar>
                                <IconBar>
                                    <img src={open} alt="" />
                                    <img src={dian} alt="" />
                                </IconBar>
                            </Mli>
                        })
                        }

                </Content>
                </div>
            </div>
        )
    }

    componentDidMount() {
        let id = this.props.location.state.id
        fetch(`http://localhost:3000/artists?id=${id}`)
            .then(response => response.json())
            .then(result => {
                this.setState({
                    musicList:result.hotSongs,
                    detical:result.artist
                })
                console.log(result.artist)
            })

        new BScroll('.Mview',{
            click:true
        })

        
    }


    handleClick(){
        this.props.history.go(-1)
        
    }

    MliClick(id){
        this.props.history.push('/play',{id})
    }
}
export default Singer