// dom elements
const tableBody = document.querySelector('#myTable').tBodies[0]
const importFileInput = document.querySelector('#importFileInput')

/**
 * Appends an empty row to the table.
 */
const addEmptyRow = () => {
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
      <input name="materialSolicitado" class="check" type="checkbox">
    </td>
    
    <td>
      <input name="respetadoPlazoMaximo72h" class="check" type="checkbox">
    </td>
    
    <td>
      <input name="matriculaCorrespondienteAlPedido" class="check" type="checkbox">
    </td>
    
    <td>
      <input name="manipuladorCorrecto" class="check" type="checkbox">
    </td>
    
    <td>
      <input name="nombreFabricante" class="check" type="checkbox">
    </td>
    
    <td>
      <input name="tiemeHomologacion" class="check" type="checkbox">
    </td>
    
    <td>
      <input name="tieneEscudosEspanoles" class="check" type="checkbox">
    </td>
    
    <td>
      <input name="placaRallada" class="check" type="checkbox">
    </td>
    
    <td>
      <input name="disenoCorrectoSegunPedido" class="check" type="checkbox">
    </td>
    
    <td>
      <input name="remachesDeColorCorrecto" class="check" type="checkbox">
    </td>
    
    <td>
      <select name="personaQueRealizaPlaca">
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
      <select name="tipoPlaca">
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

/**
 * Appends an row to the table.
 * The values of their fields will be filled taking the item's object fields.
 * 
 * @param {object} item 
 */
const addFilledRow = item => {
  const tr = document.createElement('tr')

  tr.innerHTML = `
    <td>
      <button>
        ❌
      </button>
    </td>

    <td>
      <input name="matricula" type="text" value="${item.matricula}">
    </td>
    
    <td>
      <input name="materialSolicitado" class="check" type="checkbox" ${item.materialSolicitado ? 'checked' : ''}>
    </td>
    
    <td>
      <input name="respetadoPlazoMaximo72h" class="check" type="checkbox" ${item.respetadoPlazoMaximo72h ? 'checked' : ''}>
    </td>
    
    <td>
      <input name="matriculaCorrespondienteAlPedido" class="check" type="checkbox" ${item.matriculaCorrespondienteAlPedido ? 'checked' : ''}>
    </td>
    
    <td>
      <input name="manipuladorCorrecto" class="check" type="checkbox" ${item.manipuladorCorrecto ? 'checked' : ''}>
    </td>
    
    <td>
      <input name="nombreFabricante" class="check" type="checkbox" ${item.nombreFabricante ? 'checked' : ''}>
    </td>
    
    <td>
      <input name="tiemeHomologacion" class="check" type="checkbox" ${item.tiemeHomologacion ? 'checked' : ''}>
    </td>
    
    <td>
      <input name="tieneEscudosEspanoles" class="check" type="checkbox" ${item.tieneEscudosEspanoles ? 'checked' : ''}>
    </td>
    
    <td>
      <input name="placaRallada" class="check" type="checkbox" ${item.placaRallada ? 'checked' : ''}>
    </td>
    
    <td>
      <input name="disenoCorrectoSegunPedido" class="check" type="checkbox" ${item.disenoCorrectoSegunPedido ? 'checked' : ''}>
    </td>
    
    <td>
      <input name="remachesDeColorCorrecto" class="check" type="checkbox" ${item.remachesDeColorCorrecto ? 'checked' : ''}>
    </td>
    
    <td>
      <select name="personaQueRealizaPlaca">
        <option value="John" ${item.personaQueRealizaPlaca === 'John'  ? 'selected' : ''}>John</option>
        <option value="Bruno" ${item.personaQueRealizaPlaca === 'Bruno'  ? 'selected' : ''}>Bruno</option>
        <option value="Eduard" ${item.personaQueRealizaPlaca === 'Eduard'  ? 'selected' : ''}>Eduard</option>
        <option value="Efka" ${item.personaQueRealizaPlaca === 'Efka'  ? 'selected' : ''}>Efka</option>
      </select>
    </td>
    
    <td>
      <div>
        <input type="radio" id="aluminio" name="material" value="aluminio" ${item.material === 'aluminio' ? 'checked' : ''}>
        <label for="aluminio">Aluminio</label>
      </div>

      <div>
        <input type="radio" id="acrilica" name="material" value="acrilica" ${item.material === 'acrilica' ? 'checked' : ''}>
        <label for="acrilica">Acrílica</label>
      </div>
    </td>
    
    <td>
      <select name="tipoPlaca">
        <option value="Coche" ${item.tipoPlaca === 'Coche'  ? 'selected' : ''}>Coche</option>
        <option value="Moto" ${item.tipoPlaca === 'Moto'  ? 'selected' : ''}>Moto</option>
        <option value="etc" ${item.tipoPlaca === 'etc'  ? 'selected' : ''}>etc</option>
      </select>
    </td>
    
    <td>
      <input name="repetir" class="check" type="checkbox" ${item.repetir ? 'checked' : ''}>
    </td>
  `

  tableBody.appendChild(tr)

  tableBody.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
      button.parentElement.parentElement.remove()
    })
  })
}

/**
 * Exports all the table rows to a JSON file.
 */
const exportJSON = () => {
  const rows = tableBody.querySelectorAll('tr')

  if (rows.length === 0) return

  const plates = []

  rows.forEach(row => {
    const inputs = row.querySelectorAll('input')
    const selects = row.querySelectorAll('select')

    const object = {}

    inputs.forEach(input => {
      if (input.type === 'checkbox') {
        object[input.name] = input.checked
      } else {
        object[input.name] = input.value
      }
    })

    selects.forEach(select => {
      object[select.name] = select.value
    })

    plates.push(object)
  })

  const a = document.createElement('a')

  a.href = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(plates))
  a.download = 'export.json'

  a.click()
}

// listen on file upload (import JSON file)
importFileInput.addEventListener('change', evt => {
  // grab and read uploaded file
  const file = evt.target.files[0]
  const reader = new FileReader()

  reader.readAsText(file)

  reader.onload = event => {
    // retrieve JSON data
    const items = JSON.parse(event.target.result)

    // add the items to the table
    items.forEach(item => {
      addFilledRow(item)
    })
  }
})