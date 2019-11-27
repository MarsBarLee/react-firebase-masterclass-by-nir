import React from "react";
import firebase from 'firebase/app'

export const Provider = React.createContext();

const AuthProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const login = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password);
        .catch((error) => setErrorMessage(error.message));
  };

  const logout = (email, password) => {
    firebase.auth().signOut()
        .catch((error) => setErrorMessage(error.message));
  };

  const register = (email, password) => {
      firebase.auth().createUserWithEmilAndPassword(email, password)
  };

  const resetPassword = (email) => {
      firebase.auth()
        .setPasswordResetEmail(email)
        .catch((error) => setErrorMessage(error.message))
  }

  useEffect(() => {
      firebase.auth().onAuthStateChanged(function(user){
          if (user) {
              setCurrentUser(user)
          } else {
              setCurrentUser(null)
          }
      })
  })

  return (
      <AuthContext.Provider value={{login, logout, register, logout}}>
          {children(currentUser)}
      </AuthContext.Provider>
  );
};

export default AuthProvider;

// firebase give me documents 