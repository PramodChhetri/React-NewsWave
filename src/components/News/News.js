import React, { Component } from 'react';
import NewsItem from './NewsItem';

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      isLoading: true,
      currentPage: 1,
    };
  }

  async fetchNews() {
    const apiKey = 'c965754087eb46b1990e3f3c0b6767d9';
    const apiUrl = `https://newsapi.org/v2/everything?apiKey=${apiKey}&q=world&page=${this.state.currentPage}`;

    let data = await fetch(apiUrl);
    let parseData = await data.json();

    this.setState({ articles: parseData.articles || [], isLoading: false });
  }

  async componentDidMount() {
    this.fetchNews();
  }

  handlePageChange = (newPage) => {
    this.setState({ currentPage: newPage, isLoading: true }, () => {
      this.fetchNews();
    });
  };

  render() {
    const { currentPage, articles } = this.state;
    const isFirstPage = currentPage === 1;

    // Assuming 10 articles per page, adjust as needed
    const totalPages = Math.ceil((articles?.length || 0) / 20);

    
    // Check if articles is undefined or empty
    const isLastPage = currentPage === totalPages;

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
              {articles.map((elements) => {
                const imageURL = elements.urlToImage || 'https://via.placeholder.com/800x400';
                return (
                  <NewsItem
                    key={elements.url}
                    title={elements.title}
                    description={elements.description}
                    imageURL={imageURL}
                    newsURL={elements.url}
                  />
                );
              })}
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-center mt-6">
              <button
                onClick={() => this.handlePageChange(currentPage - 1)}
                disabled={isFirstPage}
                className={`${
                  isFirstPage ? 'bg-gray-300' : 'bg-blue-900 text-white'
                } px-4 py-2 mr-2 rounded`}
              >
                Previous
              </button>

              {/* Numbered pagination buttons */}
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index + 1}
                  onClick={() => this.handlePageChange(index + 1)}
                  className={`${
                    currentPage === index + 1 ? 'bg-blue-900 text-white' : 'bg-gray-300 text-gray-700'
                  } px-4 py-2 mx-1 rounded`}
                >
                  {index + 1}
                </button>
              ))}

              <button
                onClick={() => this.handlePageChange(currentPage + 1)}
                disabled={isLastPage}
                className={`${
                  isLastPage ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-900 text-white'
                } px-4 py-2 ml-2 rounded`}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default News;
