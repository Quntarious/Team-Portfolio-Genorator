import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';

const logout = event => {
  event.preventDefault(); // overriding the <a> element's default nature
  Auth.logout();
};

// use attribute "to" of obj Link for setting up links to login and signup routes
const Header = () => {
  return (
    <header className="bg-secondary mb-4 py-2 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <Link to="/">
          <h1>FEC Design</h1>
        </Link>

        <nav className="text-center">
        {Auth.loggedIn() ? (
          <React.Fragment>
            {/* <Link to="/profile">Guest</Link> */}
            <a href="/" onClick={logout}>
              Logout
            </a>
          </React.Fragment>
          ) : (
          <React.Fragment>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </React.Fragment>
          )}
      </nav>
      </div>
    </header>
  );
};


export default Header;
