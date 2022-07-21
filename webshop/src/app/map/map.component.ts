import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, AfterViewInit {
  private map: any;

  private initMap(): void {
    this.map = L.map('map', {
      center: [ 59.4370, 24.7447 ],
      zoom: 12
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);

    const marker = L.marker([59.4215, 24.7943]);
    marker.addTo(this.map);
    marker.bindPopup("Ülemiste keskus<br>Avatud 9-21");

    const marker2 = L.marker([59.4271, 24.7238]);
    marker2.addTo(this.map);
    marker2.bindPopup("Kristiine keskus<br>Avatud 8-20");
  }

  constructor() { } // constructor failide ühendamiseks: 
  //Router(navigeerimiseks), ActivatedRoute(URL parameetri leidmiseks)
  //HttpClient(Http päringute tegemiseks), TranslateService(keele vahetuseks)
  // (kõik tulevad node_modules kausta seest - valmiskirjutatud koodilõigud)

  ngOnInit(): void { // käimaminemise funktsioon -> läheb käima vahetult ENNE HTMLi
  }

  // lifecycle function
  ngAfterViewInit(): void { // käimaminemise funktsioon -> läheb käima vahetult PÄRAST HTMLi
    this.initMap();
  } 

  onZoom() {
    this.map.setView(L.latLng([59.4370, 24.7447]), 12);
  }

  onZoomYl() {
    this.map.setView(L.latLng([59.4215, 24.7943]), 13);
  }

  onZoomKr() {
    this.map.setView(L.latLng([59.4271, 24.7238]), 13);
  }

}
