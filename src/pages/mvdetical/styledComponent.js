import styled from 'styled-components'
import border from 'components/styled/border'




const Content = styled.div`
    padding:.12rem .08rem;
   p{
       font-size:.16rem;
       font-weight:bold;
        margin-top:.2rem;
   }
   .active{
    
       background:#eee;
    }
    `
    
    const Span = border({
        component:styled.span`
        color:red;
        margin-right:.08rem;
        font-size:.1rem;
        display:inline-block;
        padding:.02rem;
        `,
        width:'1px',
        color:"red"
    })
    
    const Text = styled.span`
    color:gray;
    font-size:.12rem;
    margin-right:.1rem;
    line-height:.8rem;
    `
    const Quality = styled.div`
        display:inline-block;
        width:1rem;
        text-align:center;
        margin-right:.1rem;
        line-height:.4rem;
        flex:1;
    `
    const Wrap = styled.div`
        display:flex;
        
    `
export {
    Content,
    Span,
    Text,
    Quality,
    Wrap,

}