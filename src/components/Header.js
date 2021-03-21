import { Link } from 'react-router-dom'
import React, { Component } from 'react'


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      thema: 'general',
    }
  }

  render() {
    return (
      <header>
        <div>News</div>
        <nav>
          <ul>
            <li><Link to="/">Home Popular News</Link></li>
            <li><Link to="/" onClick={() => this.setState({ thema: 'science' })}>Science</Link></li>
            <li><Link to="/" onClick={() => this.setState({ thema: 'sports' })}>Sports</Link></li>
            <li><Link to="/" onClick={() => this.setState({ thema: 'technology' })}>Technology</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
