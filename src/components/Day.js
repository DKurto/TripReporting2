import { React, Component } from 'react'

import Charge from './Charge'
import TotalDay from './TotalDay'

export default class TotalWeek extends Component {
  render(){
    return (
      <div className="panel panel-default">
        <div className="panel-body">
          <p className="date"></p>
          <p className="location"></p>
          <Charge />
        </div>
        <TotalDay />
      </div>
    )
  }
};
