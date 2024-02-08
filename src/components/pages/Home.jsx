import React from 'react'
import store from "@/store"

store.dispatch({
  type: 'ADD_TASK',
  payload: {
    task: '這是一個新任務2'
  }
})
console.log(JSON.stringify(store.getState()));
// [{"id":1,"task":"這是一個新任務2","completed":false}]

const Home = () => {
  return (
    <div>Home</div>
  )
}

export default Home