import React from "react";
import "./Time.css";
import Colaborador from "../Colaborador/Colaborador";

const Time = (props) => {
  const cssBackground = { backgroundColor: props.corPrimaria };
  const cssBorder = { borderColor: props.corSecundaria };
  return props.colaboradores.length > 0 ? (
    <section className="time" style={cssBackground}>
      <h3 style={cssBorder}>{props.nome}</h3>
      <div className="colaboradores">
        {props.colaboradores.map((colaborador) => (
          <Colaborador
            corDeFundo={props.corSecundaria}
            key={colaborador.nome}
            nome={colaborador.nome}
            cargo={colaborador.cargo}
            imagem={colaborador.imagem}
          />
        ))}
      </div>
    </section>
  ) : (
    ""
  );
};

export default Time;
