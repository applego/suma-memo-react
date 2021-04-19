import React from 'react';
import FilterLink from '../containers/FilterLink';
import { VisibilityFilters } from '../actions';

const Footer = () => (
  <p>
    Show: <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
    {', '}
    <FilterLink filter={VisibilityFilters.SHOW_NOT_PINNED}>
      Not Pinned
    </FilterLink>
    {', '}
    <FilterLink filter={VisibilityFilters.SHOW_PINNED}>Pinned</FilterLink>
  </p>
);

export default Footer;
