import React ,{Component} from "react"

//引入图片
import  Back from 'assets/images/back.svg'
import {withRouter} from 'react-router-dom' 


//样式组件
import {
    Head
} from './styledComponent'
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
        this.props.history.go(-1)
        // console.log(this.props)
    }
}

export default withRouter(Header)