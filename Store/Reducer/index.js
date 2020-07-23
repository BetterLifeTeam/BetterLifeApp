import { combineReducers } from 'redux'
import toggleTask from './TaskReducer'
import toggleSetting from './SettingReducer'

export default combineReducers({
    toggleTask,
    toggleSetting
})