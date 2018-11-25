const defaultState = {
    playSwiper:true
}


export default(state = defaultState,action)=>{
    if(action.type === "change"){
        return {
            playSwiper:action.payload
        }
    }
    return state
}
