import React from 'react'
import store from "@/store"
import { addTask, removeTask } from '@/actions'

store.dispatch(addTask('這是一個新任務2'))
console.log(JSON.stringify(store.getState()));
// >>[{"id":1,"task":"這是一個新任務2","completed":false}]

store.dispatch(removeTask(1))
console.log(JSON.stringify(store.getState()));
// >>[]

const Home = () => {
  return (
    <div>Home</div>
  )
}

export default Home