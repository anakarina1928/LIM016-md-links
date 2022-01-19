#!/usr/bin/env node
const { arrangemenTemplate, statusTemplate, totalLinks } = require("./utils.js");
const mdlinks = require("./index.js");
const [, , ...args] = process.argv;

if (args.length === 0) {
    console.error(` 
    ╭─────────────────────❀
    │     Ingresa la ruta de un archivo
    ╰─────────────────────❀`);
}

if (args.length === 1 && args[0] === '--help') {

    const help = `
    ╭─────────────────────❀
    │    Tus opciones son las siguientes:
    ╰─────────────────────❀
    
    ▷ --validate: para validar cada link dentro del archivo, obtiene ruta del archivo, href, mensaje de OK o FAIL, estado del link y texto.
    ▷ --stats : para obtener el total de links y cantidad de links únicos.
    ▷ --validate --stats : al ingresar ambas opciones obtiene el total de links, cantidad de links únicos y links rotos.
    `;
    console.log(help);
}

if (args.length === 1) {

    mdlinks(args[0], { validate: false })
        .then(arrayLinks => arrangemenTemplate(arrayLinks))
        .catch(err => console.log(err));
}

if (args.length === 2 && (args[1] === '--validate' || args[1] === '-v')) {

    mdlinks(args[0], { validate: true })
        .then(arrayLinks => statusTemplate(arrayLinks))
        .catch(err => console.log(err));
}

if (args.length === 2 && (args[1] === '--stats' || args[1] === '-s')) {

    mdlinks(args[0], { validate: true })
        .then((arrayLinks) => console.log(totalLinks(arrayLinks)))
        .catch(err => console.log(err))

}

if (args.length === 3 && ((args[1] === "--stats" && args[2] === "--validate")
    || (args[1] === "-v" && args[2] === "-s"))) {

    mdlinks(args[0], { validate: true })
        .then(arrayLinks => {
            console.log(totalLinks(arrayLinks));
            return arrayLinks
        })
        .then(arrayLinks =>
            statusTemplate(arrayLinks)
        )
        .catch(err => console.log(err));
}




