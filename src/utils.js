const chalk = require('chalk');

const arrangemenTemplate = (arrayLinks) => {
    console.log(
        chalk.magenta.bold(`
    ╭─────────────────────❀
    │  LINKS ENCONTRADOS 
    ╰─────────────────────❀`));
    arrayLinks.forEach(link => {
        console.log(chalk.yellowBright.bold(` \t\t▷ href:  ${link.href}   \n\t\t▷ text:  ${link.text} \n\t\t▷ fileName: ${link.fileName} \n ❀`));
    })

}
const statusTemplate = (arrayLinks) => {

    console.log(
        chalk.magenta.bold(`
        ╭─────────────────────❀
        │  STATUS DE LINKS 
        ╰─────────────────────❀`));
    arrayLinks.forEach(link => {

        if (link.status === 200) {
            console.log(chalk.yellowBright.bold(`\t\t▷ href:  ${link.href} \n\t\t▷ status:  ${link.status} \n\t\t▷ ok:  ${link.ok}  \n `));
        } else {

            console.log(chalk.yellowBright.bold(`\t\t▷ href:  ${link.href} \n\t\t▷ status:  ${link.status}  \n\t\t▷ fail:  ${link.fail} \n\t\t ❀ \n`));
        }

    })
}

const totalLinks = (arraylinks) => {

    const totalArray = arraylinks.map(link => link.href);
    const uniqueLinks = [...new Set(totalArray)];
    const brokenLinks = arraylinks.filter(link => link.status != 200)

    return `
    ${chalk.magenta.bold(

        `
         ╭─────────────────────❀
         │     STATS:
         ╰─────────────────────❀`)}
   ${chalk.yellowBright.bold(`\t\t▷ total de links:${totalArray.length} \n\t\t▷ links unicos:${uniqueLinks.length}\n\t\t▷ links rotos:${brokenLinks.length} ❀ `)}
      `
};


module.exports = {
    arrangemenTemplate,
    statusTemplate,
    totalLinks
}