import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-galery',
  templateUrl: './galery.component.html',
  styleUrls: ['./galery.component.css']
})
export class GaleryComponent implements OnInit {

  constructor(private router: Router){}
  
  irAPagina(): void{
   this.router.navigate(['Divergente']);
  }
  ngOnInit() {
  }

}
