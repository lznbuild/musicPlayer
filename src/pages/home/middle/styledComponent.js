import styled from 'styled-components'

// import border from 'components/styled/border'



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

//外层滚动盒子
const ScroDiv = styled.div`
    -webkit-flex:1;
    width:100%;
    flex:1;
    overflow:hidden;
`
export {
    NavDiv,
    NavItem,
    ScroDiv,
}