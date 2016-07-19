import { React, Component } from 'react'
import browserHistory from 'react-router'

import Day from './Day'
import TotalWeek from './TotalWeek'


export default class Week extends Component {
  addReport = () => {
    browserHistory.push('/new_report')
  };

  render(){
    return (
      <div className="panel panel-default">
        <div className="panel-body">
          <p>Week starting: xxx</p>
          <button className="btn btn-primary" onClick={this.addReport}>Add new day</button>
          <Day />
        </div>
        <TotalWeek />
      </div>
    )
  }
};