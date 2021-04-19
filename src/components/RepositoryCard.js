import React from "react";

const RepositoryCard = ({ repository }) => {
  return (
    <div className="w-10/12 mx-auto mt-2  lg:mb-0 mb-12 px-2 rounded-lg    border border-orange-700">
      <div className="content bg-white p-2 pt-8 pb-12 lg:max-w-lg w-full lg:absolute top-28 right-2">
        <div className="flex items-center">
          <h2 className="text-3xl font-semibold mt-1 md:mt-5">
            {repository.name}
          </h2>
        </div>
        <p className="my-3 text-justify font-medium text-gray-700 leading-relaxed">
          {repository.description}
        </p>
        <div className="flex items-start">
          <div className="inline-block">
            <i className="fas fa-code fa-1x  mt-3 py-3 mr-3 text-orange-700"></i>
            <span className="inline-block mt-2 py-3 mr-3">
              {repository.language}
            </span>
          </div>
          <div className="inline-block">
            <i className="fas fa-star fa-1x text-orange-700"></i>
            <span className="inline-block mt-2 py-3 mr-3">
              {repository.stargazers_count}
            </span>
          </div>
          <div className="inline-block">
            <i className="fas fa-code-branch fa-1x  text-orange-700"></i>
            <span className="inline-block mt-2 py-3 mr-3">
              {repository.forks_count}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepositoryCard;
