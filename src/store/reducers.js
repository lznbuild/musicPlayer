import { combineReducers } from 'redux'

import { reducer as home } from 'pages/home'
import { reducer as music } from 'pages/music'



export default combineReducers({
    home,
    music
})

