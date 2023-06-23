// SearchBar.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { actionFilterSearchAsync, setRecentQueries } from '../../redux/actions/searchActions';

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(actionFilterSearchAsync(searchValue));
    dispatch(setRecentQueries(searchValue));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchValue}
        onChange={handleChange}
        placeholder="Buscar restaurante o plato"
      />
      <button type="submit">Buscar</button>
    </form>
  );
};

export default SearchBar;
