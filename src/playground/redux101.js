import { createStore} from 'redux';

// Action generators

// SAME AS :
// const incrementCount = (payload = {}) => {
//   return {
//     type: 'INCREMENT',
//     incrementBy: typeof payload.incrementBy === 'number' ? payload.incrementBy : 1,
//   };
// }
const incrementCount = ({incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({decrementBy = 1} = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const resetCount = () => ({
  type: 'RESET'
});

const setCount = ({count}) => ({
  type: 'SET',
  count
});

// Reducers
const countReducer = (state = {count: 0}, action)=>{
  switch (action.type) {
    case 'INCREMENT':
      return {
          count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      }
    case 'RESET':
      return {
        count: 0
      }
    case 'SET':
      return {
        count: action.count
      }
    default:
        return state;
  }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
})

store.dispatch(incrementCount());

store.dispatch(incrementCount({incrementBy: 299}));

store.dispatch(decrementCount({decrementBy: 50}));
store.dispatch(decrementCount());

store.dispatch(resetCount());

store.dispatch(setCount({count: 5}));
