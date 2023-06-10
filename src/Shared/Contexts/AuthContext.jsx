import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
  sendPasswordResetEmail,
} from "firebase/auth";
import app from "../../firebase/firebase.config";
const googleProvider = new GoogleAuthProvider();
export const AuthContext = createContext();
const AuthContextProvider = ({ children }) => {
    const auth = getAuth(app);
  const [loader, setLoader] = useState(true);
  const [user, setUser] = useState(null);
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userSignin = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    setLoader(true);
    return signOut(auth);
  };

  const handleUpdateProfile = (userInfo) => {
    return updateProfile(auth.currentUser, userInfo);
  };
  const googlesignin = () => {
    return signInWithPopup(auth, googleProvider)
    
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoader(false);
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  const authInfo = {
    createUser,
    resetPassword,
    userSignin,
    user,
    logOut,
    handleUpdateProfile,
    loader,
    googlesignin,
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthContextProvider;
