import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lectorqrang';


  public myAngularxQrCode: string;
  constructor () {
    // assign a value
    this.myAngularxQrCode = '';
  }
}
