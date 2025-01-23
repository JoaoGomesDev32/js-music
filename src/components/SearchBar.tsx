import React, { useState } from 'react';
// import { Box, TextField, Button } from '@mui/material';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query) {
      onSearch(query);
    }
  };

  return (
    <div className="d-flex flex-column gap-3">
      <input
        type="text"
        className="form-control"
        placeholder="Buscar músicas"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button className="primary" onClick={handleSearch}>
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;
