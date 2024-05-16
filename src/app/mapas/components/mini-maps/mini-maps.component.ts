import { Component, AfterViewInit, Input, ViewChild, ElementRef } from '@angular/core';
import {  Map, Marker } from 'mapbox-gl';




@Component({
  selector: 'map-mini-maps',
  templateUrl: './mini-maps.component.html',
  styleUrl: './mini-maps.component.css'
})
export class MiniMapsComponent implements AfterViewInit {

 @Input() lngLat?: [number, number];
 @ViewChild('map') divMap?: ElementRef;

 public map?: Map;


 ngAfterViewInit(){
  if(!this.divMap?.nativeElement) throw "Map Div not found"
  if(!this.lngLat) throw "LngLat can't be null"

  const map = new Map({
    container: this.divMap.nativeElement, // container ID
    style: 'mapbox://styles/mapbox/streets-v12?', // style URL
    center: this.lngLat, // starting position [lng, lat]
    zoom: 14, // starting zoom
    interactive: false, //para no mover las imágenes
  });

//marker

new Marker()
.setLngLat(this.lngLat)
.addTo( map )

 }
}
