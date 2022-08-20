import React, { Component } from 'react';
import CardList from './Components/CardList';
import './App.css';


class App extends Component {
  constructor(){
    super()
    this.state = {
      robots: []
    }
  }

  componentDidMount(){
	fetch('https://opensheet.elk.sh/1m-xYU0bfavkIHo-p8e3PnuNuk_EIPEqKhNr2qqSAzHQ/1')
	.then(response => {return response.json()})
	.then(robots =>{this.setState({robots: robots})})
	
  }

  render () {
    const {robots} = this.state;
    return !robots.length ?
    <h1 style={{paddingTop: '100px', textAlign: 'center'}}>Loading</h1> :
    (
      <div>
        
        {/* <Quotes />
        <Info /> */}
        <CardList robots={robots} />
      </div>
    )
     
  }
}

export default App;