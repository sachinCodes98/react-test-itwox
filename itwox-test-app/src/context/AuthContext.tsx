import React, { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface AuthContextProps {
  isAuthenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
}

interface AuthProviderPops{
    children: ReactNode
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export const AuthProvider:React.FC<AuthProviderPops> = ({children}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const navigate= useNavigate()

  const login = (token: string) => {
    localStorage.setItem("token", token);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("/")
  };

  useEffect(() => {
    const storedToken = localStorage.getItem("token");

    if (storedToken) {
      try{
        // jwt.verify(storedToken, 'token');
        setIsAuthenticated(true)
      }catch(err){
        console.error('Invalid token');
        setIsAuthenticated(false);  
      }
    }
  }, []);

  return(
    <AuthContext.Provider value={{isAuthenticated, login, logout}}>
        {children}
    </AuthContext.Provider>
  )

};

export const useAuth = ()=>{
    const context = useContext(AuthContext);
    if(!context){
        throw new Error('useAuth must be used within AuthProvider')
    }
    return context;
}