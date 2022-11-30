import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent implements OnInit {

  @Input() data:any = {};
  @Output() item = new EventEmitter();
  addButton:boolean = false;
  amount:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  add(){
    this.item.emit({item:this.data, quantity:this.amount});
  }
}
