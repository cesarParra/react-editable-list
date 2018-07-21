import React, {Component} from 'react'
import {render} from 'react-dom'

import EditableList from '../../src'

class Demo extends Component {
  render() {
    return <div>
      <h1>Demo</h1>
      <EditableList title="Demo" itemPlaceholder="+" />
    </div>
  }
}

render(<Demo/>, document.querySelector('#demo'))
