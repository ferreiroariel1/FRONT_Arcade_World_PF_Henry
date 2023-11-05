import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
  signInWithRedirect,
} from "firebase/auth";
import { auth } from "../firebase/config";

const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if (!context) throw new Error("There is no Auth provider");
  console.log(typeof context, "el context:", context)
  return context;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };
  useEffect(() => {
    const unsubuscribe = onAuthStateChanged(auth, (currentUser) => {
      const localData = { 
        login: true,
        user: {
          image: currentUser.reloadUserInfo.photoUrl,
          Email: currentUser.reloadUserInfo.email,
          name: currentUser.reloadUserInfo.displayName.split(' ')[0],
          lastname: currentUser.reloadUserInfo.displayName.split(' ')[1],
          nickname: currentUser.reloadUserInfo.displayName
        }
      }
      console.log(localData);
      localStorage.setItem('login', JSON.stringify(localData)) 
      setUser(localData);
    });
    return () => unsubuscribe();
  }, []);

  return (
    <authContext.Provider
      value={{
        signup,
        login,
        user,
        loginWithGoogle,
        // resetPassword,
      }}
    >
      {children}
    </authContext.Provider>
  );
}