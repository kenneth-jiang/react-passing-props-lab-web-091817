import React, { Component }  from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = (props) => {
  const {fruit, filters, currentFilter, updateFilterCallback} = props;
  return (
     <div className="fruit-basket">
      <Filter
        filters={filters}
        handleChange={updateFilterCallback}
      />
      <FilteredFruitList
        fruit={fruit}
        filter={currentFilter}
      />
    </div>
  )
}

FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: null,
  updateFilterCallback: undefined,
}
export default FruitBasket;
