$(document).ready(function() {
    $("#Cargar").click(function() {
      $.ajax({
        url: "https://fake-store-api-2no73ornoa-uc.a.run.app/api/products/all",
        method: "GET",
        success: function(data) {
          let tableRows = '';
          data.forEach(function(producto) {
            tableRows += `
              <tr>
                <td>${producto.name}</td>
                <td>${producto.id}</td>
                <td>${producto.category}</td>
                <td>$${producto.price}</td>
                <td>${producto.description}</td>
                <td><img src="${producto.image}" alt="${producto.name}" width="50"></td>
              </tr>
            `;
          });
          $("table tbody").html(tableRows);
        },
        error: function(error) {
          console.log("Error:", error);
        }
      });
    });
  });
  