import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehiculosComponent } from './vehiculos.component';
import { ListarVehiculoComponent } from './listarVehiculo/listarVehiculo.component';

@NgModule({
  imports: [CommonModule],
  declarations: [VehiculosComponent, ListarVehiculoComponent],
  exports: [VehiculosComponent],
})
export class VehiculosModule {}
