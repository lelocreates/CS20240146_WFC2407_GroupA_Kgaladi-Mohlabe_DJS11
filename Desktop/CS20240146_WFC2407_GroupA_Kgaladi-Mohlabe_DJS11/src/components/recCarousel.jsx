// Import React and the necessary styles for the Slick Carousel component
import React from 'react';
import 'slick-carousel/slick/slick.css';  // Import default Slick Carousel styles
import 'slick-carousel/slick/slick-theme.css';  // Import theme styles for Slick Carousel

// Import the Slider component from react-slick library
import Slider from 'react-slick';

const Carousel = ({ shows }) => {
    // Define the settings for the carousel
    const settings = {
        dots: true,  // Display dots for pagination
        infinite: true,  // Enable infinite scrolling (looping)
        speed: 500,  // Transition speed (in milliseconds)
        slidesToShow: 3,  // Number of slides to show at once
        slidesToScroll: 1,  // Number of slides to scroll per swipe
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2 } },  // For screens smaller than 1024px, show 2 slides
            { breakpoint: 600, settings: { slidesToShow: 1 } },  // For screens smaller than 600px, show 1 slide
        ],
    };

    return (
        // Wrapper div for the carousel component
        <div className="carousel">
            <h2>Recommended Shows</h2>  {/* Title of the carousel */}
            
            {/* Slider component from react-slick to display the carousel */}
            <Slider {...settings}>
                {/* Loop through the shows array and display each show in the carousel */}
                {shows.map((show) => (
                    <div key={show.id} className="carousel-item">  {/* Unique key for each show */}
                        <img src={show.image} alt={show.title} />  {/* Show image */}
                        <h3>{show.title}</h3>  {/* Show title */}
                        <p>{show.genres.join(', ')}</p>  {/* Display genres of the show, separated by commas */}
                    </div>
                ))}
            </Slider>
        </div>
    );
};

// Export Carousel component to be used in other parts of the app
export default Carousel;
