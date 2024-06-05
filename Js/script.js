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
              <td class="table-success" style="background-color: white; border-top-left-radius: 15px; border-bottom-left-radius:15px; border: solid 2px black; color: black; font-size: 11px;">${data[i].Nombre_completo}</td>
              <td class="table-success" style="background-color: white; border: solid 2px black; color: black; font-size: 11px;">${data[i].Rut}</td>
              <td class="table-success" style="background-color: white; border: solid 2px black; color: black; font-size: 11px;">${data[i].Carrera}</td>
              <td class="table-success" style="background-color: white; border: solid 2px black; color: black; font-size: 11px;">${data[i].Hora_entrada}</td>
              <td class="table-success" style="background-color: white; border: solid 2px black; color: black; font-size: 11px;">${data[i].Hora_salida}</td>
              <td class="table-success" style="background-color: white; border: solid 2px black; color: black; font-size: 11px;">${data[i].Numero_de_torniquete}</td>
          </tr>`;
      }
      document.getElementById('AlumnosBody').innerHTML = body;
  };
}
