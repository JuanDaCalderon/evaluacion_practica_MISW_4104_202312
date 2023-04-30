/* tslint:disable:no-unused-variable */
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ListarVehiculoComponent } from './listarVehiculo.component';
import { HttpClientModule } from '@angular/common/http';

import { Vehiculo } from 'src/app/models/vehiculo';

describe('ListarVehiculoComponent', () => {
  let component: ListarVehiculoComponent;
  let fixture: ComponentFixture<ListarVehiculoComponent>;
  let debug: DebugElement;
  let vehiculos: Vehiculo[] = [];

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ListarVehiculoComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarVehiculoComponent);
    component = fixture.componentInstance;
    const marcas: string[] = ['Renault', 'Chevrolet', 'Nissan'];
    const linea: string[] = ['linea 1', 'linea 2', 'linea 3'];
    const lireferencianea: string[] = [
      'referencia 1',
      'referencia 2',
      'referencia 3',
    ];
    const modelo: number[] = [2020, 2018, 2016];
    const kilometraje: number[] = [25629, 31298, 37827];
    const color: string[] = ['rojo', 'azul', 'negro'];
    const imagen: string[] = [
      'https://secure-developments.com/commonwealth/uruguay/gm_forms/assets/front/images/jellys/60d4d4bc255a1.png',
      'https://secure-developments.com/commonwealth/uruguay/gm_forms/assets/front/images/jellys/60d4d4bc255a1.png',
      'https://secure-developments.com/commonwealth/uruguay/gm_forms/assets/front/images/jellys/60d4d4bc255a1.png',
    ];
    vehiculos = [];
    for (let i = 1; i <= 3; i++) {
      const randomIndex: number = Math.floor(Math.random() * 3);
      const vehiculo: Vehiculo = new Vehiculo(
        i,
        marcas[randomIndex],
        linea[randomIndex],
        lireferencianea[randomIndex],
        modelo[randomIndex],
        kilometraje[randomIndex],
        color[randomIndex],
        imagen[randomIndex]
      );
      vehiculos.push(vehiculo);
    }
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should create the table head row', () => {
    component.vehiculos = vehiculos;
    component.numeroMarcas = component.getNumeroMarcas(vehiculos);
    fixture.detectChanges();
    debug = fixture.debugElement;
    expect(debug.queryAll(By.css('thead'))).toHaveSize(1);
  });

  it('should create 3 rows of vehicules', () => {
    component.vehiculos = vehiculos;
    component.numeroMarcas = component.getNumeroMarcas(vehiculos);
    fixture.detectChanges();
    debug = fixture.debugElement;
    expect(debug.queryAll(By.css('tr.tableRowVehiculo'))).toHaveSize(3);
  });
});
