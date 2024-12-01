import React from 'react';
import { useFavorites } from '../context/favoritesContext';

const Favorites = ({ onPlay }) => {
    const { favorites, removeFavorite, resetFavorites } = useFavorites();

    const groupedByGenres = useMemo(() => {
        return favorites.reduce((acc, favorite) => {
            favorite.genres.forEach((genre) => {
            if (!acc[genre]) acc[genre] = [];
            acc[genre].push(favorite);
            });
            return acc;
        }, {});
        }, [favorites]);

        return (
            <div className="favorites">
                <h1>Your Favorites</h1>
            
                <div className="controls">
                    <button onClick={resetFavorites}>Reset All Favorites</button>
                    <select onChange={(e) => sortFavorites(e.target.value)}>
                        <option value="default">Sort By</option>
                        <option value="title-asc">Title (A-Z)</option>
                        <option value="title-desc">Title (Z-A)</option>
                        <option value="recent">Most Recent</option>
                        <option value="oldest">Oldest</option>
                    </select>
                </div>
            
                {favorites.length === 0 ? (
                    <p>No favorites yet.</p>
                ) : (
                    Object.keys(groupedByGenres).map((genre) => (
                    <div key={genre} className="genre-group">
                        <h2>{genre}</h2>
                        <ul className="favorites-list">
                            {groupedByGenres[genre].map((favorite) => (
                                <li key={favorite.id} className="favorite-item">
                                    <h3>{favorite.title}</h3>
                                    <p>{favorite.title} - Season {favorite.seasons}</p>
                                    <button onClick={() => onPlay(favorite)}>Play</button>
                                    <button onClick={() => removeFavorite(favorite.id)}>Remove</button>
                                </li>
                        ))}
                        </ul>
                    </div>
                    ))
                )}
            </div>
        );
        };
        
export default Favorites;
