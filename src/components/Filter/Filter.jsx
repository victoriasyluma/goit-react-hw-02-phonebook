import { Component } from "react";

export class Filter extends Component {
  render() {
    return (
      <div>
        <h3>Find contacts by name</h3>

        <input value={this.props.filter} onChange={this.props.updateFilter} />
      </div>
    );
  }
}
