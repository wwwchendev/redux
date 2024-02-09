import store from '@/store/configureStore';
import { addTask, removeTask, completeTask, fetchTodo } from '@/store/tasks';
import { addEmployee, removeEmployee } from '@/store/employees';

// 訂閱狀態更新
const unsubscribe = store.subscribe(() => {
  console.log('更新', store.getState());
});

// 派發action
store.dispatch(addEmployee({ name: '員工一' }));
store.dispatch(removeEmployee({ id: 1 }));
// store.dispatch(addTask({ task: '使用createAction建立' }));
// store.dispatch(completeTask({ id: 1 }));
// >>[{"id":1,"task":"這是一個新任務2","completed":false}]
// >>[{"id":1,"task":"這是一個新任務2","completed":true}]

// 取得狀態
// console.log(JSON.stringify(store.getState()));

// store.dispatch(removeTask({ id: 1 }));
// console.log(JSON.stringify(store.getState()));
// >>[]

// 執行非同步處理
// store.dispatch(fetchTodo(2));
// store.dispatch(fetchTodo(3));

store.dispatch({
  type: 'SHOW_ERROR', payload: {
    error: '測試error中間件',
  },
});

// 取消訂閱
// unsubscribe();
const Home = () => {
  return <div>Home</div>;
};

export default Home;
