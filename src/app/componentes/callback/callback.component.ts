import { AuthService } from './../../servicios/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {

  constructor(private auth:AuthService) { }

  ngOnInit() { 
    this.auth.handleRedirectCallback$
  }

}
