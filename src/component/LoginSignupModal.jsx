import React, { useState } from "react";
import "./LoginSignupModal.css"; // Import the CSS file

const LoginSignupModal = ({ isOpen, onClose }) => {
  const [isSignUp, setIsSignUp] = useState(false); // State to toggle between login and sign up forms

  if (!isOpen) return null; // Don't render if modal is closed

  const toggleForm = () => {
    setIsSignUp(!isSignUp); // Toggle between login and sign up forms
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <h2 className="btn">{isSignUp ? "Sign Up" : "Login"}</h2>
        <form>
          <input
            type="text"
            className="modal-input"
            placeholder="Email"
            required
          />
          <input
            type="password"
            className="modal-input"
            placeholder="Password"
            required
          />
          {isSignUp && (
            <input
              type="password"
              className="modal-input"
              placeholder="Confirm Password"
              required
            />
          )}
        </form>
        <div className="modal-buttons">
          <button className="modal-button cancel" onClick={onClose}>
            Cancel
          </button>
          <button className="modal-button submit">
            {isSignUp ? "Sign Up" : "Login"}
          </button>
        </div>
        <div className="toggle-form">
          <p>
            {isSignUp
              ? "Already have an account? "
              : "Don't have an account? "}
            <span className="toggle-link" onClick={toggleForm}>
              {isSignUp ? "Login" : "Sign Up"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignupModal;
