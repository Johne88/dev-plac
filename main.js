const myTable = document.querySelector('#myTable')
const tableBody = myTable.tBodies[0]

const addRow = () => {
  const tr = document.createElement('tr')

  tr.innerHTML = `
    <td>
      <button>
        ❌
      </button>
    </td>

    <td>
      <input name="matricula" type="text">
    </td>
    
    <td>
      <input name="material solicitado" class="check" type="checkbox">
    </td>
    
    <td>
      <input name="RESPETADO PLAZO MÁXIMO DE 72H" class="check" type="checkbox">
    </td>
    
    <td>
      <input name="MATRICULA CORRESPONDIENTE AL PEDIDO" class="check" type="checkbox">
    </td>
    
    <td>
      <input name="MANIPULADOR CORRECTO?" class="check" type="checkbox">
    </td>
    
    <td>
      <input name="NOMBRE FABRICANTE" class="check" type="checkbox">
    </td>
    
    <td>
      <input name="TIENE HOMOLOGACIÓN?" class="check" type="checkbox">
    </td>
    
    <td>
      <input name="TIENE ESCUDOS ESPAÑOLES?" class="check" type="checkbox">
    </td>
    
    <td>
      <input name="PLACA RALLADA?" class="check" type="checkbox">
    </td>
    
    <td>
      <input name="DISEÑO CORRECTO SEGÚN EL PEDIDO" class="check" type="checkbox">
    </td>
    
    <td>
      <input name="LOS REMACHES SON DEL COLOR CORRECTO" class="check" type="checkbox">
    </td>
    
    <td>
      <select name="PERSONA QUE REALIZA LA PLACA">
        <option value="John">John</option>
        <option value="Bruno">Bruno</option>
        <option value="Eduard">Eduard</option>
        <option value="Efka">Efka</option>
      </select>
    </td>
    
    <td>
      <div>
        <input type="radio" id="aluminio" name="material" value="aluminio" checked>
        <label for="aluminio">Aluminio</label>
      </div>

      <div>
        <input type="radio" id="acrilica" name="material" value="acrilica">
        <label for="acrilica">Acrílica</label>
      </div>
    </td>
    
    <td>
      <select name="tipo de placa">
        <option value="Coche">Coche</option>
        <option value="Moto">Moto</option>
        <option value="etc">etc</option>
      </select>
    </td>
    
    <td>
      <input name="repetir" class="check" type="checkbox">
    </td>
  `
  tableBody.appendChild(tr)

  tableBody.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
      button.parentElement.parentElement.remove()
    })
  })
}

const exportToJSON = () => {
  const rows = tableBody.querySelectorAll('tr')

  if (rows.length === 0) return

  const plates = []

  rows.forEach(row => {
    const inputs = row.querySelectorAll('input')
    const object = {}

    inputs.forEach(input => {
      if (input.type === 'checkbox') {
        object[input.name] = input.checked
      } else {
        object[input.name] = input.value
      }
    })

    plates.push(object)
  })

  console.log(plates);
}