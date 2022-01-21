#!/usr/bin/env node
const { arrangemenTemplate, statusTemplate, totalLinks } = require("./utils.js");
const mdlinks = require("./index.js");
const chalk = require('chalk');
const [, , ...args] = process.argv;

if (args.length === 0) {
    console.error( chalk.magenta.bold(
        ` 
    ╭─────────────────────❀
    │     Ingresa la ruta de un archivo
    ╰─────────────────────❀`));
}

if (args.length === 1 && args[0] === '--help') {

    const help = chalk.magenta.bold( `
    ╭─────────────────────❀
    │    Tus opciones son las siguientes:
    ╰─────────────────────❀
    
    ▷ --validate o -v:
           -validara cada link dentro del archivo.
           -obtiene ruta del archivo href, 
           -mensaje de OK o FAIL, estado del link y texto.\t
    ▷ --stats o -s : 
           -para obtener el total de links 
           -cantidad de links únicos.
           -links rotos\t
    ▷ --validate --stats :
           - podras tener toda la informacion junta.
    `);
    console.log(help);
}

if (args.length === 1) {

    mdlinks(args[0], { validate: false })
        .then(arrayLinks => arrangemenTemplate(arrayLinks))
        .catch(err => console.log(err));
        return
}

const posicionUno = args[1].toLowerCase();

if (args.length === 2 && (posicionUno === '--validate' || posicionUno === '-v')) {

    mdlinks(args[0], { validate: true })
        .then(arrayLinks => statusTemplate(arrayLinks))
        .catch(err => console.log(err));
}

if (args.length === 2 && (posicionUno === '--stats' || posicionUno === '-s')) {

    mdlinks(args[0], { validate: true })
        .then((arrayLinks) => console.log(totalLinks(arrayLinks)))
        .catch(err => console.log(err))

}

if (args.length === 3 && ((posicionUno === "--stats" && args[2] === "--validate")
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




