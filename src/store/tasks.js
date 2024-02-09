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
    getTasks: (state, action) => {
      return action.payload.tasks;
    },
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

export const { getTasks, addTask, removeTask, completeTask } =
  taskSlice.actions;
export default taskSlice.reducer;
