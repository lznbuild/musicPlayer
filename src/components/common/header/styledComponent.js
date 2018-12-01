// header
import styled from 'styled-components'
import border from 'components/styled/border'
const Head = border({
    component:styled.div`
    height:.44rem !important;
    overflow:hidden;
    display:flex;
    background:${props=>props.bg ? props.bg : `#3d9b86`};
    align-items:center;
    color:#fff;
    font-size:.16rem;
    position:relative !important;
    z-index:900;
    img{
        width:.3rem;
        height:.2rem;
        vertical-align:middle;
        margin: 0 .1rem;
        
    }
`,
    width:'0 0 1px 0',
    color:'#ccc'
})






export {
    Head
}