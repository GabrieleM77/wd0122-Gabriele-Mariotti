import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  numbers:number[]= [1,2,3,4,50,60,70]


users:{name:string; lastName:string;}[] = [
  {
    name: 'john',
    lastName: 'Don'
  },{
    name: 'Marta',
    lastName: 'Bianchi'
  }]


}
