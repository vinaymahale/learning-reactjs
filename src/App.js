import React, { Component } from 'react'
import Guest from './Guest'
import Student from './Student'

export default class App extends Component {
  state = {
    isLoggedIn : false
  }

  clickLogin = () => {
    this.setState({isLoggedIn:true});
  }

  clickLogout = () => {
    this.setState({isLoggedIn:false});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    if(isLoggedIn){
      return <Student clickData={this.clickLogout}/>
    }
    return <Guest clickData={this.clickLogin}/>
  }
}
