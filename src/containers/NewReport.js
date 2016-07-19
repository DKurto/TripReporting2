import { React, Component } from 'react'

export default class Reports extends Component {
  static render() {
    return (
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">New Report</h3>
            <input type="text" className="date-input" placeholder="Enter Date"></input>
            <input type="text" className="location-input" placeholder="Enter Location"></input>
            <button className="btn btn-primary" onClick={this.addNewCharge}>Add New Charge</button>
          </div>
          <SecondScreenCharge />
          <div className="panel-footer">
            <button className="btn btn-primary" onClick={this.saveButton}>Save Button</button>
            <button className="btn btn-primary" onClick={this.cancelButton}>Cancel Button</button>
          </div>
        </div>
    );
  }
}
