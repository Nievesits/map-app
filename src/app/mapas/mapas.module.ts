import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import mapboxgl from 'mapbox-gl';
(mapboxgl as any).accessToken = 'pk.eyJ1IjoibmlldmVzaXRhcyIsImEiOiJjbHc3ZmtvdjAwMzBnMnBudGhpYjNieXE0In0.ld8deKxMpKpE_3v4xaVGQQ';

import { MapasRoutingModule } from './mapas-routing.module';
import { MiniMapsComponent } from './components/mini-maps/mini-maps.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { MapsLayoutComponent } from './layout/maps-layout/maps-layout.component';
import { FullScreenPageComponent } from './pages/full-screen-page/full-screen-page.component';
import { MarkersPageComponent } from './pages/markers-page/markers-page.component';
import { PropertysPageComponent } from './pages/propertys-page/propertys-page.component';
import { ZoomRangePageComponent } from './pages/zoom-range-page/zoom-range-page.component';


@NgModule({
  declarations: [
    MiniMapsComponent,
    SideMenuComponent,
    MapsLayoutComponent,
    FullScreenPageComponent,
    MarkersPageComponent,
    PropertysPageComponent,
    ZoomRangePageComponent,
  ],
  imports: [
    CommonModule,
    MapasRoutingModule
  ]
})
export class MapasModule { }
