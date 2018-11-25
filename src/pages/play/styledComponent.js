import styled from 'styled-components'
//引入图片
import cd from 'assets/images/cd.png'

const Wrap = styled.div`
    height:100%;
    Background:linear-gradient(-45deg, #5e6265 10%, #333b3e 90%);

`
const ImgBar = styled.div`

    position:relative;
    height:.64rem;
    img{
        height:1.25rem;
        transform:rotate(-90deg);
        transform-origin:50% 10%;
        position:absolute;
        top:-0.06rem;;
        right:0;
        left:0;
        margin:0 auto;
        transition: all 1s;
    }
    .active{
        transform:rotate(-30deg)
    }
`
const CoverBar = styled.div`
    height:2.8rem;
    >div{
        height:100%;
        background:url(${cd}) no-repeat 50% 0; 
        background-size:2.8rem;
        text-align:center;
        padding:0.475rem 0;

        img{
            width:1.85rem;
            height:1.85rem;
            border-radius:50%;
            animation:move 5s linear infinite;
            animation-play-state:paused;
        }
        
        .action{
            animation-play-state:running;
        }

        @keyframes move{
            0%{
				-webkit-transform:rotate(0deg);
			}
			100%{
				-webkit-transform:rotate(360deg);
			}
        }
    }


`

const NavBar = styled.div`
    margin-top:1rem;
`

const PlayBar = styled.div`
    padding: 0.12rem
    display:flex;
    align-items:center;
`

const TimeBar = styled.span`
    width:.3rem;
    color:#fff;
`

const ProgressWrap = styled.div`
    flex:1;
    padding:.1rem;
    position:relative;
`


const ProgressBar = styled.div`
    height:0.04rem;
    background:#ccc;
`

const Progress = styled.div`
    height:100%;
    width:10%;
    background:red;
`
const Range = styled.div`
    width:0.1rem;
    height:0.1rem;
    background:green;
    border-radius:50%;
    position:absolute;
    top:30%;
    left:10%;
`



const ButtonBar = styled.div`
    margin-top:.3rem;
    display:flex;
    padding: 0 .2rem;
    justify-content:space-between;
    img{
        width:.34rem;
        height:.34rem;
    }
`






export {
    Wrap,
    ImgBar,
    CoverBar,
    NavBar,
    PlayBar,
    ButtonBar,
    TimeBar,
    Progress,
    ProgressBar,
    ProgressWrap,
    Range
}