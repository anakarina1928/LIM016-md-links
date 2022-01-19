const chalk = require('chalk');

const arrangemenTemplate = (arrayLinks) => {
    console.log(
        chalk.blue.bold(  `
    ╭─────────────────────❀
    │  LINKS ENCONTRADOS 
    ╰─────────────────────❀`));
    arrayLinks.forEach(link => {
        console.log(

            ` ▷ href:  ${link.href}  
              ▷ text:  ${link.text}  
              ▷ fileName: ${link.fileName}
                       `)
    })

}
const statusTemplate = (arrayLinks) => {

    console.log(
        `
        ╭─────────────────────❀
        │  STATUS DE LINKS 
        ╰─────────────────────❀`);
    arrayLinks.forEach(link => {
        console.log(`\t\t▷ status:  ${link.status}  \n\t\t▷ fail:  ${link.fail}  `);
    })
}

const totalLinks = (arraylinks) => {

    const totalArray = arraylinks.map(link => link.href);
    const uniqueLinks = [...new Set(totalArray)];
    const brokenLinks = arraylinks.filter(link => link.status != 200)
    return `
        ╭─────────────────────❀
        │     STATS:
        ╰─────────────────────❀
        ▷ total de links:${totalArray.length}
        ▷ links unicos:${uniqueLinks.length} 
        ▷ links rotos:${brokenLinks.length} 
        
        `;
};


module.exports = {
    arrangemenTemplate,
    statusTemplate,
    totalLinks
}