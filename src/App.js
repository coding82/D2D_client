import React from 'react';
import Routes from './components/router'
import Navbar from './components/navbar'

class App extends React.Component {
  render(){
    return(
      <div>
      <Navbar/>
      <Routes/>
      </div>
    )
  }
}

export default App
