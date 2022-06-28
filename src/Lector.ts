import { ILectorDeTarjeta } from "./Interfaces";

class Lector extends ILectorDeTarjeta{
    recibirTarjeta(): void {
      this.estacionamiento.verificarCodigoTarjeta("123", this)
    }
    devolverTarjeta(): void {
     
    }
    mostrarMensajeError(): void {
       
    }
    mostrarMensajeExito(): void {
        
    }
}

export default Lector;