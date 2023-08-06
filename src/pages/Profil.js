import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Log from '../components/Log';
import { UidContext } from '../components/AppContext';
import UpdateProfil from '../components/Profil/UpdateProfil';
import Navbar from '../components/Navbar';
import ProfilNav from '../components/ProfilNav';

const Profil = () => {
  const uid = useContext(UidContext);

  return (
    <>
      <Navbar />
      <div className="profil-page">
        {uid ? (
          <>
            <UpdateProfil />
            <ProfilNav />
            <Outlet />
          </>
        ) : (
          <div className="log-container">
            <Log signin={false} signup={true} />
            <div className="img-container">
              <img src="/img/log.svg" alt="img-log" />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Profil;
