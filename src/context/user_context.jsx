import { useAuth0 } from '@auth0/auth0-react';
import { useContext, useState, useEffect, createContext } from 'react';

const UserContext = createContext();
// eslint-disable-next-line react/prop-types
export const UserProvider = ({ children }) => {
  const { loginWithRedirect, logout, user, loginWithPopup } = useAuth0();

  const [myUser, setMyUser] = useState(null);

  useEffect(() => {
    setMyUser(user);
  }, [user]);

  return (
    <UserContext.Provider
      value={{ loginWithRedirect, logout, myUser, loginWithPopup }}
    >
      {children}
    </UserContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useUserContext = () => {
  return useContext(UserContext);
};
