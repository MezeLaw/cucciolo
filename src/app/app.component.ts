import { AuthService } from './servicios/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'cucciolo';

  constructor(private auth:AuthService){

  }

  ngOnInit(){
    this.auth.getUser$;
  }

}
