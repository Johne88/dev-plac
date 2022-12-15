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
      <input type="text">
    </td>
    
    <td>
      <input class="check" type="checkbox">
    </td>
    
    <td>
      <input class="check" type="checkbox">
    </td>
    
    <td>
      <input class="check" type="checkbox">
    </td>
    
    <td>
      <input class="check" type="checkbox">
    </td>
    
    <td>
      <input class="check" type="checkbox">
    </td>
    
    <td>
      <input class="check" type="checkbox">
    </td>
    
    <td>
      <input class="check" type="checkbox">
    </td>
    
    <td>
      <input class="check" type="checkbox">
    </td>
    
    <td>
      <input class="check" type="checkbox">
    </td>
    
    <td>
      <input class="check" type="checkbox">
    </td>
    
    <td>
      <select>
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
      <select>
        <option value="Coche">Coche</option>
        <option value="Moto">Moto</option>
        <option value="etc">etc</option>
      </select>
    </td>
    
    <td>
      <input class="check" type="checkbox">
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
  console.log(tableBody);
}