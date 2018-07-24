import React, {Component} from 'react'
import {render} from 'react-dom'

import EditableList from '../../src'

class Demo extends Component {
  render() {
    return <div>
      <h1>Demo</h1>
      <EditableList onChange={this.onChange.bind(this)} title="Demo" itemPlaceholder="+" />
    </div>
  }

  onChange(latestInfo) {
    console.log('Latest information in the component', latestInfo);
  }
}

render(<Demo/>, document.querySelector('#demo'))
