import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  aVerifier?: number;
  wrongNumber = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  verifyParity(){
    if( this.aVerifier !== undefined ){
      // this.router.navigateByUrl('/parite/'+this.aVerifier);
      this.router.navigate(['parite', this.aVerifier]);
    }
    else {
      this.wrongNumber = true;
    }
  }

}
