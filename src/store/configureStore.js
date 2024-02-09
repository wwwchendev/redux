import { configureStore } from '@reduxjs/toolkit';
import taskReducer from '@/store/tasks';
// import userReducer from '@/store/users'

// @reduxjs/toolkit讓開發者可以直接使用非同步操作而無需額外設定
const store = configureStore({
  reducer: {
    tasks: taskReducer,
    //user: userReducer, // 將 userReducer 也加入組合
  },
});

export default store;
