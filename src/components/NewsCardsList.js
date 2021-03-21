import NewsCard from "./NewsCard"
import React, { Component } from 'react'
import MY_API_KEY from '../config';
import { Link } from 'react-router-dom'

class NewsCardsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsData: [],
      thema: 'general'
    }
  }

  componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?category=${this.state.thema}&` +
      `apiKey=${MY_API_KEY}`;

    let req = new Request(url);

    fetch(req)
      .then(response => response.json())
      .then(data => {
        this.setState({ newsData: data.articles })
      })
  }
  componentDidUpdate() {
    let url1 = `https://newsapi.org/v2/top-headlines?category=${this.state.thema}&` +
      `apiKey=${MY_API_KEY}`;

    let req1 = new Request(url1);

    fetch(req1)
      .then(response => response.json())
      .then(data => {
        this.setState({ newsData: data.articles })
      })
  }
  render() {
    return (
      <section>
        <header>
          <div>News</div>
          <nav>
            <ul>
              <li><Link to="/" onClick={() => this.setState({ thema: 'regular' })}>Home Popular News</Link></li>
              <li><Link to="/" onClick={() => this.setState({ thema: 'science' })}>Science</Link></li>
              <li><Link to="/" onClick={() => this.setState({ thema: 'sports' })}>Sports</Link></li>
              <li><Link to="/" onClick={() => this.setState({ thema: 'technology' })}>Technology</Link></li>
            </ul>
          </nav>
        </header>
        <div className="container">
          {this.state.newsData.map((article, i) =>
            <NewsCard
              key={i}
              img={article.urlToImage}
              title={article.title}
              url={article.url}
              date={article.publishedAt}
            />
          )}
        </div>
      </section>
    );
  }
}

export default NewsCardsList;
