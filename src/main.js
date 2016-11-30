'use strict'

import { initHighlightingOnLoad as hilight } from 'highlight.js'
import EventNotifier from './event-notify.js'

// enable code hilightening
hilight()

// EventNotifier
new EventNotifier()
  .setURL('./events.json')
  .apply({
    title:      document.getElementById('next-event-title'),
    starts_at:  document.getElementById('next-event-date'),
    public_url: document.getElementById('next-event-link')
  })
