import { db } from "../firebase/config";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";

import { useState, useEffect } from "react";
import { auth } from "../firebase/config";

export const useAuthentication = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const [cancelled, setCancelled] = useState(false);

  function checkIfIsCancelled() {
    if (cancelled) {
      return;
    }
  }
  const createUser = async (data) => {
    checkIfIsCancelled();

    setLoading(true);
    setError(null);

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      await updateProfile(user, {
        displayName: data.displayName,
      });

      setLoading(false);

      return user;
    } catch (error) {
      console.log(error.message);
      console.log(typeof error.message);

      let systemErrorMessage;

      if (error.message.includes("Password")) {
        systemErrorMessage = "A senha precisa conter pelo menos 6 caracteres.";
      } else if (error.message.includes("email-already")) {
        systemErrorMessage = "E-mail já cadastrado.";
      } else {
        systemErrorMessage = "Ocorreu um erro, por favor tente mais tarde.";
      }

      setLoading(false);
      setError(systemErrorMessage);
    }
  };

  // logout
  const logout = () => {
    checkIfIsCancelled();

    signOut(auth);
  };

  // login - sign in
const login = async (data) => {
  checkIfIsCancelled();

  setLoading(true);
  setError(null); // null é melhor do que false nesse contexto

  console.log("Dados recebidos para login:", data);

  try {
    await signInWithEmailAndPassword(auth, data.email, data.password);
    setLoading(false);
  } catch (error) {
    let systemErrorMessage;

    // Tratamento de erros com base no código do Firebase
    switch (error.code) {
      case "auth/user-not-found":
        systemErrorMessage = "Usuário não encontrado.";
        break;
      case "auth/wrong-password":
        systemErrorMessage = "Senha incorreta.";
        break;
      case "auth/invalid-email":
        systemErrorMessage = "E-mail inválido.";
        break;
      default:
        systemErrorMessage = "Ocorreu um erro, por favor tente mais tarde.";
        break;
    }

    setError(systemErrorMessage);
    setLoading(false);
  }
};


  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return {
    auth,
    createUser,
    error,
    loading,
    logout,
    login,
  };
};
