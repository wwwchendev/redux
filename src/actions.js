import * as actionTypes from '@/actionTypes'

export const addTask = (task) => {
  return {
    type: actionTypes.ADD_TASK,
    payload: {
      task: task
    }
  }
}

export const removeTask = (taskId) => {
  return {
    type: actionTypes.REMOVE_TASK,
    payload: {
      id: taskId
    }
  }
}