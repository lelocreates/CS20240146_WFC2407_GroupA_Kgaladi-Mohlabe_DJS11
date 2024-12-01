// Import React library and necessary components
import React from 'react';
import { Link } from 'react-router-dom';  // Import Link component from React Router for navigation
import logo from "../assets/Peapod3.jpg";  // Import the logo image for the navbar

// Define the Navbar component
const Navbar = () => {
    return (
        // Wrapper div for the entire navbar
        <div className="navbar">
            <div>
                {/* Logo and title section */}
                <nav className='logo'>
                    {/* Link to the homepage when clicking the logo */}
                    <Link to="/">
                        <img src={logo} alt="PeaPod Logo" />  {/* Display the Peapod logo image */}
                    </Link>
                    {/* Link to the homepage when clicking the title */}
                    <Link to="/">
                        <h1>PEAPODS</h1>  {/* Display the "PEAPODS" title */}
                    </Link>
                </nav>
            </div>
            <div className='favsearch'>
                {/* Favorites navigation link */}
                <nav className='favorites'>
                    <Link to="/favorites">Favorites</Link>  {/* Link to the favorites page */}
                </nav>
            </div>
        </div>
    );
};

// Export the Navbar component to be used in other parts of the app
export default Navbar;
