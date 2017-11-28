import React, { Component } from 'react';

const Filter = (props) => {
  const {filters, handleChange} = props;
  return (
    <select onChange={handleChange} defaultValue='all'>
    <option value='all'>All</option>
    {filters.map(filter =>
      <option key={filter} value={filter}>{filter}</option>
    )}
    </select>
  )
}

Filter.defaultProps = {
  filters: [],
  handleChange: undefined,
}

export default Filter;
