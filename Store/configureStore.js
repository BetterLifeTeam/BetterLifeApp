import { createStore, combineReducers} from 'redux';
import toggleTask from './Reducer/TaskReducer'
import toggleSetting from './Reducer/SettingReducer'

export default createStore(combineReducers({
    toggleTask,
    toggleSetting
  }))