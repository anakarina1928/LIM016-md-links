const api = require('./api');
const userPath = './data/data.md';

/*La función debe retornar una promesa (Promise) que resuelva a 
un arreglo (Array) de objetos (Object) ¡se debe unificar los dos!*/ 

const mdLinks = ( userPath, options) => {
  return new Promise((resolve, reject) => {

    if (options.validate === true) {
      
      const arrayLinks = api.readingLinks(userPath);//array de objetos
      const promiseStatusLinks = api.makeHttpRequest(arrayLinks);//array de objetos que contienen la forma: { status: 200, }
      
      //Cuando se resuelva la promesa "promiseStatusLinks", es cuando vamos a resolver la promesa que estamos creando
      promiseStatusLinks.then( arrayHttpStatus => { //Aqui adentro hacemos la unificacion de los objetos que estan en ambos arreglos
        let unificationOfObjects = arrayLinks.map( (element, index) => {
          return {
            ...element,
            ...arrayHttpStatus[index]
          }
        })
        resolve(unificationOfObjects)
      })
       
    }
  });
}

  mdLinks(userPath, { validate: true}).then(finalArray => console.log('final array: ', finalArray));
  //console.log("Promesa resuelta");