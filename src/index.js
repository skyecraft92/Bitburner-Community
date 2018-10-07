import React from 'react'
import ReactDOM from 'react-dom'
import * as serviceWorker from './serviceWorker'
import App from 'grommet/components/App'
import Split from 'grommet/components/Split'
import MainSidebar from './components/MainSidebar'
import MainContent from './components/MainContent'

ReactDOM.render(
  <App centered={false}>
    <Split flex="right">
      <MainSidebar />
      <MainContent />
    </Split>
  </App>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
