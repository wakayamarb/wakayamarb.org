'use strict'
import request from 'superagent'

export default class DoorKeeper {

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
  setURL(url) {

    const promise = new Promise(resolved => {
      request
        .get(url)
        .end((err, res) => {
          if (!err && this._isArray(res.body)) {
            this.events = res.body
          }
          resolved()
        })
    })

    return {
      // method chain wrapping promise-then
      apply: (map) => {
        return promise.then(() => {
          new Promise((resolved) => {
            this._apply(map, resolved)
          })
        }
      )}
    }

  }

  /**
   * update DOM
   */
  _apply(map, done) {

    let values = {}
    const DEFAULT = 'data-default'

    Object.keys(map).map((key) => {

      const element = map[key]
      const value = this.events[0].event[key]

      // parse data
      values[key] = (this.events.length === 0) ?
        element.getAttribute(DEFAULT) :
        value

      // update
      switch (key) {
      case 'starts_at':
        element.innerHTML = new Date(value).toLocaleDateString()
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
