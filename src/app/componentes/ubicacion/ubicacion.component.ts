import { AuthService } from './../../servicios/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.component.html',
  styleUrls: ['./ubicacion.component.css']
})
export class UbicacionComponent implements OnInit {

  constructor(public auth:AuthService) { }

  ngOnInit() {
  }

}
