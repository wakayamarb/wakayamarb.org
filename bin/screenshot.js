#!/usr/bin/env node

// phantom.js script
var webPage = require('webpage')
var page = webPage.create()

console.log('[caution] 3D css transform does not work with PhantomJS. Please refer to "https://github.com/ariya/phantomjs/issues/12779".')

page.open('http://127.0.0.1:8080/', function() {
  window.setTimeout(function() {
    page.viewportSize = { width: 1024, height: 1080 }
    page.render('./screenshots/pc.jpg')
    page.viewportSize = { width: 320, height: 568 }
    page.render('./screenshots/sp.jpg')
    phantom.exit()
  },200)
})
