import styled from 'styled-components'
import ellipsis from 'components/styled/ellipsis'

const DivWrap = styled.div`
    display:flex;
    padding:.18rem;
    background:#3d9b86;
    color:white;
    justify-content:space-between;
    div:nth-child(1){
        margin-right:.1rem;
        width:1.2rem !important;
        border-radius:5px;
        overflow:hidden;
        position:relative;
        img{
            width:100%;
        }
    }
   .text{
        display:flex;
        flex-direction:column;
        justify-content:space-between;
    }
`

const Title = ellipsis({
    component:styled.h2`
        font-size:.16rem;
        line-height:.4rem;
        width:2.4rem !important;
    `

})

const Content = ellipsis({
    component:styled.p`
        font-size:.12rem;
        width:2.4rem !important;
        color:#eee;
    `,
    lineClamp:3
})

export {
    DivWrap,
    Title,
    Content
}