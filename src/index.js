const api = require('./api');
const userPath = './data';

/*La función debe retornar una promesa (Promise) que resuelva a 
un arreglo (Array) de objetos (Object) ¡se debe unificar los dos!*/

const mdLinks = (userPath, options) => {
  return new Promise((resolve, reject) => {

    const absolutePath = api.pathToAbsolute(userPath);
    const validPath = api.validPath(absolutePath);
    if (validPath) {

      const filepathList = api.browseFile(absolutePath)

      let arrayLinks = filepathList.map((file) => {
        return api.readingLinks(file);
      }).flat();

      if (options.validate === true) {
        //array de objetos
        const promiseStatusLinks = api.makeHttpRequest(arrayLinks);//array de objetos que contienen la forma: { status: 200, }

        //Cuando se resuelva la promesa "promiseStatusLinks", es cuando vamos a resolver la promesa que estamos creando
        promiseStatusLinks.then(arrayHttpStatus => { //Aqui adentro hacemos la unificacion de los objetos que estan en ambos arreglos
          let unificationOfObjects = arrayLinks.map((element, index) => {
            return {
              ...element,
              ...arrayHttpStatus[index]
            }
          })
          resolve(unificationOfObjects);
        })

      } else{// retorna el array de links
        resolve(arrayLinks);
      }

    } else {
      reject(`
      
      ╭─────────────────────❀
      │ LA RUTA  ${absolutePath} NO EXISTE
      ╰─────────────────────❀
      `)
    }


  });
}

//console.log("Promesa resuelta");

module.exports = mdLinks;