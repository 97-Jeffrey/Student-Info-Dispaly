import React from 'react';

const SearchBar = ({id, value, onChange, placeholder}) => {
  return ( 
    <input
      id={id}
      value={value}
      onChange = {onChange}
      placeholder={placeholder}
    />
  );
}
 
export default SearchBar;