
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <button className="toggle-btn" onClick={toggleSidebar}>
            {isOpen ? 'Close' : 'Menu'}
        </button>
        {isOpen && (
            <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/shows">Shows</Link>
            </li>
            <li>
                <Link to="/favorites">Favorites</Link>
            </li>
            </ul>
        )}
        </div>
    );
};

export default Sidebar;
