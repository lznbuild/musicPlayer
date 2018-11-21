import styled from 'styled-components'
import border from 'components/styled/border'


const MiddleContainer = styled.div`
    height:.44rem;
    background:#db4036;
    display:flex;
    align-items:center;
    justify-content:space-between;
    .list{
        display:flex;
        align-items:center;
    }
`
const ImgDiv = styled.div`
     width:.42rem;
     height:.42rem;
     background:url(${props=>props.url}) no-repeat center;
    background-size:.2rem;
`

const NavDiv = styled.div`
      background:#db4036;
      display:flex;
      justify-content:space-around;
      padding 0 .2rem  .1rem 
`
const NavItem = styled.div`
     flex:1;
     font-size:.14rem;
     color:white;
     text-align:center;
     a{
         display:inline-block;
         padding:.1rem 0;
         color:white;
        }
    .active{
        border-bottom: 2px solid white;
    }
    `
const RemDiv = styled.div`
    height:1.2rem;
    background:#db4036;
`
//recommend组件
const Title = styled.h2`
    line-height:.4rem;
    padding-left:.06rem;
`
const ThemeWrap = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:space-around;
`
const  ThemeItem = border({
    component:styled.div`
        width:1.2rem;
        height:1.6rem;
        overflow:hidden;
        img
            width:1.2rem;
        p
            font-size:.12rem;
            line-height:.2rem;
    `,
    width:'0',
    radius:'5'

})



        
export {
    MiddleContainer,
    ImgDiv,
    NavDiv,
    NavItem,
    RemDiv,
    Title,
    ThemeWrap,
    ThemeItem
}