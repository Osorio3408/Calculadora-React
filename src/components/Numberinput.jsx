import React, { useState } from "react";
import PropTypes from "prop-types";

import Resultado from "./Resultado";
import { operaciones } from "../helpers/operaciones";

const Numberinput = () => {
  const [numeros, setNumeros] = useState({
    numero1: 10,
    numero2: 5,
  });

  const { handleChange, suma, resta, mult, divi, numero1, numero2 } =
    operaciones(numeros, setNumeros);

  return (
    <>
      <label className="mx-2">
        Numero 1:{" "}
        <input
          name="numero1"
          value={numero1}
          onChange={handleChange}
          type="number"
        />
      </label>
      <label className="mx-2">
        Numero 2:{" "}
        <input
          name="numero2"
          value={numero2}
          onChange={handleChange}
          type="number"
        />
      </label>
      <Resultado operacion="Suma" calculo={suma()} />
      <Resultado operacion="Resta" calculo={resta()} />
      <Resultado operacion="Multiplicacion" calculo={mult()} />
      <Resultado operacion="Division" calculo={divi()} />
    </>
  );
};

Numberinput.propTypes = {
  name: PropTypes.string,
};

export default Numberinput;
