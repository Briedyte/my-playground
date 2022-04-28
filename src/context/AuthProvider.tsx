import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { LocalStorage } from "@config/constants";

import {
  deleteFromLocalStorage,
  localStorageEventEmitter,
  setToLocalStorage,
} from "@utils/localStorage";

const AuthContext = React.createContext({
  isLoggedIn: false,
  logout: () => {},
  login: (response: string) => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState(
    localStorage.getItem(LocalStorage.userToken) || ""
  );

  useEffect(() => {
    const listener = () => {
      setToken(localStorage.getItem(LocalStorage.userToken) || "");
    };

    localStorageEventEmitter.addListener("change", listener);

    return () => {
      window.removeEventListener("storage", listener);
      localStorageEventEmitter.removeListener("change", listener);
    };
  }, []);

  const login = useCallback((response: string) => {
    setToLocalStorage(LocalStorage.userToken, response);
  }, []);

  const logout = useCallback(() => {
    deleteFromLocalStorage(LocalStorage.userToken);
  }, []);

  const authContext = useMemo(
    () => ({
      isLoggedIn: !!token,
      logout,
      login,
    }),
    [token, logout, login]
  );

  return (
    <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
