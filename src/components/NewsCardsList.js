import NewsCard from "./NewsCard"
import React, { Component } from 'react'
import MY_API_KEY from '../config';

class NewsCardsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsData: []
    }
  }
  componentDidMount() {
    let url = 'https://newsapi.org/v2/everything?' +
      'q=Apple&' +
      'from=2021-03-19&' +
      'sortBy=popularity&' +
      `apiKey=${MY_API_KEY}`;

    let req = new Request(url);

    fetch(req)
      .then(response => response.json())
      .then(data => {
        console.log(data.articles)
        this.setState({ newsData: data.articles })
      })
  }
  render() {
    return (
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

    );
  }
}

export default NewsCardsList;
