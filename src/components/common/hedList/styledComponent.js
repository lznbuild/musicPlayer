import styled from 'styled-components'

const DivWrap = styled.div`
    display:flex;
    height:${props=>props.height?props.height:`.63rem`};
    background:${props=>props.bg?props.bg:``};
    div{
        width:25%;
        height:100%;
        display:flex;
        flex-direction:column;
        align-items:center;
        jusitify-content:center;
        color:#fff;
        img{
            width:.23rem;
            height:.23rem;
            margin-bottom:.04rem;
        }
    }
`

export {
    DivWrap
}