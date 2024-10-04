import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";

export const AuthContext = createContext();

//create provider:
export const AuthContextProvider = ({ children }) => {
  const [authUser, setAuthUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // function to check if the user is logged in or not:
  useEffect(() => {
    const checkUserLoggedIn = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/v1/auth/check", {
          credentials: "include",
        });
        // convert the response to json:
        const data = await res.json();
        if (res.ok) {
          setAuthUser(data.user); // nul or authenticated user object
        }
      } catch (error) {
        toast.error(error.message);
      }finally{
        setLoading(false);
      }
    };
    checkUserLoggedIn();
  }, []);
  return (
    <AuthContext.Provider value={{ authUser, setAuthUser,loading }}>
      {children}
    </AuthContext.Provider>
  );
};

// Add Custom Hook To cnsume the context:
export const useAuthContext = () => {
  return useContext(AuthContext);
};
