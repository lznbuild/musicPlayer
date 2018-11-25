const defaultState = {
    b:'music'
}


export default (state = defaultState,action)=>{
    if(action.type === 'add'){
        return {
            b:'Music'
        }
    }

    return state
}