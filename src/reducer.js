import * as actionTypes from '@/actionTypes'

//3. 創建reducer函數用於定義如何執行操作(How to do)
let id = 0;

export default function reducer(state = [], action) {
  // 根據 action.type 進行不同的處理
  switch (action.type) {
    case actionTypes.ADD_TASK:
      return [
        ...state,
        {
          id: ++id,
          task: action.payload.task,
          completed: false,
        }
      ];
    case actionTypes.REMOVE_TASK:
      return state.filter(task => task.id !== action.payload.id);
    default:
      return state; // 若 action.type 不符合任何條件，返回原始狀態
  }
}