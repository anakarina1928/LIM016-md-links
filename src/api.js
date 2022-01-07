const fs = require('fs');//proporciona muchas funciones muy útiles para acceder e interactuar con el sistema de archivos.
const path = require('path');//proporciona utilidades para trabajar con rutas de archivos y directorios.
const axios = require('axios');//Axios es un cliente HTTP basado en promesas para node.jsy el navegador


const userPath = './data/data.md';

//para ver si la ruta es absoluta o relativa
const pathToAbsolute = (filePath) => {
  if (path.isAbsolute(filePath)) {
    return filePath;// si es absolta retorno la ruta y ya.

  } else {
    return path.resolve(filePath);// si no es absoluta la convierto.
  }
};

//Validar si el archivo existe
const validPath = (filePath) => {
  return fs.existsSync(filePath);
};
//recorriendo archivos


const isDirectory = (filePath) => {

  return fs.statSync(filePath).isDirectory();
};
const isMdFile = (filePath)=> {
  return path.extname(filePath) === '.md'
}


const browseFile = (filePath, arrayFile) => {

  if (!isDirectory(filePath)) {
   
    if(isMdFile){
     
      arrayFile.push(filePath);//si la ruta es absoluta tambien la agregro en mi arreglo global 
    }
    
  } else {
    const readDirectory = fs.readdirSync(filePath);//leer de forma asincrónica el contenido de un directorio
    let absolutePath = readDirectory.map((fileName) => {
      return path.join(filePath, fileName)
    })// cadena de ruta unida--- ruta absoluta que esta dentro de esa carpeta
    absolutePath.forEach((fileNamePath) => {
      browseFile(fileNamePath, arrayFile)

    });
  }
  return arrayFile// esto es lo que retorna mi funcion 
};

//console.log(browseFile(pathToAbsolute('./data'), []));

const regxLink = /\[([\w\s\d.()]+)\]\(((?:\/|https?:\/\/)[\w\d./?=#&_%~,.:-]+)\)/mg;
const regxUrl = /\(((?:\/|https?:\/\/)[\w\d./?=#&_%~,.:-]+)\)/mg;
const regxText = /\[[\w\s\d.()]+\]/;


//leer los archivos y extraer los links. Esta funcion me retorna un arreglo de objetos con los links encontados.
const readingLinks = (filePath) => {

  const fileContent = fs.readFileSync(filePath, 'utf-8');//leemos el archivo 
  const arrayLinks = fileContent.match(regxLink);/* extraigo los links que coincidan con mi expresion regular
    match() se usa para obtener todas las ocurrencias de una expresión regular dentro de una cadena.*/
  //console.log('extraccion de links: ', arrayLinks);

  if (arrayLinks === null) {
    return [];
  }

  return arrayLinks.map((myLinks) => {

    const myhref = myLinks.match(regxUrl).join().slice(1, -1);//URL encontradas
    const mytext = myLinks.match(regxText).join().slice(1, -1);//Texto que aparecía dentro del link

    return {
      href: myhref,
      text: mytext,
      fileName: filePath//Ruta del archivo donde se encontró el link.

    }

  });

};

//validar si los links funcionan correctamente. Debo hacer una peticion http.
const makeHttpRequest = (arrayLinks) => {
  const htttpPromisesArray = arrayLinks.map(link => axios.get(link.href));/* GET:OBTENER con el metodo get de axios obtengo las url y 
   arreglo de promesas de llamadas http*/

  const httpPromisesResolved = Promise.allSettled(htttpPromisesArray); /*allSettled devuelve una promesa que se resuelve después que
   todas las promesas dadas se hayan cumplido o rechazado, con una serie de objetos que describen el resultado de cada promesa.*/

  return httpPromisesResolved.then(htttpPromisesArrayResolved => {//then es un metodo que debuelve una promesa 
    // convertimos un arreglo de promesas en un arreglo de objetos y eso es lo que retornamos 
    return htttpPromisesArrayResolved.map(promiseResult => {

      if (promiseResult.status == 'fulfilled') {
        return {/*Si se recibe un valor, la Promesa devuelta por el método  then queda resuelta adoptando el valor de retorno.
          Promesa resuelta*/
          status: promiseResult.value.status,
          ok: promiseResult.value.statusText
        }
      } else {
        return {/*Si se produce un error, la Promesa devuelta por el método  then es rechazada, adoptando el error como su valor.
          Promera rechazada*/
          status: promiseResult.reason.response.status,
          fail: promiseResult.reason.response.statusText//contiene el mensaje de estado correspondiente al código de estado HTTP 

        }
      };
    });
  });
};


//console.log(makeHttpRequest(readingLinks('./data/data.md')));

//console.log(readingLinks('./data/data.md'));

module.exports = {
  pathToAbsolute,
  validPath,
  readingLinks,
  makeHttpRequest,
  browseFile,
  isMdFile,
  isDirectory

}













