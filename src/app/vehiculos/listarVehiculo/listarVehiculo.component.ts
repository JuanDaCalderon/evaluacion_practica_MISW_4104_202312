import { Component, OnInit } from '@angular/core';
import { Vehiculo } from 'src/app/models/vehiculo';
import { VehiculosService } from 'src/app/services/vehiculos.service';

@Component({
  selector: 'app-listarVehiculo',
  templateUrl: './listarVehiculo.component.html',
  styleUrls: ['./listarVehiculo.component.scss'],
})
export class ListarVehiculoComponent implements OnInit {
  public vehiculos: Array<Vehiculo> = [];
  public numeroMarcas: any[] = [];
  constructor(private vehiculoService: VehiculosService) {
    this.vehiculoService.getVehiculos().subscribe((vehiculo) => {
      this.vehiculos = [...vehiculo];
      this.numeroMarcas = [...this.getNumeroMarcas(vehiculo)];
    });
  }

  ngOnInit() {}

  public getNumeroMarcas(vehiculos: Vehiculo[]): any[] {
    const marcasTotal: any = {};
    vehiculos
      .map((vehiculo) => vehiculo.marca)
      .forEach((marca) => {
        marcasTotal[marca] = !marcasTotal[marca]
          ? 1
          : (marcasTotal[marca] += 1);
      });
    const marcasArray: any[] = [];
    for (const marca in marcasTotal) {
      marcasArray.push({
        marca: marca,
        numero: marcasTotal[marca],
      });
    }
    return marcasArray;
  }
}
