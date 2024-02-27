'use strict'
import request from 'superagent'
import renderer from './event-notify-renderer'

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
  render(elements, done) {

    Object.keys(elements).map((key) => {

      const element = elements[key]
      // Bool(false) with no event
      const value = (this.events.length !== 0) && this.events[0].event[key]

      // update
      renderer[key].render(element, value)
    })

    if (typeof done === 'function') { done() }

  }

}
