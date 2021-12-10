const existePropiedad = (objeto, propiedad) => {
  if (
    typeof objeto === "object" &&
    typeof propiedad === "string" &&
    objeto.hasOwnProperty(propiedad)
  ) {
    return true;
  }
  return false;
};
//   console.log(existePropiedad({ nombre: "wiwi" }));

module.exports = existePropiedad;
