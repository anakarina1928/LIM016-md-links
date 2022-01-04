const api = require('../src/api');
const userPath = './data/data-test.md';

describe('probando la funcion pathToAbsolute  para ver si la ruta es absoluta o relativa', () => {
  const result = api.pathToAbsolute(userPath)
  
  it('deberia negar la ruta ya que no es  absoluta', () => {
     
    expect(result).not.toBe(userPath);
  });
  it('deberia resolver la ruta si es relativa', () => {
    const result = api.pathToAbsolute(__dirname)
    
    expect(result).toBe(__dirname);
  });
 
});
describe('probando la funcion validPath para verificar si el archivo existe', () => {
  
  it('deberia validar si el archivo exite', () => {
    const result = api.validPath(userPath)
    
    expect(result).toBeTruthy()
  });
});


describe('probando la funcion readingLinks que lee los archivosy retorna un arreglo de objetos', () => {
  
  it('deberia regresar un arreglo de objetos', () => {
    const ObjectTest = [  {
      href: 'https://es.wikipedia.org/wiki/Markdown',
      text: 'Markdown',
      fileName:  userPath
    }]
    const result = api.readingLinks(userPath)
    expect(result).toStrictEqual(ObjectTest);
  });
})
    