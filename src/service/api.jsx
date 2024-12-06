import { initializeApp } from "firebase/app";
import { getDoc, getFirestore } from "firebase/firestore";
import { collection, addDoc, setDoc, doc, getDocs } from "firebase/firestore"; 
import { useEffect, useState } from "react";
const _ = require("lodash"); 

const firebaseConfig = {
  apiKey: "AIzaSyC94_Oj9vg0oqqgesNSkjQzatQ-gKdQDng",
  authDomain: "n2traders2024.firebaseapp.com",
  projectId: "n2traders2024",
  storageBucket: "n2traders2024.firebasestorage.app",
  messagingSenderId: "286765767506",
  appId: "1:286765767506:web:3f8c14d3fcba1be49d788b",
  measurementId: "G-LNLEE1PJ38"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export const WRITE_DOCUMENT = async (collectionName, documentName, data)=>{
    try {
        await setDoc(doc(db, collectionName, documentName), data);        
    } catch(e) {
        console.error("Error WRITE_DOCUMENT: ", e);
    }
}

export const READ_COLLECTION_DATA_MAP = async (collectionName, setCollectionData)=>{
    try {
        const querySnapshot = await getDocs(collection(db, collectionName));
        const data = {};
        querySnapshot.forEach((doc) => {
            data[doc.id] = doc.data();
        });
        setCollectionData(data);
    } catch(e) {
        console.error("Error READ_COLLECTION: ", e);
    }
}

export const READ_COLLECTION_DATA_ID_LIST = async (collectionName, setCollectionData)=>{
    try {
        const querySnapshot = await getDocs(collection(db, collectionName));
        const data = [];
        querySnapshot.forEach((doc) => {
            data.push(doc.id);
        });
        setCollectionData(data);
    } catch(e) {
        console.error("Error READ_COLLECTION: ", e);
    }
}

export const READ_DOCUMENT_DATA = async (collectionName, documentName, setDocumentData)=>{
    try {
        const docSnap = await getDoc(doc(db, collectionName, documentName));
        if (docSnap.exists()) { 
            setDocumentData(docSnap.data()); 
        } else { 
            console.error("Error READ_DOCUMENT: No such document!"); 
        }
    } catch(e) {
        console.error("Error READ_DOCUMENT: ", e);
    }
}

