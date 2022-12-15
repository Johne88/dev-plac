const agregarFila = () => {
  document.getElementById("headtable").insertRow(-1).innerHTML =
    '<td> <input type="text"> </td><td> <input class="check" type="checkbox"> </td><td> <input class="check" type="checkbox"> </td><td> <input class="check" type="checkbox"> </td><td> <input class="check" type="checkbox"> </td><td> <input class="check" type="checkbox"> </td><td> <input class="check" type="checkbox"> </td><td> <input class="check" type="checkbox"> </td><td> <input class="check" type="checkbox"> </td><td> <input class="check" type="checkbox"> </td><td> <input class="check" type="checkbox"> </td><td> </td><td></td><td></td><td></td>'
  /* MATRICULA                        MATERIAL SOLICITADO                            SE HA RESPETADO EL PLAZO                       CORRESPONDIENTE AL PEDIDO                           MANIPULADOR CORRECTO                           NOMBRE FABRICANTE                               TIENE HOMOLGACION                                TIENE ESCUDOS                                  PLACA RALLADA                                  DISEÑO CORRECTO                                  REMACHES CORRECTOS */
}

const eliminarFila = () => {
  const table = document.getElementById("headtable")
  const rowCount = table.rows.length

  if (rowCount <= 1) alert("No se puede eliminar encabezado")
  else table.deleteRow(rowCount - 1)
}