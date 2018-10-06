import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'
import TopAppBar from '../components/TopAppBar'

it('App renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<App />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('TopAppBar component renders without crashing.', () => {
  const div = document.createElement('div')
  ReactDOM.render(<TopAppBar />, div)
  ReactDOM.unmountComponentAtNode(div)
})
