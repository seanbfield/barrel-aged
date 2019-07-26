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
      articles: News,
    });
  };

  render() {
    return (
      <div className="page">
        <Header />
        <div className="news-hero gradient-background">
          <h1>Current Whiskey News</h1>
        </div>
        <div className="body">
          <h3>News coming soon.</h3>
          {/* {this.state.articles.map(newsitem => (
            <div> {newsitem.key}
              <h4>Title: {newsitem.title}</h4>
              <p>News: {newsitem.description}</p>
            </div>
          ))} */}
        </div>
        <CallToAction />
        <Footer />
      </div>
    )
  }
}