import { createStore, combineReducers} from 'redux';
import toggleSetting from './Reducer/SettingReducer';
import toggleTask from './Reducer/TaskReducer';

const reducers = combineReducers({
  toggleTask,
  toggleSetting
})

export default createStore(toggleSetting)