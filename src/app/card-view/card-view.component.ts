import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-card-view',
  templateUrl: './card-view.component.html',
  styleUrls: ['./card-view.component.css']
})
export class CardViewComponent implements OnInit {

  @Input() data:any = {};
  @Output() item = new EventEmitter();
  constructor(private _AuthService:AuthService) { }

  ngOnInit(): void {
  }

}
