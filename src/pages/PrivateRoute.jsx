import { useAuth0 } from '@auth0/auth0-react';
import { Navigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const { user } = useAuth0();
  if (!user) {
    return <Navigate to="/" />;
  }

  return children;
};
export default PrivateRoute;
