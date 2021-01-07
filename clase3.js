/* Jquery */
$.ajax("https://randomuser.me/api/", {
  method: "GET",
  success: function (data) {
    console.log("usando JQuery");
    console.log(data);
  },
  error: function (error) {
    console.log(error);
  },
});

/* JavaScript */
fetch("https://randomuser.me/api/")
  .then(function (response) {
    console.log("Usando JavaScript");
    console.log(response);
    return response.json();
  })
  .then(function (user) {
    console.log("Usando JavaScript pinta un usuario");
    console.log("user", user.results[0].name.first);
  })
  .catch(function () {
    console.log("algo falló");
  });
