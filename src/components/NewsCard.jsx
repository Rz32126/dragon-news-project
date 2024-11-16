import React from "react";
import { FaStar } from "react-icons/fa"; // React Icons for stars

const NewsCard = (props = {}) => {
    const { news } = props || {}
  return (
    <div className="card w-96 bg-white shadow-xl rounded-lg overflow-hidden">
      {/* Card Header with Image */}
      <div className="relative">
        <img
          src={news.image_url}
          alt="Article Thumbnail"
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <div className="absolute top-3 left-3 bg-gray-800 text-white text-xs px-2 py-1 rounded-md">
          Trending
        </div>
      </div>

      {/* Card Body */}
      <div className="card-body p-6">
        {/* Category */}
        <span className="text-sm text-gray-500">{news.author.published_date}</span>

        {/* Title */}
        <h3 className="text-xl font-semibold mt-2 text-gray-800">
          {news.title}
        </h3>

        {/* Author & Date */}
        <p className="text-sm text-gray-600 mt-2">
          by Awlad Hossain | <span>August 21, 2022</span>
        </p>

        {/* Article Summary */}
        <p className="mt-3 text-gray-700">
        {news.details}
        </p>

        {/* Rating & Views */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center">
            {/* Stars */}
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, index) => (
                <FaStar key={index} className="text-lg" />
              ))}
            </div>
            <span className="ml-2 text-sm text-gray-600">4.9</span>
          </div>
          <span className="text-sm text-gray-500">499 Views</span>
        </div>

        {/* Read Full Article Button */}
        <a
          href="#"
          className="btn btn-primary mt-4 w-full"
        >
          Read Full Article
        </a>
      </div>
    </div>
  );
};

export default NewsCard;
