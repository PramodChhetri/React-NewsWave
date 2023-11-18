import React, { Component } from 'react';
import NewsItem from './NewsItem';

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    // Replace 'YOUR_API_KEY' with your actual News API key
    const apiKey = 'c965754087eb46b1990e3f3c0b6767d9';
    const apiUrl = `https://newsapi.org/v2/top-headlines?apiKey=${apiKey}&q=sport`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          articles: data.articles,
          isLoading: false,
        });
      })
      .catch((error) => console.error('Error fetching data:', error));
  }
  render() {
    return (
      <>
        <div className="bg-gray-200">
          <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            <div className="mb-7">
              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Latest News
              </h2>
              <p className="mt-1 text-gray-600">
                Stay updated with the latest happenings around the world.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">  
            {this.state.articles.map((elements)=>{ 
              const imageURL = elements.urlToImage || "https://via.placeholder.com/800x400";
              return <NewsItem key={elements.url} title={elements.title} description={elements.description} imageURL= {imageURL} newsURL={elements.url} />
            })}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default News;
