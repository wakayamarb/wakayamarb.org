// phantom.js script
var webPage = require('webpage')
var page = webPage.create()

page.open('http://127.0.0.1:8080/', function() {
  window.setTimeout(function() {
    page.viewportSize = { width: 1024, height: 1080 }
    page.render('./screenshots/pc.jpg')
    page.viewportSize = { width: 320, height: 568 }
    page.render('./screenshots/sp.jpg')
    phantom.exit()
  },200)
})
