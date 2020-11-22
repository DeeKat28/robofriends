import React from 'react';

const SearchBar = ({ onSearchChange }) => {
    return (
        <div className='pa2'>
            <input 
                className='pa3 ba b--green bg-lightest-blue'
                type='search'
                placeholder='Search users'
                onChange={onSearchChange}
            />
        </div>
    );
}

export default SearchBar;