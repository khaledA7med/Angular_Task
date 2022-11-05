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

  deleteProduct(data:any){
    this._ProductsService.deleteProduct(data.id).subscribe({
      next: ()=>{
        alert('product'+ '( ' + data.title + ' )' +'deleted !');
      }
    })
  }

  updateProduct(data:any){
    this._ProductsService.updateProduct(data.id, data ).subscribe({
      next:()=>{
        this.success();
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
  success(){
    alert('updated success!')
  }

}
