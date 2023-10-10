import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
const Header = (prop) => {
  const { isLoggedIn, onLogin } = prop;
  const navigate = useNavigate();
  console.log(isLoggedIn);

  const handleLogout = () => {
    onLogin(false);
    navigate('/', {replace: true});
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
        {isLoggedIn && (
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
