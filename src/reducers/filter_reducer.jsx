import {
  LOAD_PRODUCTS,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
} from '../actions';

const filter_reducer = (state, action) => {
  if (action.type === LOAD_PRODUCTS) {
    const { products } = action.payload;
    if (!products) {
      return state;
    }
    return {
      ...state,
      all_products: [...products],
      filtered_products: [...products],
    };
  }

  if (action.type === SORT_PRODUCTS) {
    const { sort, filtered_products } = state;
    let tempProducts = [...filtered_products];
    if (sort === 'price-lowest') {
      tempProducts = tempProducts.sort((a, b) => a.price - b.price);
    }
    if (sort === 'price-highest') {
      tempProducts = tempProducts.sort((a, b) => b.price - a.price);
    }
    if (sort === 'name-a') {
      tempProducts = tempProducts.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    }
    if (sort === 'name-z') {
      tempProducts = tempProducts.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
    }

    return { ...state, filtered_products: tempProducts };
  }
  if (action.type === UPDATE_SORT) {
    return { ...state, sort: action.payload };
  }

  if (action.type === FILTER_PRODUCTS) {
    const { all_products } = state;
    const { gender, category } = state.filters;
    let tempProducts = [...all_products];

    if (category !== 'all') {
      tempProducts = tempProducts.filter(
        (product) => product.category === category
      );
    }
    if (gender !== 'all') {
      tempProducts = tempProducts.filter(
        (product) => product.sex === gender || product.sex === 'all'
      );
    }

    return { ...state, filtered_products: tempProducts };
  }

  if (action.type === UPDATE_FILTERS) {
    const { name, value } = action.payload;
    return { ...state, filters: { ...state.filters, [name]: value } };
  }

  throw new Error(`No Matching "${action.type}" - action type`);
};

export default filter_reducer;
