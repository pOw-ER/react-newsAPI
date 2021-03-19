import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import MY_API_KEY from '../config';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      thema: 'everything'
    }
  }
  componentDidUpdate() {
    let url = `https://newsapi.org/v2/top-headlines?category=${this.state.thema}&` +
      `apiKey=${MY_API_KEY}`;

    let req = new Request(url);

    fetch(req)
      .then(response => response.json())
      .then(data => {

        this.setState({ newsData: data.articles })
      })
  }
  render() {
    return (
      <header>
        <div>News</div>
        <nav>
          <ul>
            <li><Link to="/">Home Popular News</Link></li>
            <li><Link to="/science" onClick={() => this.setState({ thema: 'science' })}>Science</Link></li>
            <li><Link to="/sports" onClick={() => this.setState({ thema: 'sports' })}>Sports</Link></li>
            <li><Link to="/technology" onClick={() => this.setState({ thema: 'technology' })}>Technology</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
