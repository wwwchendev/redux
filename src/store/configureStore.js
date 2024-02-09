import { configureStore } from '@reduxjs/toolkit';
import taskReducer from '@/store/tasks';
import employeeReducer from '@/store/employees';

// @reduxjs/toolkit讓開發者可以直接使用非同步操作而無需額外設定
const store = configureStore({
  reducer: {
    tasks: taskReducer,
    employees: employeeReducer,
  },
});

export default store;
