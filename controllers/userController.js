import db, { auth } from "../firebase.js";
import { Timestamp, collection, query, where, onSnapshot,serverTimestamp } from "firebase/firestore";

const { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } = auth;


const usersRef = collection(db, "users");

const userDetails = {
    firstname: "Marianna",
    lastname: "Peru", 
    email: "mariannaperu@gmail.com", 
    password: "1234",
    address: "78 Peruvian Street",
    dob: Timestamp.fromDate(new Date('December 10, 1815')), 
}

export const signUpUser = async (userDetails) => {

    const { firstname, lastname, email, password, address, dob } = userDetails;

        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            let response =  usersRef.doc(userCredential.user.uid)
                    .set({
                        userID: userCredential.user.uid,
                        firstname,
                        lastname,
                        email,
                        address,
                        dob,
                        createdAt: serverTimestamp() 
                    })
                    .catch( error => {
                        onsole.log("Databse Error - Adding User: ", error)
                    })
            console.log("Signed Up Success: ", response)
        })
        .catch( error => {
            console.log("Signed Up Error: ", error.code, error.message)
        })
};

export const logInUser = () => {
    return () => {
        signInWithEmailAndPassword(auth, email, password)
        .then( (userCredential) => {
            const user = userCredential.user
            console.log("Login With Email Success: ", user)
        })
        .catch( error => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("Login With Email Error: ", errorCode, errorMessage)            
    })
}
};

export const authStateObserver = () => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // const uid = user.uid;
            console.log("User Active Details: ", user)
        } else {
            console.log("User Logged Out: ")
        }
    });
};

// OTHER LOGIN METHODS

