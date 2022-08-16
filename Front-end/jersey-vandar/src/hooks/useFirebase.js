import { useState, useEffect } from 'react';
import {
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import app from '../firebase.init';

// import auth from '../../firebase.init';

const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);

export const useFirebase = () => {
  const [user, setUser] = useState([]);

  let form = '/';
  const navigate = useNavigate();

  const signInWithGoogle = () => {
    console.log('google sign in');
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        console.log(user, user.displayName);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const signOutHandle = () => {
    console.log('sign out');
    signOut(auth)
      .then(() => {
        setUser({});
        navigate(form, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        // User is signed out
        // ...
      }
    });
  }, []);

  const signInWithFacebook = () => {
    console.log('sign in with facebook');
  };

  return {
    user,
    signInWithGoogle,
    signOutHandle,
    signInWithFacebook,
  };
};
