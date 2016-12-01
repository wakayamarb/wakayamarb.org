'use strict'
import moment from 'moment'

const DEFAULT = 'data-default'

const renderer = {

  'title': (element, value) => {
    if (value) {
      element.innerHTML = value
    } else {
      element.innerHTML = element.getAttribute(DEFAULT)
    }
  },

  'starts_at': (element, value) => {
    if (value && moment(value).isValid()) {
      element.innerHTML = new Date(value).toLocaleDateString()
    } else {
      element.innerHTML = element.getAttribute(DEFAULT)
    }
  },

  'public_url': (element, value) => {
    if (value) {
      element.setAttribute('href', value)
    } else {
      element.setAttribute('href', element.getAttribute(DEFAULT))
    }
  }

}

// attach render method for readability
Object.keys(renderer).forEach(key => {
  renderer[key] = { render: renderer[key] }
})

export default renderer
