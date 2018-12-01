// header
import styled from 'styled-components'
import border from 'components/styled/border'





const Head = border({
    component:styled.div`
    overflow:hidden;
    display:flex;
   
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


const Wrap = styled.div`
    display:flex;
    background:#dd4137;
    height:.44rem !important;

`
const InputBar = styled.div`
    flex:1;
    height:100%;
    padding:.1rem 0 0;
    position:relative;

`
const Input = border({
    component:styled.input`
        width:94%;
        height:80%;
        background:#dd4137;
        color:white;
    `,
    width:'0 0 1px 0',
    color:'gray'
})


const UlBar = styled.ul`
    padding:.1rem;
    display:flex;
    flex-wrap:wrap;

`

const LiItem = styled.li`
    border-radius:.2rem/50%;
    padding:.08rem .16rem;
    margin-right:.1rem;
    margin-bottom:.1rem;
    background:#eee;
`


const SubNav = styled.ul`
    position:absolute;
    top:100%;
    left:0;
    background:rgb(230,230,230);
    width:94%;
    box-shadow:5px 5px 10px rgb(180,180,180)
`
const SubLi = border({
    component:styled.li`
        line-height:.4rem;
        text-indent:.1rem;
    `,
    width:'0 0 2px 0',
    color:'lightgray'
})

// const Classif = styled.div`
//     display:flex;
//     div{
//         line-height:.3rem;

//     }

// `


export {
    Head,
    Wrap,
    InputBar,
    Input,
    UlBar,
    LiItem,
    SubNav,
    SubLi,
   
 
}