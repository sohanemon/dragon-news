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
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        console.log("🚀 > unsubscribe > user", user);
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
      .then((result) => {})
      .catch((error) => {});
  };
  const createUser = async (email, password, displayName, photoURL) => {
    return createUserWithEmailAndPassword(auth, email, password).then(() => {
      updateProfile(auth.currentUser, { displayName, photoURL });
    });
  };
  const signIn = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

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
      value={{
        user,
        loginWithGoogle,
        loginWithFacebook,
        logOut,
        createUser,
        signIn,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
