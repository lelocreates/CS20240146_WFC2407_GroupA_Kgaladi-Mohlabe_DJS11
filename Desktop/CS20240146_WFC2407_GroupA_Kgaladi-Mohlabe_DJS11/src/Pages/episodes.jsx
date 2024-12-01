import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import LikeButton from '../components/liked';

const EpisodeView = ({ onPlay }) => {
    const { showId } = useParams(); // Removed seasonId
    const [show, setShow] = useState(null); // Store the whole show object
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); // Handle potential errors


    useEffect(() => {
        const fetchShowData = async () => {
            try {
                const response = await fetch('https://podcast-api.netlify.app');
                if (!response.ok) throw new Error('Failed to fetch show data');
                const allShows = await response.json();

                // Find the show matching the ID
                const foundShow = allShows.find((s) => s.id === showId);
                if (!foundShow) {
                    throw new Error(`Show with ID ${showId} not found`);
                }
                setShow(foundShow);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchShowData();
    }, [showId]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;
    if (!show) return <p>Show not found</p>;


    return (
        <div className="episode-view">
            {show.episodes ? (
                <ul className="episode-list">
                    {show.episodes.map((episode) => (
                        <li key={episode.id} className="episode-item">
                            <h3>{episode.title}</h3>
                            <button onClick={() => onPlay(episode)}>Play</button>
                            <LikeButton />
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No episodes found for this show.</p>
            )}
        </div>
    );
};

export default EpisodeView;