import React from 'react';
import { Link } from 'react-router-dom'

import { fetchNews } from '../services/api-helper';

import Header from '../components/Header';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

export default class News extends React.Component {
  constructor() {
    super()
    this.state = {
      articles: [],
    };
  };

  // Render User
  componentDidMount = async () => {
    const News = await fetchNews();
    this.setState({
      News: News,
    });
  };

  render() {
    return (
      <div className="page">
        <Header />
        <div className="news-hero gradient-background">
          <h1>This is the news page.</h1>
        </div>
        <div className="body">
          {this.state.articles.map(newsitem => (
            <div> {newsitem.key}
              <h4>{newsitem.title}</h4>
              <p>{newsitem.content}</p>
            </div>
          ))}
        </div>
        <CallToAction />
        <Footer />
      </div>
    )
  }
}