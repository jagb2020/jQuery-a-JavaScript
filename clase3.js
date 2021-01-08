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

  (async function load() {
    // await
    // action
    // terror
    // animation
    async function getData(url) {
      const response = await fetch(url);
      const data = await response.json()
      return data;
    }
  
    const actionList = await getData('https://yts.mx/api/v2/list_movies.json?genre=action')
    const dramaList = await getData('https://yts.mx/api/v2/list_movies.json?genre=drama')
    const animationList = await getData('https://yts.mx/api/v2/list_movies.json?genre=animation')
    console.log(actionList, dramaList, animationList)
  })()