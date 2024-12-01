// Import React and necessary hooks for creating context and managing state
import React, { createContext, useContext, useState, useEffect } from 'react';

// Create a Context for managing favorites
const FavoritesContext = createContext();

// FavoritesProvider component that wraps the app and provides the favorites context
export const FavoritesProvider = ({ children }) => {
  // Initialize the state for favorites as an empty array
  const [favorites, setFavorites] = useState([]);

  // Load the favorites from localStorage when the component mounts
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];  // Get favorites from localStorage or default to empty array
    setFavorites(storedFavorites);  // Set the state to the stored favorites
  }, []);

  // Save the favorites to localStorage whenever the favorites state changes
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));  // Store the updated favorites in localStorage
  }, [favorites]);

  // Function to add a favorite if it's not already in the list
  const addFavorite = (episode) => {
    if (!favorites.find((fav) => fav.id === episode.id)) {  // Check if the episode is already in favorites
      setFavorites([...favorites, episode]);  // Add the episode to the favorites state
    }
  };

  // Function to remove a favorite by its ID
  const removeFavorite = (id) => {
    setFavorites(favorites.filter((fav) => fav.id !== id));  // Filter out the episode with the given ID from favorites
  };

  // Function to reset (clear) all favorites
  const resetFavorites = () => {
    setFavorites([]);  // Reset the favorites state to an empty array
  };

  // Function to sort the favorites based on a given option
  const sortFavorites = (option) => {
    setSortOption(option);  // Store the selected sort option (though this variable is not used in the code provided)
    let sortedFavorites = [...favorites];  // Make a copy of the current favorites state
    switch (option) {
      case 'title-asc':
        sortedFavorites.sort((a, b) => a.title.localeCompare(b.title));  // Sort alphabetically by title (ascending)
        break;
      case 'title-desc':
        sortedFavorites.sort((a, b) => b.title.localeCompare(a.title));  // Sort alphabetically by title (descending)
        break;
      case 'recent':
        sortedFavorites.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));  // Sort by most recently added
        break;
      case 'oldest':
        sortedFavorites.sort((a, b) => new Date(a.dateAdded) - new Date(b.dateAdded));  // Sort by the oldest added
        break;
      default:
        break;  // If no sorting option is provided, do nothing
    }
    setFavorites(sortedFavorites);  // Update the favorites state with the sorted list
  };

  // Provide the favorites state and related functions to the rest of the app through context
  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, resetFavorites }}>
      {children}  {/* Render child components inside the FavoritesProvider */}
    </FavoritesContext.Provider>
  );
};

// Custom hook to use the favorites context in any component
export const useFavorites = () => useContext(FavoritesContext);
