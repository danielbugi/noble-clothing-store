import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { ProductsProvider } from './context/products_context.jsx';
import { CartProvider } from './context/cart_context.jsx';
import { FilterProvider } from './context/filter_context.jsx';
import { Auth0Provider } from '@auth0/auth0-react';
import { UserProvider } from './context/user_context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain={import.meta.env.VITE_AUTH_DOMAIN}
    clientId={import.meta.env.VITE_APP_AUTH_CLIENT_ID}
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>
);
