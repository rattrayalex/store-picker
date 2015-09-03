import React from 'react'
import Suggestion from './Suggestion'
import { getMockedSuggestions } from './api'


export default class StorePicker extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      suggestions: [],
    }
  }
  fetchChoices() {
    //
    // TODO: use API version when CORS is fixed
    //
    // TODO: ensure responses returned out of order
    // don't cause problems
    // getSuggestions(this.state.text).then( (suggestions) => {
    //   console.log(suggestions)
    //   this.setState({ suggestions })
    // })

    let suggestions = getMockedSuggestions(this.state.text)
    this.setState({ suggestions })
  }
  handleChange(e) {
    let { value } = e.target
    this.setState(
      { text: value },
      this.fetchChoices.bind(this)
    )
  }
  render() {
    return (
      <div>

        <input type='text'
          className='autocomplete'
          placeholder='Search for Your Store'
          onChange={this.handleChange.bind(this)}
          value={this.state.text}
        />

        <div className='suggestions'>
          {this.state.suggestions.map( (s) =>
            <Suggestion key={s.id} suggestion={s} />
          )}
        </div>

      </div>
    )
  }
}
