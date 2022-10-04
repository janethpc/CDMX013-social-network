// importamos la funcion que vamos a testear
import { myFunction } from '../src/lib/index';

describe('myFunction', () => {
  it('debería ser una función', () => {
    expect(typeof myFunction).toBe('function');
  });
});
import { filterHousesFunction, filterGenderFunction, filterSpellsFunction, sortAtoZFunction, sortZtoAFunction } from '../src/data.js';
import datos from "./data.js";

describe('filterHousesFunction', () => {
  it('is a function', () => {
    expect(typeof filterHousesFunction).toBe('function');
  });