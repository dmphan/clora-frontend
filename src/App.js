import React, { Component } from 'react';
import './App.css';
import Card from './components/Card';
import SearchForm from './components/SearchForm';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      candidates: [],
    };

    this.setCandidates = this.setCandidates.bind(this);
  }
  
  setCandidates(result) {
    console.log(result);
    this.setState({ candidates: result });
  }
  
  render() {
    return (
      <div className="App">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <SearchForm setCandidates={this.setCandidates} />
          </div>
          <div className="col-sm-12 col-md-6">
            { this.state.candidates.map(item => {
              return (
                <Card key={item.uid} consultant={item} />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
