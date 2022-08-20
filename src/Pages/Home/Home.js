import React, { Component } from 'react';
import CardList from '../../Components/CardList/CardList';
import './Home.css';


class Home extends Component {
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
        <CardList robots={robots} />
      </div>
    )
     
  }
}

export default Home;