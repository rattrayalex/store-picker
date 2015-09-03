import React from 'react'

import { addUserStore } from './api'


// TODO: be less hacky about this...
// (ideally, get from backend)
// relies on the format:
// "name, street, city, postal_code, country_code[...other stuff]""
function _getLocationData(loc) {
  let { street, postal_code } = loc
  let [ name, city_etc, ] = loc.search_str
    .split(`, ${street}, `)
  let [ city, ] = city_etc
    .split(`, ${postal_code}, ${loc.country_code}`)

  return {
    name,
    street,
    city,
    postal_code,
  }
}


export default class Suggestion extends React.Component {
  handleAdd() {
    addUserStore({ location_id: this.props.suggestion.id })
    // TODO: update UI in some way on success
  }
  render() {
    let { name, street, city, postal_code } =
      _getLocationData(this.props.suggestion)

    return (
      <div className='suggestion'>

        <div className='pull-right'>
          <button className='btn btn-default'
            onClick={this.handleAdd.bind(this)}>
            + Add
          </button>
        </div>

        <div>
          <strong>{name}</strong>
        </div>
        <div>{street}</div>
        <div>{city}, {postal_code}</div>

      </div>
    )
  }
}
