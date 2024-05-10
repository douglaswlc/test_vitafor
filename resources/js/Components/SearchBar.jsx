import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <form onSubmit={handleSubmit} className="flex">
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search characters by ID or name"
        className="px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600">
      <i class="bi bi-search"></i>
      </button>
    </form>
  );
};

export default SearchBar;
