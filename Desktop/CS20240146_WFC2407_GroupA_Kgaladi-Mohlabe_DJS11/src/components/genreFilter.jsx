// Import React library to define the component.
import React from 'react';

// Define the GenreFilter component, which will render a dropdown list to filter genres.
const GenreFilter = ({ genres, selectedGenre, onFilterChange }) => {
    return (
        // Wrapper div to style the genre filter component.
        <div className="genre-filter">
            {/* Label for the genre dropdown */}
            <label htmlFor="genre-select">Filter by Genre: </label>
            
            {/* Dropdown select element for choosing a genre */}
            <select
                id="genre-select"  // Setting an ID for the select element
                value={selectedGenre}  // The currently selected genre, passed as a prop
                onChange={(e) => onFilterChange(e.target.value)}  // Update the selected genre when a change occurs
            >
                {/* Default option when no genre is selected */}
                <option value="">All Genres</option>
                
                {/* Map over the genres array and render each genre as an option */}
                {genres.map((genre) => (
                    <option key={genre} value={genre}>  // Use genre as the key and value for each option
                        {genre}  {/* Display the genre name in the dropdown */}
                    </option>
                ))}
            </select>
        </div>
    );
};

// Export GenreFilter component to make it reusable in other parts of the app.
export default GenreFilter;
