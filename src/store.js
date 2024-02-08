// createStore 用於創建 Redux store，並將 reducer 作為參數傳遞給它。
// 這個 store 實例可以使用 dispatch 方法來派發 action，
// 從而觸發 reducer 函數，進而改變應用程序的狀態。這是 Redux 中管理狀態的一個基本流程。

/*
1.設計store結構
  {
    task:[
      {
        id:1,
        task:'design store',
        completed: false,
      },{...},{...}
    ],
    employees: [{...},{...},{...}]
  }

2.列出可以對store派發的actions //action structure
  const addTaskAction = {
    type: 'ADD_TASK',
    payload: {
      task: '這是一個新任務' 
    }       
  }
  const removeTaskAction = {
    type: 'REMOVE_TASK',
    payload: {
      id: 1,
    }    
  }
*/
import { legacy_createStore as createStore } from "redux"
import reducer from "@/reducer"

const store = createStore(reducer)
export default store;