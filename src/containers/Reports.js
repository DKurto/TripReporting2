import { React, Component } from 'react'

import Week from '../components/Week'

export default class Reports extends Component {
  static render() {
    return (
      <div className="panel panel-primary">
        <div className="panel-heading">
          <h3 className="panel-title">Name: Dmitriy Kurto</h3>
          <h4 className="panel-title">Dept: xxx</h4>
        </div>

        <div className="panel-body">
          <Week />
        </div>
      </div>
    );
  }
}
