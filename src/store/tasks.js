import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  tasks: [],
  loading: false,
  error: null,
};

// createAsyncThunk是Redux Toolkit 提供的非同步 action creator
// 在 createSlice中可以使用 extraReducers 來處理這些非同步 action 的狀態，將非同步 action 的不同階段（例如 pending、fulfilled、rejected）與對應的 reducer 函式進行匹配，這樣就可以自動處理非同步 action 的狀態變化。
export const fetchTasks = createAsyncThunk(
  'fetchTasks',
  async (payload, { rejectWithValue }) => {
    // rejectWithValue 用於拒絕此非同步 action 並提供一個值給 reducer
    try {
      const response = await axios.get('http://localhost:5000/api/tasks');
      return { tasks: response.data };
    } catch (error) {
      return rejectWithValue({ error: error.message });
    }
  },
);

// 使用createSlice可以同時創建Action和Reducer
const taskSlice = createSlice({
  name: 'tasks',
  initialState: initialState,
  reducers: {
    getTasks: (state, action) => {
      state.tasks = action.payload.tasks;
    },
    // action: function
    addTask: (state, action) => {
      state.tasks.push({
        id: state.length + 1,
        task: action.payload.task,
        completed: false,
      });
    },
    removeTask: (state, action) => {
      return state.tasks.filter(task => task.id !== action.payload.id);
    },
    completeTask: (state, action) => {
      const index = state.tasks.findIndex(
        task => task.id === action.payload.id,
      );
      if (index !== -1) {
        state.tasks[index].completed = true;
      }
    },
  },
  extraReducers: {
    [fetchTasks.pending]: (state, action) => {
      state.loading = true;
    },
    [fetchTasks.fulfilled]: (state, action) => {
      state.tasks = action.payload.tasks;
      state.loading = false;
    },
    [fetchTasks.rejected]: (state, action) => {
      state.error = action.payload.error;
      state.loading = false;
    },
  },
});

export const { getTasks, addTask, removeTask, completeTask } =
  taskSlice.actions;
export default taskSlice.reducer;
