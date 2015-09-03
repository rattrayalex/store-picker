import React from 'react'

import './base.css'


class App extends React.Component {
  render() {
    return (
      <div>
        <center>
          <h1>
            Store Picker
          </h1>
        </center>
        <div className='site-wrapper'>
          Hello, World!
        </div>
      </div>
    )
  }
}


React.render(
  <App />,
  document.body
)
