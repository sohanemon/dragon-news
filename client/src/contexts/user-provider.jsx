import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { createContext, useContext, useState } from "react";
import { auth } from "../firebase/common";

const UserContext = createContext({});
export const useUserContext = () => useContext(UserContext);
const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  const loginWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("🚀 > .then > result", result);
      })
      .catch((error) => {
        console.log("🚀 > loginWithGoogle > error", error);
      });
  };

  return (
    <UserContext.Provider value={{ user, loginWithGoogle }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
