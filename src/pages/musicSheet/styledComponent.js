import styled from 'styled-components'
import border from 'components/styled/border'

const Content = styled.div`
    background:#3d9b86;
    >div{
        background:#fff;
        border-top-left-radius:10px;
        border-top-right-radius:10px;
        overflow:hidden;
      
    }
`
const Title = border({
    component:styled.p`
    line-height:.44rem;
    padding:0 .2rem;
    img{
        width:.2rem;
        height:.2rem;
        margin-right:.15rem;
    }
    `,
    width:' 0 0 1px 0'
})

const Mli = border({
    component:styled.div`
    height:.53rem;
    display:flex;
    align-items:center;
    padding:0 .1rem;
    `,
    width:'0 0 1px 0',
    color:'#ccc'
})
   

const IndexBar = styled.div`
    height:.34rem;
    width:.34rem;
    border-radius:5px;
    overflow:hidden;
    img{
        width:100%;
    }
`
const TextBar = styled.div`
    flex:1;
    padding:.02rem;
    margin-left:.1rem;
    overflow:hidden;
    height:.53rem;
    p{
        font-size:.14rem;
    }
    span{
        font-size:.12rem;
        color:#999;
        margin-right:.1rem;
    }`
   




const IconBar = styled.div`
    width:1rem;
    display:flex;
    height:.46rem;
    align-items:center;
    img{
        width:.3rem;
        height:.2rem;
        margin-left:.1rem;
        
    }`
  
    

  
const Wrap = styled.div`
    flex:1;
    overflow:hidden;
`

export {
    Content,
    Mli,
    IndexBar,
    TextBar,
    IconBar,
    Title,
    Wrap
}