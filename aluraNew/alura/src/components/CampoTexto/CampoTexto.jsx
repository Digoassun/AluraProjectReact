import React, { useState } from "react";
import "./CampoTexto.css";

const CampoTexto = (props) => {
  const placeholderMod = `${props.placeholder}`;

  const aoDigitado = (event) => {
    props.aoAlterado(event.target.value);
  };

  return (
    <div className="campoTexto">
      <label>{props.label}</label>
      <input
        value={props.valor}
        onChange={aoDigitado}
        required={props.obrigatorio}
        placeholder={placeholderMod}
      />
    </div>
  );
};

export default CampoTexto;
