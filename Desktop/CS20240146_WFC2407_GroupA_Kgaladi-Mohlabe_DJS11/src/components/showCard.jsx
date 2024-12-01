// Import React and necessary components
import React from 'react';
import { Link } from 'react-router-dom';  // Import Link component from React Router for navigation
import LikeButton from './liked';  // Import the LikeButton component to allow users to like the show

// Define the ShowCard component, which displays a show’s details and links to its episodes
const ShowCard = ({ show }) => {
    return (
        // Link to the episodes page of the specific show using its ID
        <Link to={`/episodes/${show.id}`}>
            {/* Wrapper div for the show card */}
            <div className="show-card">
                {/* Display the show’s image */}
                <img src={show.image} alt={show.title} className="show-card__image" />
                
                {/* Div containing the show details like title, seasons, and other info */}
                <div className="show-card__details">
                    {/* Display the title of the show */}
                    <h3>{show.title}</h3>
                    {/* Display the number of seasons of the show */}
                    <p>Seasons: {show.seasons}</p>
                    {/* Format and display the last updated date */}
                    <p>Last Updated: {new Date(show.updated).toLocaleDateString()}</p>
                    {/* Display the genres of the show, joined by commas */}
                    <p>Genres: {show.genres.join(', ')}</p>
                    {/* Include the LikeButton component to let users like the show */}
                    <LikeButton />
                </div>
            </div>
        </Link>
    );
};

// Export the ShowCard component to be used in other parts of the app
export default ShowCard;
