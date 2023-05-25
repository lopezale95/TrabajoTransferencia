import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-component-principal',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'peliculas';

  constructor(private router: Router){}
  
irAPagina(): void{
 this.router.navigate(['Divergente']);
}

}
