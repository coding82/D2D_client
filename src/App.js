import React from 'react';
import Routes from './components/router'
import Navbar from './components/navbar'


export default class App extends React.Component {
  render(){
    return(
      <div className="App">
      <Navbar/>
      <Routes/>
      </div>
    )
  }
}
