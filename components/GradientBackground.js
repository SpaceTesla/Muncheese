// components/GradientBackground.js

import React from 'react';

const GradientBackground = ({ image }) => {
  return (
    <div className="gradient-background">
      <div className="text-content">
        <h2>Your Text Here</h2>
      </div>
      <style jsx>{`
        .gradient-background {
          position: relative;
          height: 400px; /* Set height as needed */
          background-image: url({image}); /* Replace with your image path */
          background-size: cover;
          background-position: center;
        }

        .text-content {
          position: absolute;
          bottom: 20px; /* Adjust spacing from the bottom */
          left: 20px; /* Adjust spacing from the left */
          color: white; /* Text color */
          z-index: 1; /* Ensures text is above the gradient */
        }

        .gradient-background::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 50%; /* Adjust height of the gradient */
          background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
          z-index: 0; /* Places gradient behind the text */
        }
      `}</style>
    </div>
  );
};

export default GradientBackground;
