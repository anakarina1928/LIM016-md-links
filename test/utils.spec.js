const utils = require('../src/utils');
const userPath = './data/data-test.md';

const ejemplo =  [

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
describe('probando la funcion totalLinks, indica cuantos total de links, links unicos y links rotos ', () => {
   
    const result = utils.totalLinks(ejemplo)
  

  
  });