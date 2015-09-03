import React from 'react'
import StorePicker from './StorePicker'

import './base.css'


class App extends React.Component {
  render() {
    return (
      <div>

        <center>
          <h1>
            Select your Store
          </h1>
        </center>

        <div className='site-wrapper'>
          <StorePicker />
        </div>

      </div>
    )
  }
}


React.render(
  <App />,
  document.body
)
