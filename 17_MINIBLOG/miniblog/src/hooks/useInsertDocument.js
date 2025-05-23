import { useState, useEffect, useReducer } from "react";
import { db } from "../firebase/config";
import { collection, addDoc, Timestamp } from "firebase/firestore";

const initialState = {
  loading: null,
  error: null,
};

const insertReducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { loading: true, error: null };
    case "INSERT_DOC":
      return { loading: false, error: null };
    case "ERROR":
      return { loading: true, error: action.payload };
    default:
      return state;
  }
};

export const useInsertDocument = (docColletion) => {
  const [response, dispath] = useReducer(insertReducer, initialState);

  // deal with memory leak
  const [cancelled, setCancelled] = useState(false);

  const checkCancelBeforeDispath = (action) => {
    if (!cancelled) {
      dispath(action);
    }
  };

  const insertDocument = async (document) => {
    checkCancelBeforeDispath({
      type: "LOADING",
    });

    try {
      const newDocument = { ...document, createdAt: Timestamp.now() };

      console.log("Coleção:", docColletion);
      const insertDocument = await addDoc(
        collection(db, docColletion),
        newDocument
      );

      checkCancelBeforeDispath({
        type: "INSERT_DOC",
        payload: insertDocument,
      });
    } catch (error) {
      checkCancelBeforeDispath({
        type: "ERROR",
        payload: error.message,
      });
    }
  };

  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return { insertDocument, response };
};
