// actionTypes
const ADD_TASK = 'ADD_TASK';
const REMOVE_TASK = 'REMOVE_TASK';
const COMPLETE_TASK = 'COMPLETE_TASK';

// normal Redux Action 
export const addTask = (task) => {
  return {
    type: ADD_TASK,
    payload: {
      task: task
    }
  }
}

export const removeTask = (taskId) => {
  return {
    type: REMOVE_TASK,
    payload: {
      id: taskId
    }
  }
}

export const completeTask = (taskId) => {
  return {
    type: COMPLETE_TASK,
    payload: {
      id: taskId
    }
  }
}

// Action with Redux Thunk
// 透過中間件在action creator 內部進行非同步操作，然後再派發一般的 action 到 reducer，以更新 Redux store 中的狀態。
export const fetchTodo = (id) => {
  return async function (dispatch, getState) {
    try {
      const result = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      const task = await result.json()
      dispatch(addTask(task.title))
    } catch (error) {
      console.log(error)
    }
  }
}

// reducer
// 創建reducer函數用於定義如何執行操作(How to do)
let id = 0;

export default function reducer(state = [], action) {
  // 根據 action.type 進行不同的處理
  switch (action.type) {
    case ADD_TASK:
      return [
        ...state,
        {
          id: ++id,
          task: action.payload.task,
          completed: false,
        }
      ];
    case REMOVE_TASK:
      return state.filter(task => task.id !== action.payload.id);
    case COMPLETE_TASK:
      return state.map(task => task.id === action.payload.id
        ? {
          ...task,
          completed: true,
        }
        : task
      );
    default:
      return state; // 若 action.type 不符合任何條件，返回原始狀態
  }
}