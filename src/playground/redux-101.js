import {createStore} from 'redux'


const incrementCount = ({incrementBy = 1} = {}) => ({ type: 'INCREMENT', incrementBy })

const decrementCount = ({decrementBy = 1} = {}) => ({ type: 'DECREMENT', decrementBy })

const resetCount = () => ({ type: 'RESET' })

const setCount = ({setBy = 101} = {}) => ({ type: 'SET', setBy })

const reducer = (state = { count: 0}, action) => {
  switch (action.type) {
    case 'INCREMENT':
    return {
      count: state.count + action.incrementBy
    }
    case 'DECREMENT':
    return ({
      count: state.count - action.decrementBy
    })
    case 'RESET':
    return{
      count: 0
    }
    case 'SET':
    return{
      count: action.setBy
    }
    default:
    return state
  }
}

const store = createStore(reducer)

const unsubscribe = store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(incrementCount({incrementBy: 5}))

store.dispatch(incrementCount())

store.dispatch({
  type: 'RESET'
})

store.dispatch(decrementCount())

store.dispatch(decrementCount({decrementBy: 10}))

store.dispatch(setCount({setBy: 150}))
