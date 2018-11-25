import styled from 'styled-components'


const Title = styled.h2`
    font-size:.16rem;
    line-height:.4rem;
    padding-left:.05rem;
`

const UlBar = styled.ul`
    padding:.1rem .05rem;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
`
const LiBar = styled.li`
    position:relative;
    width:1.78rem;
    margin-bottom:.1rem;
    border-radius:5px;
    overflow:hidden;
    img{
        width:100%;
    }
    p{
        line-height:.2rem;
        font-size:.12rem;
    }
`

export {
    Title,
    UlBar,
    LiBar
}