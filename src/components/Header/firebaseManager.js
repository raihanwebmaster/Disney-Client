import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";

export const initializeLoginFrameWork = () => {
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
};

export const handleGoogleSignIn = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(googleProvider)
    .then((res) => {
      const { displayName, email, photoURL } = res.user;
      const signedInUser = {
        isSignedIn: true,
        name: displayName,
        email: email,
        photo: photoURL,
        success: true,
      };
      sessionStorage.setItem("user", JSON.stringify(signedInUser));
      storeAuthToken();
      return signedInUser;
    })
    .catch((err) => {
      console.log(err);
      console.log(err.message);
    });
};

export const handleSignOut = () => {
  return firebase
    .auth()
    .signOut()
    .then((res) => {
      const signedOutUser = {
        isSignedIn: false,
        name: "",
        email: "",
        photo: "",
        success: false,
      };
      sessionStorage.removeItem("user", JSON.stringify(signedOutUser));
      return signedOutUser;
    })
    .catch((err) => {
      console.log(err);
    });
};
const storeAuthToken = () => {
  firebase
    .auth()
    .currentUser.getIdToken(/* forceRefresh */ true)
    .then(function (idToken) {
      sessionStorage.setItem("token", idToken);
    })
    .catch(function (error) {
      console.log(error.errorMessage);
    });
};
