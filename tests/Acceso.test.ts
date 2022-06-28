import Acceso from "../src/Acceso";
import { IAcceso } from "../src/interfaces";

const acceso: IAcceso = new Acceso();

afterEach(() => {
  jest.clearAllMocks();
});

test("Deberia existir una clase Acceso que implemente IAcceso", () => {
  expect(acceso).toBeDefined();
});

test("Deberia ejecutarse el metodo grabarUltimoAcceso sin problemas", () => {
  expect(() => acceso.grabarUltimoAcceso("123455")).not.toThrow();
});
