import styled from 'styled-components'

const IconBar = styled.div`
    position:absolute;
    top:0;
    right:0;
    margin:.03rem;
    background:rgba(0,0,0,0.6);
    display:flex;
    img{
        width:.15rem !important;
        height:.15rem;
        vertical-align:text-top;
    }
    span{
        color:#fff;
        font-size:.08rem;
    }
`



export {
    IconBar
}