import styled from 'styled-components'

const Wrap = styled.div`
    width: 200px;
    height: 200px;
    display: flex;
    background:${props=>props.bg};
    align-items: center;
    justify-content: center;
    position:fixed;
    z-index:100;
    top:0;
    right:0;
    bottom:0;
    left:0;
    margin:auto;
    >div{
        width: 20px;
        height: 20px;
        background:${props=>props.itembg};
        border-radius: 50%;
        -webkit-box-reflect:below 20px linear-gradient(transparent,transparent 60%,rgba(0,0,0,.3));
    }
    
    div:first-child{
        transform-origin: 0 -40px;
        animation: move1 1s ease infinite;
    }
    div:last-child{
        transform-origin: 20px -40px;
        animation: move2 1s  ease infinite;
    }

    @keyframes move1{
        0%{transform: rotateZ(0);}
        20%{transform: rotateZ(60deg);}
        50%{transform: rotateZ(0);}
        100%{transform: rotateZ(0);}
        /*上0.2,下0.3，停0.5*/
    }
    @keyframes move2{
        0%{transform: rotateZ(0);}
        50%{transform: rotateZ(0);}
        70%{transform: rotateZ(-60deg);}
        100%{transform: rotateZ(0);}
        /*停0.5，上0.2，下0.3*/
    }
`

const Item = styled.div`
    background:${props=>props.bg?props.bg:'red'}
`

const Cover = styled.div`
    position:absolute;
    width:100%;
    height:100%;
    background:rgba(0,0,0,0.4);
    z-index:99;
`

export {
    Wrap,
    Item,
    Cover
}