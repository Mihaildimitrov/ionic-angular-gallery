import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-program',
  templateUrl: './program.component.html',
  styleUrls: ['./program.component.scss'],
})
export class ProgramComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  public mapsSelector(lat: any, long: any) {
    if /* if we're on iOS, open in Apple Maps */
      ((navigator.platform.indexOf("iPhone") != -1) ||
      (navigator.platform.indexOf("iPad") != -1) ||
      (navigator.platform.indexOf("iPod") != -1))
      window.open("maps://maps.google.com/maps?daddr=" + lat + "," + long + "&amp;ll=");
    else /* else use Google */
      window.open("https://maps.google.com/maps?daddr=" + lat + "," + long + "&amp;ll=");
  }

}
