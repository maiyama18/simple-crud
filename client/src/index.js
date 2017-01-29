import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import App from './components/App'
import rootReducer from './reducers'

const store = createStore(rootReducer)

const render = () => {
  ReactDOM.render(
    <App store={store} />,
    document.getElementById('root')
  )
}

store.subscribe(() => {
  render()
})
render()