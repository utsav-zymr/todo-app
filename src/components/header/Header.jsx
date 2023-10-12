import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  const loginStatus = localStorage.getItem('loginStatus');

  const handleLogout = () => {
    navigate('/', {replace: true});
    localStorage.setItem('loginStatus',false);
  };
  return (
    <div className="header">
      {/* App title */}
      <div className="header__title">
        <h4>Todo App</h4>
      </div>
      {/* Profile and logout button after authenticated that is conditional rendering */}
      <div className="header__action">
        {/* Logout & Profile button display based on user logged in that is if userLoggedIn = true then show logout and profile button */}
        {loginStatus === 'true' && (
          <>
            <button>Profile</button>
            <button onClick={handleLogout}>Logout</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
