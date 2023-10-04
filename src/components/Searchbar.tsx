import React from "react";

const Searchbar: React.FC = () => {
  return (
    <div className="search-bar  ml-auto me-4 relative p-1 px-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6 text-white absolute top-1/2 left-8 transform -translate-y-1/2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
      <input
        className="w-full bg-transparent border border-slate-600 rounded-full ps-12 text-slate-200"
        type="text"
        placeholder="Search Anything"
      />
    </div>
  );
};

export default Searchbar;
