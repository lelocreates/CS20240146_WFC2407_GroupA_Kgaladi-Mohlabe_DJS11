// Import React and necessary hooks for managing state and side effects
import React, { useEffect, useState } from 'react';
// Import GenreFilter and SearchBar components
import GenreFilter from '../components/genreFilter';
import SearchBar from '../components/searchBar';

const Shows = () => {
    // State variables to manage shows data, filtered shows, genres, and selected genre
    const [shows, setShows] = useState([]);  // Stores all the fetched shows
    const [filteredShows, setFilteredShows] = useState([]);  // Stores the filtered list of shows based on search or genre
    const [genres, setGenres] = useState([]);  // Stores the list of available genres
    const [selectedGenre, setSelectedGenre] = useState('');  // Stores the currently selected genre for filtering

    // useEffect to fetch shows from an external API and process the data on component mount
    useEffect(() => {
        const fetchShows = async () => {
            try {
                // Fetch the shows data from an external API
                const response = await fetch('https://podcast-api.netlify.app');
                const data = await response.json();  // Parse the response into JSON
                setShows(data);  // Set the shows state to the fetched data

                // Extract unique genres from the shows data
                const allGenres = [...new Set(data.flatMap((show) => show.genres))];
                setGenres(allGenres);  // Set the genres state with unique genres
                setFilteredShows(data);  // Initially set filtered shows to all fetched shows
            } catch (error) {
                console.error('Failed to fetch shows:', error);  // Log any errors that occur during the fetch
            }
        };

        fetchShows();  // Call the fetchShows function to load data on mount
    }, []);  // Empty dependency array ensures this effect runs only once, on mount

    // Function to handle genre filtering, called when a genre is selected
    const handleFilterChange = (genre) => {
        setSelectedGenre(genre);  // Update the selected genre
        if (genre) {
            // Filter shows by the selected genre
            setFilteredShows(shows.filter((show) => show.genres.includes(genre)));
        } else {
            // If no genre is selected, reset to show all the shows
            setFilteredShows(shows);
        }
    };

    // Function to handle search, called when a search query is submitted
    const handleSearch = (query) => {
        const lowercasedQuery = query.toLowerCase();  // Convert the search query to lowercase for case-insensitive matching
        // Filter shows based on whether their name or genres match the search query
        setFilteredShows(
            shows.filter(
                (show) =>
                    show.name.toLowerCase().includes(lowercasedQuery) ||  // Match show name
                    show.genres.some((genre) => genre.toLowerCase().includes(lowercasedQuery))  // Match genre name
            )
        );
    };

    return (
        <div className="shows">
            {/* Title of the page */}
            <h1>All Shows</h1>
            
            {/* Search bar component for searching shows or genres */}
            <SearchBar placeholder="Search shows or genres..." onSearch={handleSearch} />
            
            {/* Genre filter component for filtering shows by genre */}
            <GenreFilter
                genres={genres}  // Pass available genres to the filter
                selectedGenre={selectedGenre}  // Pass the currently selected genre
                onFilterChange={handleFilterChange}  // Handle the genre filter change
            />
        </div>
    );
};

export default Shows;
