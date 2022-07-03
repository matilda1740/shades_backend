import db, { dbStorage } from "../firebase.js";
import { Timestamp, collection, query, where, onSnapshot } from "firebase/firestore";

const productsRef = collection(db, "products");

export const getAllProducts = async (request, response) => {
    try {
        const results = await onSnapshot(collection(db, "products"), (querySnapshot) => {
        querySnapshot.forEach( doc => doc.data())
        })
        response.status(200).json(results)
    }catch(error){
        response.status(500).json(error);
    }
}