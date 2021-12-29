const fs = require('fs');
const path = require('path');
const userPath = './data/data.md';

//para ver si la ruta es absoluta o relativa
const pathToAbsolute = (filePath) => {
    if (path.isAbsolute(filePath)) {
        return filePath;// si es absolta retorno la ruta y ya.

    } else {
        return path.resolve(filePath);// si no es absoluta la convierto.
    }
}

//Valida si el archivo existe
const validPath = (filePath) => {
    return fs.existsSync(filePath);
}


const regxLink = /\[([\w\s\d.()]+)\]\(((?:\/|https?:\/\/)[\w\d./?=#&_%~,.:-]+)\)/mg;
const regxUrl = /\(((?:\/|https?:\/\/)[\w\d./?=#&_%~,.:-]+)\)/mg;
const regxText = /\[[\w\s\d.()]+\]/;


//leer los archivos y extraer los links
const readingLinks = (filePath) => {

    const fileContent = fs.readFileSync(filePath, 'utf-8');//leemos el archivo 
    const arrayLinks = fileContent.match(regxLink);/* extraigo los links que coincidan con mi expresion regular
    match() se usa para obtener todas las ocurrencias de una expresión regular dentro de una cadena.*/
    console.log(arrayLinks);
    return arrayLinks.map((myLinks) => {

        const myhref = myLinks.match(regxUrl);
        const mytext = myLinks.match(regxText);

        return {
            url: myhref[0].slice(1, -1),
            text: mytext[0].slice(1, -1),
            fileName: filePath

        }

    })

}

//console.log(readingLinks('./data/data.md'));















