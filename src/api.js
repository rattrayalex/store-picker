//
// TODO: use one/some of these tools when the API allows CORS
//
// import 'es6-promise'  // polyfill required by isomorphic-fetch
// import fetch from 'isomorphic-fetch'
// import $ from 'jquery'
// $.ajaxSetup({ dataType: "jsonp" })
// window.$ = $


import { all_locations } from './mocks'

const BASE_URL = 'http://infinite-sands-9943.herokuapp.com/'


export function addUserStore(location_id) {
  const url = BASE_URL + 'users/1'
  const body = JSON.stringify({
    id: 1,
    location_id,
  })
  let promise = fetch(url, {
    body,
    method: 'put',
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  }).then( (response) => {
    console.log('PUT user location response', response)
    return response
  })
  // TODO: error handling
  return promise
}


// TODO: use better/fuzzy search criteria
export function getMockedSuggestions(query) {
  query = query.toLowerCase().trim()

  if ( !query ) {
    return []
  }

  return all_locations.filter( (loc) =>
    ( loc.search_str.toLowerCase().indexOf(query) > -1 )
  )
}


// TODO: use one/some of these tools when the API allows CORS
//
// // returns a Promise
// export function getSuggestions(query) {
//   const encoded_query = encodeURIComponent(query)
//   const url = BASE_URL + 'locations?query=' + encoded_query
//   return (
//     // $.ajax({
//     //   url,
//     //   crossDomain: true,
//     //   dataType: 'jsonp',
//     // })

//     fetch(url, { mode: 'cors'})
//       .then( (response) => {
//         console.log(response)
//         return response.json()
//       })
//       // TODO: error handling
//   )
// }
