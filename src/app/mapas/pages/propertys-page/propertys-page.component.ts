import { Component } from '@angular/core';

interface House {
  title: string;
  description: string;
  lngLat: [number, number];
}

@Component({
  selector: 'app-propertys-page',
  templateUrl: './propertys-page.component.html',
  styleUrl: './propertys-page.component.css'
})
export class PropertysPageComponent {

  public houses: House[] = [
    {
      title: 'Castillo de Gibralfaro, Málaga',
      description: 'Fortaleza de Gibralfaro, domina la ciudad de Málaga',
      lngLat: [ -4.409157069982939, 36.721969707235885]
    },
    {
      title: 'Alhambra de Granada, Granada',
      description: 'Complejo monumental, antiguos palacios, jardines y fortalezas, situado en Granada',
      lngLat: [  -3.5869504523300293, 37.17212586134363]
    },
    {
      title: 'Plaza de España, Sevilla',
      description: 'Conjunto arquitectónico enclavado en el parque de María Luisa, Sevilla',
      lngLat: [ -5.986138144324059, 37.375393919926964 ]
    },
    {
      title: 'Mezquita de Córdoba, Córdoba',
      description: 'Iglesia Católica construida sobre una antigua Mezquita, Patrimonio de la Humanidad, Córdoba',
      lngLat: [ -4.782440490136651, 37.87587683777035 ]
    },
  ]
}
