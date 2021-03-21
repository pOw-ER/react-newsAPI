import './App.css';
import React, { Component } from 'react'
import { Switch, Route, } from 'react-router-dom'
import NewsCardsList from './components/NewsCardsList';
// import Header from './components/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      thema: 'general'
    }
  }

  render() {
    return (
      <div className="App">

        <Switch>
          <Route path="/" exact>
            <NewsCardsList />
          </Route>
        </Switch>

      </div>
    );
  }
}

export default App;
