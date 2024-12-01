// src/components/SearchBar.js
import React, { useState } from 'react';  // Import React and useState hook

// Define the SearchBar component, which accepts a placeholder and an onSearch callback as props
const SearchBar = ({ placeholder, onSearch }) => {
    // useState hook to manage the search query state
    const [query, setQuery] = useState('');

    // Function to handle the search action, calling the onSearch prop with the current query
    const handleSearch = () => {
        onSearch(query);  // Pass the query to the parent component through the onSearch callback
    };

    return (
        // Wrapper div for the search bar
        <div className="search-bar">
            {/* Input field for the user to type their search query */}
            <input
                type="text"  // The input type is text
                value={query}  // The value of the input is controlled by the query state
                onChange={(e) => setQuery(e.target.value)}  // Update the query state when the user types
                placeholder={placeholder || 'Search...'}  // Default placeholder is 'Search...', but can be overridden by the placeholder prop
            />
            {/* Search button to trigger the search */}
            <button onClick={handleSearch}>Search</button>  {/* When clicked, call the handleSearch function */}
        </div>
    );
};

// Export the SearchBar component to be used in other parts of the app
export default SearchBar;
