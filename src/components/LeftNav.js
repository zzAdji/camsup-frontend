import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const LeftNav = () => {
  const location = useLocation();

  return (
    <div className="left-nav-container">
      <div className="icons">
        <div className="icons-bis">
          <NavLink
            to="/"
            className={location.pathname === '/' ? 'active-left-nav' : ''}
          >
            <img src="/img/icons/book.svg" alt="home" />
          </NavLink>
          <br />

          <NavLink
            to="/documentation"
            className={
              location.pathname === '/documentation' ? 'active-left-nav' : ''
            }
          >
            <img src="/img/icons/quizz.svg" alt="trending" />
          </NavLink>
          <br />
          <NavLink
            to="/"
            className={location.pathname === '/search' ? 'active-left-nav' : ''}
          >
            <img src="/img/icons/search-folder.svg" alt="home" />
          </NavLink>
          <br />
          <NavLink
            to="/message"
            className={
              location.pathname === '/message' ? 'active-left-nav' : ''
            }
          >
            <img src="/img/icons/openai.svg" alt="message" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default LeftNav;
