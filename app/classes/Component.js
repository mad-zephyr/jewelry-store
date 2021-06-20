import each from 'lodash/each'
const EventEmitter = require('events')

export default class Component extends EventEmitter {
  constructor ({
    element,
    elements
  }) {
    super()
    this.selector = element
    this.selectorChildren = {
      ...elements
    }
    this.create()
    this.addEventListeners()
  }

  create () {
    this.element = document.querySelector(this.selector)
    this.elements = {}

    each(this.selectorChildren, (entry, key) => {
      if (entry instanceof window.HTMLElement || entry instanceof window.NodeList || Array.isArray(entry)) {
        this.elements[key] = entry
      } else {
        this.elements[key] = document.querySelector(entry)

        if (this.elements[key].length === 0) {
          this.elements[key] = null
        } else {
          this.elements[key] = document.querySelector(entry)
        }
      }
    })
  }

  addEventListeners () {

  }

  removeEventListeners () {

  }
}
