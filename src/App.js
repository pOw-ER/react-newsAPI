import './App.css';
import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

// import MY_API_KEY from './config';
import NewsCardsList from './components/NewsCardsList';
import Header from './components/Header';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact>
            <NewsCardsList />
          </Route>
          <Route path="/science" exact>
            <NewsCardsList />
          </Route>
          <Route path="/sports" exact>
            <NewsCardsList />
          </Route>
          <Route path="/technology" exact>
            <NewsCardsList />
          </Route>
        </Switch>

      </div>
    );
  }
}

export default App;
