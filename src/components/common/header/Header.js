import React ,{Component} from "react"

//引入图片
import  Back from 'assets/images/back.svg'
import {withRouter} from 'react-router-dom' 
import { connect } from 'react-redux'

//样式组件
import {
    Head
} from './styledComponent'


const mapDispatch = (dispatch,action)=>{
    return {
        // 是否把音乐进度条的进度给页面
        change(){
            dispatch({
                type:'change_playSwiperTrue',
                payload:true
            })
        }
    }
}


class Header extends Component{

    render(){
        return (
            <Head bg={this.props.bg}>
                <img src={Back} alt="" onClick={this.handleClick.bind(this)}/>
                <p>{this.props.title}</p>
            </Head>
            
        )
    }

    handleClick(){
        this.props.change()
        this.props.history.go(-1)
        
    }
}

export default withRouter(connect(null,mapDispatch)(Header))