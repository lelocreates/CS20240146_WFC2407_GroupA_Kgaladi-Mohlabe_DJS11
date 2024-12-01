// Import React and necessary icons from FontAwesome
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as fullHeart } from "@fortawesome/free-solid-svg-icons";  // Filled heart icon for "liked"
import { faHeart as emptyHeart } from "@fortawesome/free-regular-svg-icons";  // Empty heart icon for "not liked"

// Import the useFavorites hook from the context to manage the favorites state
import { useFavorites } from "../context/favoritesContext";

const LikeButton = ({ podcast }) => {
    // Destructure the favorites array and functions to add or remove from favorites from the context
    const { favorites, addFavorite, removeFavorite } = useFavorites();
    
    // Check if the current podcast is in the favorites list (liked or not)
    const isLiked = favorites.some((fav) => fav.id === podcast.id);

    // Function to toggle the like state (add or remove the podcast from favorites)
    const toggleLike = () => {
        if (isLiked) {
            removeFavorite(podcast.id);  // If already liked, remove it from favorites
        } else {
            addFavorite(podcast);  // If not liked, add it to favorites
        }
    };

    return (
        // Button to toggle like status when clicked
        <button 
            onClick={toggleLike}  // When clicked, toggle the like status
            style={{
                background: "none",  // No background color
                border: "none",  // No border
                cursor: "pointer",  // Pointer cursor on hover
                fontSize: "24px",  // Set font size
                color: "red"  // Set the heart color to red
            }}
            aria-label="Like button"  // Accessibility label for the button
        >
            {/* Render the appropriate heart icon based on whether the podcast is liked */}
            <FontAwesomeIcon icon={isLiked ? fullHeart : emptyHeart} />
        </button>
    );
};

// Export the LikeButton component to be used in other parts of the app
export default LikeButton;
