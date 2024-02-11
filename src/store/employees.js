import { createSlice } from '@reduxjs/toolkit';

// [
//   {
//      id: state.length + 1,
//      name: action.payload.name,
//   },{...},{...}
// ]

const employeeSlice = createSlice({
  name: 'employees',
  initialState: [],
  reducers: {
    addEmployee: (state, action) => {
      state.push({
        id: state.length + 1,
        name: action.payload.name,
      });
    },
    removeEmployee: (state, action) => {
      return state.filter(employee => employee.id !== action.payload.id);
    },
  },
});
export default employeeSlice.reducer;
export const { addEmployee, removeEmployee } = employeeSlice.actions;
