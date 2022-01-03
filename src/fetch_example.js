const axios = require('axios');

function doHttpRequest(params) {
    let result = {}
    axios.get('https://www.google.com/')//metodo que hace una llamada http
    .then((response) => {
      //console.log(response.status);
      //console.log(response.statusText);
      result.statusCode = response.status;
      result.statusText = response.statusText;
      //console.log(response.data);
    })   
    return result;
}

console.log("Http request result: ", doHttpRequest());
axios.get('https://www.google.com/')//metodo que hace una llamada http
  .then((response) => {
    //console.log(response.status);
    //console.log(response.statusText);
    //console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });

  