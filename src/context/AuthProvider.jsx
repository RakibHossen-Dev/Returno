import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../firebase/firebase.config";
import axios from "axios";
export const authContext = createContext();
const AuthProvider = ({ route }) => {
  const googleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  //   console.log(route);
  const handleGoogleLogin = () => {
    setLoading(true);

    return signInWithPopup(auth, googleProvider);
  };

  const handleRegister = (email, password) => {
    setLoading(true);

    return createUserWithEmailAndPassword(auth, email, password);
  };

  const handleLogin = (email, password) => {
    setLoading(true);

    return signInWithEmailAndPassword(auth, email, password);
  };

  const handleLogout = () => {
    setLoading(true);

    return signOut(auth);
  };

  const manageProfile = (name, photo) => {
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const authInfo = {
    handleGoogleLogin,
    handleRegister,
    handleLogin,
    handleLogout,
    manageProfile,
    setUser,
    user,
    loading,
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      if (currentUser) {
        setUser(currentUser);

        if (currentUser?.email) {
          const user = { email: currentUser.email };
          axios
            .post("http://localhost:5000/jwt", user, { withCredentials: true })
            .then((res) => {
              console.log(res.data);
            });
        }
      } else {
        axios
          .post("http://localhost:5000/logout", {}, { withCredentials: true })
          .then((res) => {
            console.log("Logout", res.data);
            setLoading(false);
          });
        setUser(null);
      }
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div>
      <authContext.Provider value={authInfo}>{route}</authContext.Provider>
    </div>
  );
};

export default AuthProvider;
