import React, { useState } from 'react';

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    // Vous pouvez implémenter ici la logique de recherche, par exemple,
    // en mettant à jour les résultats de recherche en fonction du terme saisi.
  };

  return (
    <div className="searchbar">
      <div className="searchbar-container">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder=" Rechercher un document..."
          className="search-input"
        />
        <div className="search-icon">
          <img src="/img/icons/search-folder.svg" alt="search-folder-pic" />
        </div>
      </div>

      <div className="tagsTrends">
        <h3>Tags</h3>
      </div>
    </div>
  );
};

export default Searchbar;
