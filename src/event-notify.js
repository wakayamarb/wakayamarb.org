'use strict'
import request from 'superagent'

export default class EventNotifier {

  constructor(events) {
    this.events = this._isArray(events) ? events : []
  }

  /**
   * Helper to judge if Array
   */
  _isArray(arg) {
    return Object.prototype.toString.call(arg) === '[object Array]'
  }

  /**
   * http request to obtain event informations
   */
  getEvents(url, callback) {

    const promise = new Promise(resolved => {
      request
        .get(url)
        .end((err, res) => {
          if (!err) {

            // case text response
            if (Object.keys(res.body).length === 0) {
              res.body = JSON.parse(res.text)
            }

            // set field
            if (this._isArray(res.body)) {
              this.events = res.body
            }
          }

          if (typeof callback === 'function') {
            callback(this.events)
          }
          resolved()
        })
    })

    return {
      // method chain wrapping promise-then
      render: (map, callback) => {
        return promise.then(() => {
          new Promise((resolved) => {
            this.render(map, callback)
            resolved()
          })
        }
      )}
    }

  }

  /**
   * update DOM
   */
  render(map, done) {

    let values = {}
    const DEFAULT = 'data-default'

    Object.keys(map).map((key) => {

      const element = map[key]

      // parse data
      const value = (this.events.length === 0) ?
        element.getAttribute(DEFAULT) :
        this.events[0].event[key]

      // update
      values[key] = value
      switch (key) {
      case 'starts_at':

        if (new Date(value).getDay()) {
          element.innerHTML = new Date(value).toLocaleDateString()
        } else {
          element.innerHTML = value
        }
        break

      case 'public_url':
        element.setAttribute('href', value)
        break

      default:
        element.innerHTML = value
      }
    })

    if (typeof done === 'function') { done() }

  }

}
