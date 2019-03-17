import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CrimesList from './CrimesList/CrimesList';

class App extends Component {
  constructor() {
    super()

    this.state = {
      crimes: [],
      loading: true
    } 
  }


  componentDidMount () {
    // Initial API calls, if you want data to exist right when page loads up
    
    // sockets will be set up here
    // db connections (firebase)

    // componentDidMount gets called ONCE right after the initial render
    this.getCrimes()
  }
  deleteCrime = (index, e) => {
    //.bind argument will always come first 
    console.log('delete working', index)

    this.setState((previousState) => (
      {crimes: previousState.crimes.filter((c, i) => i !== index)}
    ))

  }

  getCrimes = async () => {
    try {

      //this line is making a get request to retrieve the crimes.
      const crimes = await fetch('https://data.cityofchicago.org/resource/crimes.json')

      if (!crimes.ok) {
        //for http errors, fetch doesnt reject the promise on 404 or 500
        throw Error(crimes.statusText)
      }
      const crimesParsedJson = await crimes.json()

      //set state after we parsed the body of the response which is occuring in crimes.json()
      this.setState ({
        crimes: crimesParsedJson,
        loading: false
      })
      console.log(crimesParsedJson)

    } catch (err) {
      console.log(err, 'error in catch block')
      return err
    }
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
      {this.state.loading ? <span>Loading.....</span> : <CrimesList crimes={this.state.crimes} deleteCrime={this.deleteCrime}/>}
      </div>
    );
  }
}


export default App;