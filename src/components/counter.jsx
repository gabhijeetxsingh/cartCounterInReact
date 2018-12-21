import React, { Component } from "react";

class Counter extends Component {
  render() {
    console.log("props", this.props);
    return (
      <div>
        <table>
          <tbody>
            <tr>
              <td>
                <span className={this.getBadgeClasses()}>
                  {this.formatCounter()}
                </span>
              </td>
              <td>
                <button
                  onClick={() => this.props.onIncrement(this.props.counter)}
                  className="btn btn-secondary btn-sm"
                >
                  Increment
                </button>
              </td>
              <td>
                <button
                  onClick={() => this.props.onDelete(this.props.counter.id)}
                  className="btn btn-danger btn-sm m-2"
                >
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-4 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCounter() {
    const { value } = this.props.counter;
    return value === 0 ? "zero" : value;
  }
}

export default Counter;
