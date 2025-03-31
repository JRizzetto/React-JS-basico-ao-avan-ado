import React from "react";

const ConditionalRender = () => {
  const x = 5;

  const name = "João";

  return (
    <div>
      {/* 7 - Render condicional */}
      <h3>Vai ser exibido?</h3>
      {x > 3 && <p>Se x for verdadeiro</p>}
      {/* 8 - Render condicional com ELSE (Ternário)*/}
      <h3>Render Ternário</h3>
      {name === "João" ? (
        <div>
          <p>OLá João</p>
        </div>
      ) : (
        <div>
          <p>Nome não encontrado</p>
        </div>
      )}
    </div>
  );
};

export default ConditionalRender;
