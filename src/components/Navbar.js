import React, { useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { UidContext } from './AppContext';
import Logout from './Log/Logout';

const Navbar = () => {
  const uid = useContext(UidContext);
  const userData = useSelector((state) => state.userReducer);

  const location = useLocation();

  return (
    <nav>
      <div className="nav-container">
        <div className="logo">
          <NavLink exact to="/">
            <div className="logo">
              <img src="/img/icone.png" alt="icon" />
              <h3>CamSup</h3>
            </div>
          </NavLink>
        </div>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li>
            <NavLink
              to="/"
              className={location.pathname === '/' ? 'active-left-nav' : ''}
            >
              <img src="/img/icons/home.svg" alt="home" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/documentation"
              className={
                location.pathname === '/documentation' ? 'active-left-nav' : ''
              }
            >
              <img src="/img/icons/book.svg" alt="trending" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/message"
              className={
                location.pathname === '/message' ? 'active-left-nav' : ''
              }
            >
              <img src="/img/icons/message.svg" alt="message" />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/profil"
              className={
                location.pathname === '/profil' ? 'active-left-nav' : ''
              }
            >
              <img src="/img/icons/user.svg" alt="profil" />
            </NavLink>
          </li>
        </ul>

        {uid ? (
          <ul>
            <li className="welcome">
              <NavLink exact to="/profil">
                <h5>Bienvenue {userData.pseudo}</h5>
              </NavLink>
            </li>
            <Logout />
          </ul>
        ) : (
          <ul>
            <li></li>
            <li>
              <NavLink exact to="/profil">
                <img src="/img/icons/login.svg" alt="login" />
              </NavLink>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
