import { legacy_createStore as createStore, combineReducers, applyMiddleware, compose } from "redux"
import { thunk } from 'redux-thunk'; // Redux thunk用於非同步請求處理
import { devToolsEnhancer } from 'redux-devtools-extension'
import taskReducer from '@/store/tasks'
// import userReducer from '@/store/users'

const rootReducer = combineReducers({
  tasks: taskReducer,
  //user: userReducer, // 將 userReducer 也加入組合
});

// 加入中間件:thunk
//const store = createStore(rootReducer, applyMiddleware(thunk)); 

// 1.使用devtools 基本store寫法
// const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// const store = createStore(rootReducer, 
//     composeEnhancers(applyMiddleware(thunk))
// );

// 2.使用devtools 使用其他中間件的store寫法
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(rootReducer, 
//     composeEnhancers(applyMiddleware(thunk))
// );

// 3.使用devtools並啟用trace
const composeEnhancers = compose(
  applyMiddleware(thunk),
  devToolsEnhancer({ trace: true })
);

const store = createStore(
  rootReducer,
  // composeEnhancers(applyMiddleware(thunk)),
  composeEnhancers
);

export default store;