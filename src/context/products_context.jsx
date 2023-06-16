import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';
import reducer from '../reducers/products_reducer';
import { products_url as url } from '../utils/constants';

import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
  MODAL_OPEN,
  MODAL_CLOSE,
} from '../actions';
import axios from 'axios';

const initialState = {
  isSidebarOpen: false,
  loading_products: false,
  products_error: false,
  products: [],
  featured_products: [],
  single_product_loading: false,
  single_product_error: false,
  single_product: [],
  show_modal: false,
};

const ProductsContext = createContext();

// eslint-disable-next-line react/prop-types
export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [scrollToContact, setScrollToContact] = useState(null);

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN });
  };
  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE });
  };

  const fetchProducts = async (url) => {
    dispatch({ type: GET_PRODUCTS_BEGIN });
    try {
      const response = await axios.get(url);
      const products = response.data;

      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products });
    } catch (err) {
      dispatch({ type: GET_PRODUCTS_ERROR });
    }
  };

  const fetchSingleProduct = async (url) => {
    dispatch({ type: GET_SINGLE_PRODUCT_BEGIN });
    try {
      const response = await axios.get(url);
      const singleProduct = response.data.product;
      dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: singleProduct });
    } catch (err) {
      dispatch({ type: GET_SINGLE_PRODUCT_ERROR });
    }
  };

  useEffect(() => {
    fetchProducts(url);
  }, []);

  const handleClickScrollContact = () => {
    scrollToContact.current.scrollIntoView();
  };

  const openModal = () => {
    dispatch({ type: MODAL_OPEN });
  };
  const closeModal = () => {
    dispatch({ type: MODAL_CLOSE });
  };

  return (
    <ProductsContext.Provider
      value={{
        ...state,
        openSidebar,
        closeSidebar,
        setScrollToContact,
        handleClickScrollContact,
        fetchSingleProduct,
        openModal,
        closeModal,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useProductsContext = () => {
  return useContext(ProductsContext);
};
