import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-accodion-component',
  templateUrl: './accodion-component.component.html',
  styleUrls: ['./accodion-component.component.css']
})
export class AccodionComponentComponent implements OnInit {

  @Input()
  isPanelHidden:true;
  @Input()
  title:string;
  @Input()
  empId:number;
  @Input()
  hasJustViewed:boolean

  
  constructor() { }

  ngOnInit() {
  }

}
