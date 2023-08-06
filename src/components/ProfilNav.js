import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const ProfilNav = () => {
  const location = useLocation();

  return (
    <div className="profil-nav-container">
      <div className="elements">
        <div className="elements-bis">
          <NavLink
            to="/profil"
            className={
              location.pathname === '/profil' ? 'active-profil-nav' : ''
            }
          >
            <div className="posts">Posts</div>
          </NavLink>
          <NavLink
            to="/profil/docs"
            className={
              location.pathname === '/profil/docs' ? 'active-profil-nav' : ''
            }
          >
            <div className="document">Document</div>
          </NavLink>
          <NavLink
            to="/profil/favorite"
            className={
              location.pathname === '/profil/favorite'
                ? 'active-profil-nav'
                : ''
            }
          >
            <div className="favorite">Favorite</div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ProfilNav;
