function mostrarAlumnos() {
  let url = "http://localhost:3300/Alumnos";
  fetch(url)
      .then(response => response.json())
      .then(data => mostrarDatos(data))
      .catch(error => console.log(error));

  const mostrarDatos = (data) => {
      console.log(data);
      let body = "";
      for (var i = 0; i < data.length; i++) {
          body += `<tr>
              <td class="table-success" style="background-color: white; border: solid 2px black; color: black; font-size: 11px; font-family: monospace;">${data[i].Nombre_completo}</td>
              <td class="table-success" style="background-color: white; border: solid 2px black; color: black; font-size: 11px; font-family: monospace;">${data[i].Rut}</td>
              <td class="table-success" style="background-color: white; border: solid 2px black; color: black; font-size: 11px; font-family: monospace;">${data[i].Carrera}</td>
              <td class="table-success" style="background-color: white; border: solid 2px black; color: black; font-size: 11px; font-family: monospace;">${data[i].Hora_entrada}</td>
              <td class="table-success" style="background-color: white; border: solid 2px black; color: black; font-size: 11px; font-family: monospace;">${data[i].Hora_salida}</td>
              <td class="table-success" style="background-color: white; border: solid 2px black; color: black; font-size: 11px; font-family: monospace;">${data[i].Numero_de_torniquete}</td>
          </tr>`;
      }
      document.getElementById('AlumnosBody').innerHTML = body;
  };
}

