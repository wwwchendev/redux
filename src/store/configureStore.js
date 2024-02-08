import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux"
import { thunk } from 'redux-thunk'; // Redux thunk用於非同步請求處理

import taskReducer from '@/store/tasks'
// import userReducer from '@/store/users'

const rootReducer = combineReducers({
  tasks: taskReducer,
  //user: userReducer, // 將 userReducer 也加入組合
});

const store = createStore(rootReducer, applyMiddleware(thunk)); // 加入中間件:thunk

export default store;