import { createContext, useContext, useEffect, useReducer } from 'react';
import { useProductsContext } from './products_context';
import reducer from '../reducers/filter_reducer';
import {
  LOAD_PRODUCTS,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
} from '../actions';

const initialState = {
  all_products: [],
  filtered_products: [],
  sort: 'price-lowest',
  filters: {
    category: 'all',
    gender: 'all',
  },
};

const FilterContext = createContext();

// eslint-disable-next-line react/prop-types
export const FilterProvider = ({ children }) => {
  const { products } = useProductsContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: LOAD_PRODUCTS, payload: products });
  }, [products]);

  useEffect(() => {
    dispatch({ type: FILTER_PRODUCTS });
    dispatch({ type: SORT_PRODUCTS });
  }, [products, state.sort, state.filters]);

  const updateSort = (e) => {
    const value = e.target.value;
    dispatch({ type: UPDATE_SORT, payload: value });
  };
  const updateFilters = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === 'category') {
      value = e.target.textContent;
    }
    if (name === 'gender') {
      value = e.target.textContent;
    }
    dispatch({ type: UPDATE_FILTERS, payload: { name, value } });
  };

  return (
    <FilterContext.Provider value={{ ...state, updateSort, updateFilters }}>
      {children}
    </FilterContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useFilterContext = () => {
  return useContext(FilterContext);
};
