import styled from 'styled-components'
import border from 'components/styled/border'

const MusicBar  = border({
    component:styled.div`
        width:100%;
        height:.6rem;
        background:#fff;
        opacity:0.95;
        position:absolute !important;
        bottom:0;
        left:0;
        display:flex;
        align-items:center;
        padding:0 .1rem;
    `,
    width:'1px 0 0 0',
    color:'#ccc'
})
   


const  ImgBar = styled.div`
    width:.5rem;
    height:.5rem;
    img{
        width:100%;
        height:100%;
    }
`

const Text = styled.div`
    flex:1;
    margin-left:.1rem;
`

const IconBar = styled.div`
    width:.36rem;
    height:.36rem;
    margin-left:.1rem;
    img{
        width:100%;
        height:100%;
    }
`
export {
    MusicBar,
    ImgBar,
    Text,
    IconBar
}