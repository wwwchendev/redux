import { createSlice } from '@reduxjs/toolkit';

// [
//   {
//      id: state.length + 1,
//      task: action.payload.task,
//      completed: false,
//   },{...},{...}
// ]

// 使用createSlice可以同時創建Action和Reducer
const taskSlice = createSlice({
  name: 'tasks',
  initialState: [],
  reducers: {
    // action: function
    addTask: (state, action) => {
      state.push({
        id: state.length + 1,
        task: action.payload.task,
        completed: false,
      });
    },
    removeTask: (state, action) => {
      return state.filter(task => task.id !== action.payload.id);
    },
    completeTask: (state, action) => {
      const index = state.findIndex(task => task.id === action.payload.id);
      if (index !== -1) {
        state[index].completed = true;
      }
    },
  },
});

export const fetchTodo = id => {
  return async function (dispatch, getState) {
    try {
      const result = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${id}`,
      );
      const resultTask = await result.json();
      dispatch(addTask({ task: resultTask.title }));
    } catch (error) {
      console.log(error);
    }
  };
};

export const { addTask, removeTask, completeTask } = taskSlice.actions;
export default taskSlice.reducer;

// createAction
// export const addTask = createAction('ADD_TASK');
// export const removeTask = createAction('REMOVE_TASK');
// export const completeTask = createAction('COMPLETE_TASK');

// reducer
// 創建reducer函數用於定義如何執行操作(How to do)
// const initialState = [];
// export default createReducer(initialState, builder => {
//   builder
//     .addCase(addTask.type, (state, action) => {
//       state.push({
//         id: state.length + 1,
//         task: action.payload.task,
//         completed: false,
//       });
//     })
//     .addCase(removeTask.type, (state, action) => {
//       return state.filter(task => task.id !== action.payload.id);
//     })
//     .addCase(completeTask.type, (state, action) => {
//       const index = state.findIndex(task => task.id === action.payload.id);
//       if (index !== -1) {
//         state[index].completed = true;
//       }
//     });
// });
