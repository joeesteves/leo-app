import React from "react";

export const Resultado = props => {
  const uno = props.valores.ingreso_1,
    dos = props.valores.ingreso_2,
    tres = props.valores.ingreso_3;
  const control = [uno, dos, tres]
    .map((valor, idx) => {
      if (valor == 0) {
        return `Debe indicar el valor de ingreso${idx + 1}`;
      }
      return "";
    })
    .join("");

  if (control == "") {
    return (
      <div>
        <p>El promedio es: {promedio(uno, dos, tres)}</p>
        <p>El mínimo_125 es: {minimo(uno, dos, tres)} </p>
        <p>El mínimo ganador es: {ganador(uno, dos, tres)}</p>
      </div>
    );
  }
  return <p> {control} </p>;
};

const promedio = (uno, dos, tres) => {
  return parseFloat((uno + dos + tres) / 3).toFixed(2);
};
const minimo = (uno, dos, tres) => {
  return parseFloat(Math.min(uno, dos, tres) * 1.25).toFixed(2);
};

const ganador = (uno, dos, tres) => {
  return Math.min(minimo(uno, dos, tres), promedio(uno, dos, tres)).toFixed(2);
};
