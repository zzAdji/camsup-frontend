import React, { useContext } from 'react';
import { UidContext } from '../components/AppContext';
import Navbar from '../components/Navbar';
import LeftNav from '../components/LeftNav';
import Searchbar from '../components/Searchbar';
import NewDocsForm from '../components/Document/NewDocsForm';
import DocsThread from '../components/DocsThread';
import Log from '../components/Log';
import Quizz from '../components/Quizz';

const Documentation = () => {
  const uid = useContext(UidContext);

  return (
    <>
      <Navbar />
      <div className="documentation">
        <LeftNav />
        <div className="main-docs">
          <div className="docs-header">
            {uid ? <NewDocsForm /> : <Log signin={true} signup={false} />}
          </div>
          <DocsThread />
        </div>
        <div className="right-side">
          <div className="right-side-container">
            <div className="wrapper">
              <Searchbar />
              <Quizz />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Documentation;
