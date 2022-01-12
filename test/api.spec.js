const api = require('../src/api');
const userPath = './data/data-test.md';


describe('probando la funcion pathToAbsolute  para ver si la ruta es absoluta o relativa', () => {
  const result = api.pathToAbsolute(userPath)

  it('deberia negar la ruta ya que no es  absoluta', () => {

    expect(result).not.toStrictEqual(userPath);
  });
  it('deberia resolver la ruta si es relativa', () => {
    const result = api.pathToAbsolute(__dirname)

    expect(result).toStrictEqual(__dirname);
  });

});
describe('probando la funcion validPath para verificar si el archivo existe', () => {

  it('deberia validar si el archivo exite', () => {
    const result = api.validPath(userPath)

    expect(result).toBeTruthy()
  });
});

describe('probando la funcion isDirectory para verificar si el archivo o una carpeta', () => {

  it('deberia retornar true ya que si es una carpeta', () => {
    const result = api.isDirectory('/data')

    expect(result).toBeTruthy()
  });


});

describe('probando la funcion isMdFile que verifica si los archivos son md', () => {

  it('deberia retornar true ya que es un archivo .md', () => {
    const result = api.isMdFile('/data-test.md')

    expect(result).toBeTruthy()
  });
});


describe('probando la funcion  browseFile verifica si la ruta es un directorio, analiza el contenido y devuelve solo los archivos en un arreglo', () => {


  it('deberia indicart cuantos archivos hay', () => {
    const result = api.browseFile(api.pathToAbsolute('./data'), [])

    expect(result).toHaveLength(3);

  });


});



describe('probando la funcion readingLinks que lee los archivos y retorna un arreglo de objetos', () => {

  it('deberia regresar un arreglo de objetos', () => {
    const ObjectTest = [{
      href: 'https://es.wikipedia.org/wiki/Markdown',
      text: 'Markdown',
      fileName: userPath
    }]
    const result = api.readingLinks(userPath)
    expect(result).toStrictEqual(ObjectTest);
  });

  it('deberia retornar null ya que no existe ningun archivo', () => {
    const result = api.readingLinks('./data/test/ana.txt')

    expect(result).toStrictEqual([])
  });
});
