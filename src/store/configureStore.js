import { legacy_createStore as createStore, combineReducers } from "redux"
import taskReducer from '@/store/tasks'
// import userReducer from '@/store/users'

const rootReducer = combineReducers({
  tasks: taskReducer,
  //user: userReducer, // 將 userReducer 也加入組合
});

const store = createStore(rootReducer);
export default store;