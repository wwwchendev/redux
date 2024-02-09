import { configureStore } from '@reduxjs/toolkit';
import taskReducer from '@/store/tasks';
import employeeReducer from '@/store/employees';
import log from '@/middleware/log';
import error from '@/middleware/error';
import logger from 'redux-logger';

// @reduxjs/toolkit讓開發者可以直接使用非同步操作而無需額外設定
// getDefaultMiddleware是Redux Toolkit提供的一個函數，用於獲取預設的中間件。當你調用configureStore時，Redux Toolkit會自動添加一些預設的中間件，例如處理Immutable狀態更新、檢測不安全的狀態更新模式以及處理序列化和解序列化等。
const store = configureStore({
  reducer: {
    tasks: taskReducer,
    employees: employeeReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    logger,
    error,
  ],
});

export default store;
