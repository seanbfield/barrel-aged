import React from 'react';
import { fetchNews } from '../services/api-helper';

// NB
class News extends React.Component {
  constructor() {
    super()
    this.state = {
      articles: [],
    }
  }

  // Render User
  componentDidMount = async () => {
    const News = await fetchNews();
    this.setState({
      articles: News,
    });
  };


  render() {
    return (
      <div className="News_Data">
        {this.state.articles.map(newsitem => (
          <div> {newsitem.key}
            <h4>Title: {newsitem.title}</h4>
            <p>News: {newsitem.description}</p>
          </div>
        ))}
      </div>
    )
  }
}

export default News;