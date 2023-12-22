

// import { createContext, useEffect, useState } from "react";
 import PropTypes from 'prop-types';
// import auth from "../firebase/firebase.config";
// import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword,
//      onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../assets/firebase/firebase.config";


export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true) ;
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    

    //register
     const createUser =(email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
     }

     //login with email and password
     const signInUser =(email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
     }
     //login with google
     const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    //login with github
    const signInWithGithub =() => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }
    //logout
    const logout =() => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {

            setUser(currentUser);
            setLoading(false)
            console.log('observing current user inside useEffect of authprovider ', currentUser);
        })
        return () =>{
            unSubscribe()
        }
     },[])

    const authInfo ={user, loading,createUser,logout, signInUser,signInWithGoogle, signInWithGithub, }

    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                    {children}
            </AuthContext.Provider>
            
        </div>
    );
};
AuthProvider.propTypes = {
    children:PropTypes.node
}
export default AuthProvider;


