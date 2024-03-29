import store from '@/store/configureStore';
import { loadTasks, addNewTask, updateCompleted, deleteTask } from '@/store/tasks';

// 取得資料併存進Redux store
// 儘管您可以直接在組件中使用 axios 呼叫 API 並處理回應，但將資料存儲在 Redux store 中，可以在應用程式中的任何組件中訪問存儲在 Redux 中的資料，而不需要將資料傳遞到組件層次結構中的每個層次。

// 1.一般呼叫API的方法
// const gettingTasks = async () => {
//   try {
//     // 從後端API獲取資料
//     const response = await axios.get('/tasks');

//     // 用store.dispatch()將資料傳遞給 Redux store，以通知 store 資料已經改變。
//     store.dispatch(
//       getTasks({
//         tasks: response.data,
//       }),
//     );
//   } catch (error) {
//     console.log(error);
//     store.dispatch({
//       type: 'SHOW_ERROR',
//       payload: {
//         error: error.message,
//       },
//     });
//   }
// };
// gettingTasks();

// 2.使用redux-toolkit的createAsyncThunk呼叫API
// store.dispatch(fetchTasks());

// 3.使用自定義的API中間件
store.dispatch(loadTasks());
store.dispatch(
  addNewTask({
    task: '新的任務',
  }),
);
store.dispatch(
  updateCompleted({
    id: 6,
    completed: true,
  }),
);
store.dispatch(deleteTask({ id: 3 }));
store.dispatch(deleteTask({ id: 4 }));
store.dispatch(deleteTask({ id: 5 }));

// store.dispatch({
//   type: 'apiRequest',
//   payload: {
//     url: '/tasks',
//     onStart: 'tasks/apiRequested',
//     onSuccess: 'tasks/getTasks',
//     onError: 'tasks/apiRequestedFailed',
//   },
// });

const Home = () => {
  return <div>Home</div>;
};

export default Home;
