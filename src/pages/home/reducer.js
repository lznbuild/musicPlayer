const defaultState = {
    //是否显示底层播放区域
    playSwiper:true,

    //是否把音乐进度条的进度给页面
    htOnOff:true,

    //是否播放
    playOnOff:false,
    
    //歌词
    musicText:'',

    //歌词的显隐
    musicTextSwiper:false

    //音乐的进度计算

}


export default(state = defaultState,action)=>{
    if(action.type === "change_playSwiper"){
        return {
            ...state,
            playSwiper:!state.playSwiper
        }
    }

    if(action.type === "change_htOnOff"){
        return {
            ...state,
            htOnOff:!state.htOnOff
        }
    }

    if(action.type === "change_playOnOff"){
   
        return {
            ...state,
            playOnOff:!state.playOnOff
        }
    }
    if(action.type === "change_playSwiperTrue"){
        return {
            ...state,
            playSwiper:action.payload
        }
    }

    if(action.type === "change_musicText"){
        
        return {
            ...state,
            musicText:action.payload
        }
    }

    if(action.type === "change_musicTextOnOff22"){
        return {
            ...state,
            musicTextSwiper:!state.musicTextSwiper,
        }
    }
    if(action.type === "change_musicText"){
        return {
            ...state,
            musicText:action.payload
        }
    }

    return state
}
