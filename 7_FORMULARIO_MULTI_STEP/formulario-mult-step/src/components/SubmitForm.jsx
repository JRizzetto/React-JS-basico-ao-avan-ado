import { useState } from "react";
import { supabase } from "../supabaseClient";

const SubmitForm = ({ data, setStatus }) => {
  const sendToSupabase = async () => {
    try {
      const { error } = await supabase
        .from("avaliacoes")
        .insert([
          {
            nome: data.name,
            email: data.email,
            review: data.review,
            comentario: data.comment,
          },
        ]);

      if (error) throw error;

      setStatus("Dados enviados com sucesso!");
      
      // Aguarda 1 segundo e recarrega a página
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      setStatus(`Erro: ${error.message}`);
    }
  };

  return (
    <button type="button" onClick={sendToSupabase}>
      Enviar
    </button>
  );
};

export default SubmitForm;
