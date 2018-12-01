import styled from 'styled-components'

const TimeBar = styled.span`
    width:.3rem;
    color:#fff;
    font-size:.12rem;
`
const Div = styled.div`
    padding: 0.12rem
    display:flex;
    align-items:center;
`



const ProgressWrap = styled.div`
    flex:1;
    padding:.1rem 0;
    position:relative;
`


const ProgressBar = styled.div`
    height:0.04rem;
    background:#ccc;
`

const Progress = styled.div`
    height:100%;
    width:${props=>props.width?props.width:0};
    background:red;
`

const Range = styled.div`
    width:0.1rem;
    height:0.1rem;
    background:#fff;
    border-radius:50%;
    position:absolute;
    top:30%;
    left:${props=>props.left};
`




export {
    TimeBar,
    Progress,
    ProgressBar,
    ProgressWrap,
    Range,
    Div
}