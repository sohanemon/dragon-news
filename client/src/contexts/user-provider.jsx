import { FacebookAuthProvider } from "firebase/auth";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../firebase/common";

const UserContext = createContext({});
export const useUserContext = () => useContext(UserContext);
const UserProvider = ({ children }) => {
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        console.log("no previous login");
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const [user, setUser] = useState();
  const loginWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {})
      .catch((error) => {});
  };
  const loginWithFacebook = () => {
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("🚀 > .then > result", result);
      })
      .catch((error) => {});
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <UserContext.Provider
      value={{ user, loginWithGoogle, loginWithFacebook, logOut }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
