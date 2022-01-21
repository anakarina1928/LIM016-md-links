const utils = require('../src/utils');
const userPath = './data/data-test.md';

const consoleSpy = jest.spyOn(console, 'log');

const ejemplo = [

    {

        href: 'https://nodejs.org/dist/latest-v17.x/docs/api/fs.html',
        text: 'a link',
        status: 200,
        message: 'OK'

    },

    {
        href: 'https://bitly.com/404-error-page',
        text: 'error',
        status: 404,
        message: 'FAIL'

    },

    {
        href: 'https://nodejs.org/dist/latest-v17.x/docs/api/fs.html#fsreadfilesyncpath-options',
        text: 'nodeJs',
        status: 200,
        message: 'OK'

    },

    {

        href: 'https://nodejs.org/dist/latest-v17.x/docs/api/fs.html#fsreadfilesyncpath-options',
        text: 'nodeJs',
        status: 200,
        message: 'OK'

    }

]
describe('probando la funcion totalLinks, indica total de links, links unicos y links rotos ', () => {
    
    const result = utils.totalLinks(ejemplo);
    it('deberia retornar si retorna el string indicado', () => {
        const container = `▷ total de links:4 `;
        expect(result.includes(container)).toBeTruthy()
    });

})

describe('probando la funcion arrangemenTemplate, indica los links encontrados ', () => {

    it('deberia indicar cuantos console log se imprimen', () => {

        utils.arrangemenTemplate(ejemplo);

        expect(console.log.mock.calls.length).toBe(5);
        consoleSpy.mockClear();

    });

})

describe('probando la funcion statusTemplate', () => {
    
    it('deberia espiar los console log', () => {

        utils.statusTemplate(ejemplo);

        expect(console.log.mock.calls.length).toBe(5);
        consoleSpy.mockClear();
    })
})


