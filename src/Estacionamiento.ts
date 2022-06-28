import { IEstacionamiento, ILectorDeTarjeta } from "./Interfaces";

class Estacionamiento extends IEstacionamiento {
  verificarCodigoTarjeta(
    codigoTarjeta: string,
    lectorConTarjeta: ILectorDeTarjeta
  ): void {
    if (codigoTarjeta === "123") {
      this.acceso.grabarUltimoAcceso(codigoTarjeta);
    }

    if (codigoTarjeta === "456") {
      this.acceso.grabarUltimoAcceso(codigoTarjeta);
      this.barrera.elevar();
      lectorConTarjeta.mostrarMensajeExito();
    }

    if (codigoTarjeta === "789") {
      lectorConTarjeta.mostrarMensajeError();
    }
  }
}

export default Estacionamiento;
