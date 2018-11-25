import styled from 'styled-components'
import border from 'components/styled/border'


const Wrap = border({
    component:styled.div`
        margin-top:.4rem;
        display:flex;
        padding-bottom:.14rem;
        background:white;
    `,
    width:'0 0 1px 0'
})

const NavItem = styled.div`
     width:25%;

`

const NavImg = styled.div`
    width:.45rem;
    height:.45rem;
    border-radius:50%;
    margin:0 auto;
    background:#db4036 url(${props=>props.url}) no-repeat center;
    background-size:.2rem;
`

const NavText = styled.div`
    line-height:.25rem;
    font-size:.12rem;
    text-align:center;
`

export {
    Wrap,
    NavImg,
    NavItem,
    NavText
}