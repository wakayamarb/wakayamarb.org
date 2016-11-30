'use strict'

import { initHighlightingOnLoad as hilight } from 'highlight.js'
import Doorkeeper from './doorkeeper.js'

// enable code hilightening
hilight()

// doorkeeper API wrapper (https://www.doorkeeperhq.com/developer/api)
new Doorkeeper()
  .setURL('./events.json')
  .apply({
    title:      document.getElementById('next-event-title'),
    starts_at:  document.getElementById('next-event-date'),
    public_url: document.getElementById('next-event-link')
  })
