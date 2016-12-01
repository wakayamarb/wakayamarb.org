import should from 'should'
import Notifier from '../src/event-notify.js'

should()

describe('test of Notifier class', () => {

  describe('test of http request', () => {

    it('should have property events,', () => {
      new Notifier(['events']).events[0].should.be.exactly('events')
    })

    it('should request events json.', done => {

      const url = 'https://gist.githubusercontent.com/KamataRyo/cd7729398191e0927c7134a4b5dce600/raw/3e9b046d73fa2ea2d3cfd533bf8204d0ad5e22a3/dummyevents.json'
      const notifier = new Notifier()
      notifier.getEvents(url, (events) => {
        notifier.events.should.equal(events)
        notifier.events.should.be.a.Array()
        notifier.events.length.should.be.above(0)
        done()
      })
    })

    it('should fail with invalid URL.', done => {

      const url = 'invalid url'
      const notifier = new Notifier()
      notifier.getEvents(url, (events) => {
        notifier.events.should.equal(events)
        notifier.events.should.be.a.Array()
        notifier.events.length.should.equal(0)
        done()
      })
    })
  })

  describe('test of render', () => {

    // declare stub class of DOM element
    class Element {
      constructor(dataDefault) { this.attrs = {'data-default': dataDefault } }
      getAttribute(key) { return this.attrs[key] }
      setAttribute(key, value) { this.attrs[key] = value }
    }
    // default values
    const [titleDefault, dateDefault, urlDefault] = [
      'the title',
      'not scheduled',
      'http://example.com'
    ]

    it('should success with effective url', done => {

      const url = 'https://gist.githubusercontent.com/KamataRyo/cd7729398191e0927c7134a4b5dce600/raw/3e9b046d73fa2ea2d3cfd533bf8204d0ad5e22a3/dummyevents.json'

      const [titleElement, dateElement, urlElement] = [
        new Element(titleDefault),
        new Element(dateDefault),
        new Element(urlDefault)
      ]

      new Notifier()
        .getEvents(url)
        .render({
          title:      titleElement,
          starts_at:  dateElement,
          public_url: urlElement
        }, () => {
          titleElement.innerHTML.should.not.equal(titleDefault)
          new Date(dateElement.innerHTML).getDay().should.be.a.Number()
          urlElement.attrs.href.should.not.equal(urlDefault)
          done()
        })
    })

    it('should fail with not effective url', done => {

      const url = 'invalid URL'

      const [titleElement, dateElement, urlElement] = [
        new Element(titleDefault),
        new Element(dateDefault),
        new Element(urlDefault)
      ]

      new Notifier()
        .getEvents(url)
        .render({
          title:      titleElement,
          starts_at:  dateElement,
          public_url: urlElement
        }, () => {
          titleElement.innerHTML.should.equal(titleDefault)
          new Date(dateElement.innerHTML).getDay().should.be.NaN()
          urlElement.attrs.href.should.equal(urlDefault)
          done()
        })
    })

    it('should be work with callback', done => {
      const url = 'https://gist.githubusercontent.com/KamataRyo/cd7729398191e0927c7134a4b5dce600/raw/3e9b046d73fa2ea2d3cfd533bf8204d0ad5e22a3/dummyevents.json'

      const [titleElement, dateElement, urlElement] = [
        new Element(titleDefault),
        new Element(dateDefault),
        new Element(urlDefault)
      ]

      const notifier = new Notifier()
      notifier.getEvents(url, () => {
        notifier.render({
          title:      titleElement,
          starts_at:  dateElement,
          public_url: urlElement
        }, () => {
          titleElement.innerHTML.should.not.equal(titleDefault)
          new Date(dateElement.innerHTML).getDay().should.be.a.Number()
          urlElement.attrs.href.should.not.equal(urlDefault)
          done()
        })
      })
    })
  })
})
