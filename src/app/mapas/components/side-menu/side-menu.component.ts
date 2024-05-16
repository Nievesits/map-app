import { Component } from '@angular/core';

interface MenuItem {
  route: string;
  name: string;
}

@Component({
  selector: 'mapas-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css'
})
export class SideMenuComponent {
public menuItems: MenuItem[]= [
  {route: '/mapas/fullscreen', name: 'FullScreen' },
  {route: '/mapas/zoom-range', name: 'ZoomRange' },
  {route: '/mapas/markers', name: 'Marcadores' },
  {route: '/mapas/property', name: 'Monumentos' },


]
}
