import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
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
  const [isUserLoaded, setIsUserLoaded] = useState(false);
  useEffect(() => {
    setIsUserLoaded(false);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        console.log("🚀 > unsubscribe > user", user);
      } else {
        console.log("no previous login");
      }
      setIsUserLoaded(true);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const [user, setUser] = useState(null);
  const loginWithGoogle = () => {
    setIsUserLoaded(false);
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };
  const loginWithFacebook = () => {
    setIsUserLoaded(false);
    const provider = new FacebookAuthProvider();
    return signInWithPopup(auth, provider);
  };
  const createUser = async (email, password, displayName, photoURL) => {
    setIsUserLoaded(false);
    return createUserWithEmailAndPassword(auth, email, password).then(() => {
      updateProfile(auth.currentUser, { displayName, photoURL });
    });
  };
  const signIn = (email, password) => {
    setIsUserLoaded(false);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setIsUserLoaded(false);
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
      value={{
        user,
        loginWithGoogle,
        loginWithFacebook,
        logOut,
        createUser,
        signIn,
        isUserLoaded,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
