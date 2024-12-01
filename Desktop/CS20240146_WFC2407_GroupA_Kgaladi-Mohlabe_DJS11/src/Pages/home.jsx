// Import React and necessary hooks
import React, { useEffect, useState } from 'react';
// Import utility functions and components
import { fetchShows } from '../utils/api';  // Function to fetch shows from API
import ShowCard from '../components/showCard';  // Component to display individual show cards
import Carousel from '../components/recCarousel';  // Carousel component for recommended shows
import Shows from './shows';  // Component to display other parts of the page, possibly a list of shows

const Home = () => {
    // State for storing fetched shows and loading state
    const [shows, setShows] = useState([]);
    const [loading, setLoading] = useState(true);  // Initially set loading to true
    const [recommendedShows, setRecommendedShows] = useState([]);  // State for storing recommended shows

    // useEffect to load shows on component mount
    useEffect(() => {
        const loadShows = async () => {
            const data = await fetchShows();  // Fetch shows using the utility function
            // Sort the fetched shows alphabetically by title
            const sortedData = data.sort((a, b) => a.title.localeCompare(b.title));
            setShows(sortedData);  // Set the sorted shows to state
            setLoading(false);  // Set loading to false once shows are loaded
        };

        loadShows();  // Call the function to load shows
    }, []);  // Empty dependency array to run only on mount

    // useEffect to fetch recommended shows from a different API
    useEffect(() => {
        const fetchRecommended = async () => {
            try {
                const response = await fetch('https://podcast-api.netlify.app');  // Fetch recommended shows from API
                const data = await response.json();  // Parse the response as JSON
                setRecommendedShows(data);  // Set the recommended shows to state
            } catch (error) {
                console.error('Failed to fetch recommended shows:', error);  // Log error if API request fails
            }
        };
    
        fetchRecommended();  // Call the function to fetch recommended shows
    }, []);  // Empty dependency array to run only on mount

    return (
        <div className="home">
            {/* Render the Shows component (could be the main layout or another part of the homepage) */}
            <Shows />
            
            {/* Conditionally render the carousel for recommended shows if data is available */}
            {recommendedShows.length > 0 ? (
                <Carousel shows={recommendedShows} />  // Pass recommended shows to the Carousel component
            ) : (
                <p>Loading recommendations...</p>  // Display loading text if recommended shows are still being fetched
            )}

            {/* Conditionally render shows grid if data is loaded */}
            {loading ? (
                <p>Loading shows...</p>  // Display loading text while the shows are being fetched
            ) : (
                <div className="shows-grid">
                    {/* Map over the shows array and render a ShowCard for each show */}
                    {shows.map((show) => (
                        <ShowCard key={show.id} show={show} />  // Render each show card with a unique key
                    ))}
                </div>
            )}
        </div>
    );
};

export default Home;
