#!/usr/bin/env node
const { totalLinks } = require("./stats.js");
const mdlinks = require("./index.js");
const [, , ...args] = process.argv;

if (args.length === 1) {

    mdlinks(args[0], { validate: false })
        .then(arrayLinks => arrayLinks.forEach(link => console.log(`${link.fileName} ${link.href} ${link.text} `)))
        .catch(err => console.log(err));
}
