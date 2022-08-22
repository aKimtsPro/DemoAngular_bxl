import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  constructor() { }


  private _randomTest:number = Math.floor(Math.random() * 1026)
  randomTestBaba = Math.floor(Math.random() * 1026) // Type Var, il va déduire le type de la variable
  currentDate: Date = new Date();



  get randomTest(): number {
    // this.fontStyle = this._typeFontStyle[Math.floor(Math.random()) > 0.5 ? 1:0]
    return this._randomTest;
  }

  set randomTest(value: number) {
    this._randomTest = value;
    this.pathImage = "https://picsum.photos/id/"+value+"/200/300"
  }

  pathImage: string = "https://picsum.photos/id/"+this.randomTest+"/200/300"

  dataCards: {          // creation d'un object
    title: string,
    description: string
  } = {  // instantiation de l'object
    title: "Valkiry Invasion",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aspernatur assumenda, cum et quibusdam sequi veritatis! Cum dicta, ducimus eligendi error fuga illum ipsa, iure laudantium molestias quam reiciendis velit."
  }
  fontStyle: any;

  tableau = [0,1,2,3,4,5,6,7,8,9];



  ngOnInit(): void {
  }

  showAlert(): void {
    alert('BOUM')
  }

}
