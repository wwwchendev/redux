import React from 'react'
import store from "@/store"
import { addTask, removeTask, completeTask } from '@/actions'

// 訂閱狀態更新
const unsubscribe = store.subscribe(() => {
  console.log('更新', store.getState());
})

// 派發action
store.dispatch(addTask('這是一個新任務1'))
store.dispatch(completeTask(1))
// >>[{"id":1,"task":"這是一個新任務2","completed":false}]
// >>[{"id":1,"task":"這是一個新任務2","completed":true}]

// 取得狀態
console.log(JSON.stringify(store.getState()));
// 取消訂閱
unsubscribe()

store.dispatch(removeTask(1))
console.log(JSON.stringify(store.getState()));
// >>[]



const Home = () => {
  return (
    <div>Home</div>
  )
}

export default Home