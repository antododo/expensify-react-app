// Expenses Reducer
const expenseReducerDefaultState = [];
const expenseReducer = (state = expenseReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      // Same as
      // return state.concat(action.expense);
      return [...state,action.expense];
    case 'REMOVE_EXPENSE':
      return state.filter(({id})=> id !== action.id);
    case 'EDIT_EXPENSE':
      return state.map((expense)=> {
        if(expense.id === action.id){
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        }
      });

    default:
      return state;
  }
}

export default expenseReducer;
