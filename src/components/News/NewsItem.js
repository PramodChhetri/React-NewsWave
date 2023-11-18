import React, { Component } from 'react';

export class NewsItem extends Component {
  render() {
    const { title, description, imageURL, newsURL } = this.props;

    return (
      <div className='group flex flex-col h-full bg-white overflow-hidden'>
        <img
          className="w-full h-48 object-cover"
          src={imageURL}
          alt="News"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/800x400";
          }}
        />
        <div className="p-6 flex flex-col flex-grow">
          <div className="flex items-center justify-between mb-4">
            <span className="inline-block bg-blue-900 text-white px-2 py-1 text-xs uppercase font-semibold tracking-wide">
              Breaking News
            </span>
            <span className="text-gray-600 text-sm">Nov 18, 2023</span>
          </div>
          <div className="font-bold text-xl mb-2 line-clamp-2">
            {title}
          </div>
          <p className="text-gray-700 text-base overflow-hidden overflow-ellipsis">
            {description} <br />
            <a
              href={newsURL}
              className="text-blue-500 hover:underline hover:text-lime-500"
            >
              Read More
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default NewsItem;
