import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProductsService } from '../products.service';


@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent implements OnInit {

  @Input() data:any = {};
  @Output() item = new EventEmitter();

  constructor(private _ProductsService:ProductsService) { }

  ngOnInit(): void {
  }

}
