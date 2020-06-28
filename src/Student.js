import React, { Component } from 'react'

export default class Student extends Component {
    render() {
        return (
            <React.Fragment>
                <h1>Welcome Student</h1>
                <button onClick={this.props.clickData}>Logout</button>
            </React.Fragment>
        )
    }
}
