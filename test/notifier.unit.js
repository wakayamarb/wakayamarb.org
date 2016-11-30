import should from 'should'
import Notifier from '../src/event-notify.js'

should()

describe('test of Notifier', () => {

  it('should have property events,', () => {
    new Notifier(['events']).events[0].should.be.exactly('events')
  })

  it('should request events json.', (done) => {
    const url = 'https://gist.githubusercontent.com/KamataRyo/cd7729398191e0927c7134a4b5dce600/raw/3e9b046d73fa2ea2d3cfd533bf8204d0ad5e22a3/dummyevents.json'

    const notifier = new Notifier()
    notifier.getEvents(url, (events) => {
      notifier.events.should.equal(events)
      notifier.events.should.be.a.Array()
      notifier.events.length.should.be.above(0)
      done()
    })
  })

  describe('test of render', () => {
    // test stub of DOM element
    class Element {
      constructor(dataDefault) { this.attrs = {'data-default': dataDefault } }
      getAttriute(key) { return this.attrs[key] }
      setAttribute(key, value) { this.attrs[key] = value }
    }

    it('should success with effective url', done => {

      const url = 'https://gist.githubusercontent.com/KamataRyo/cd7729398191e0927c7134a4b5dce600/raw/3e9b046d73fa2ea2d3cfd533bf8204d0ad5e22a3/dummyevents.json'

      const [
        titleElement,
        dateElement,
        urlElement
      ] = [
        new Element('the title'),
        new Element('not scheduled'),
        new Element('http://example.com')
      ]

      new Notifier().getEvents(url).render({
        title:      titleElement,
        starts_at:  dateElement,
        public_url: urlElement
      }, () => {
        titleElement.innerHTML.should.not.equal('the title')
        new Date(dateElement.innerHTML).getDay().should.be.a.Number()
        urlElement.attrs.href.should.not.equal('http://example.com')
        done()
      })
    })
  })

})
