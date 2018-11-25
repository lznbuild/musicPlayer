import styled from 'styled-components'

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
const Div = styled.div`
    display:flex;
    flex-direction:column;

`
export {
    MiddleContainer,
    ImgDiv,
    Div

}