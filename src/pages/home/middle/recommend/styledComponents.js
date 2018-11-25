import styled from 'styled-components'
import border from 'components/styled/border'




const RemDiv = styled.div`
    height:1.2rem;
    background:#db4036;
`
//recommend组件
const Title = styled.h2`
    line-height:.4rem;
    padding-left:.06rem;
    font-size:.16rem;
`
const ThemeWrap = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    padding:0 .05rem

`
const  ThemeItem = border({
    component:styled.div`
        width:1.15rem;
        height:1.5rem;
        margin-bottom:.2rem;
        overflow:hidden;
        position:relative;
        img{
            width:1.15rem;
            height:1.1rem;
        }
           
        p{
            font-size:.12rem;
            line-height:.2rem;
        }
        
    `,
    width:'0',
    radius:'5'

})



        
export {
    RemDiv,
    Title,
    ThemeWrap,
    ThemeItem,
}