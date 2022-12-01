"use strict";(self.webpackChunkAngular_Task=self.webpackChunkAngular_Task||[]).push([[122],{5122:(x,u,a)=>{a.r(u),a.d(u,{ProductModule:()=>P});var p=a(6895),g=a(9965),r=a(433),t=a(8256),b=a(1547),l=a(4333);function _(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._UZ(4,"img",30),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td")(12,"button",31),t.NdJ("click",function(){const c=t.CHM(e).$implicit,s=t.oxw();return t.KtG(s.updateProduct(c))}),t._uU(13,"Edit"),t.qZA(),t.TgZ(14,"div",32)(15,"div",8)(16,"div",9)(17,"div",10)(18,"h1",33),t._uU(19,"Update Product "),t.qZA(),t._UZ(20,"button",12),t.qZA(),t.TgZ(21,"div",13)(22,"form")(23,"label",34),t._uU(24,"Name"),t.qZA(),t.TgZ(25,"input",35),t.NdJ("ngModelChange",function(d){const s=t.CHM(e).$implicit;return t.KtG(s.title=d)}),t.qZA(),t.TgZ(26,"label",34),t._uU(27,"Price"),t.qZA(),t.TgZ(28,"input",36),t.NdJ("ngModelChange",function(d){const s=t.CHM(e).$implicit;return t.KtG(s.price=d)}),t.qZA()()(),t.TgZ(29,"div",24)(30,"button",25),t._uU(31,"Close"),t.qZA(),t.TgZ(32,"button",37),t.NdJ("click",function(){t.CHM(e);const d=t.oxw();return t.KtG(d.success())}),t._uU(33,"Update"),t.qZA()()()()()(),t.TgZ(34,"td")(35,"button",38),t.NdJ("click",function(){const c=t.CHM(e).$implicit,s=t.oxw();return t.KtG(s.deleteProduct(c))}),t._uU(36,"Delete"),t.qZA()()()}if(2&o){const e=i.$implicit;t.xp6(2),t.Oqu(e.id),t.xp6(2),t.s9C("src",e.thumbnail,t.LSH),t.xp6(2),t.Oqu(e.title),t.xp6(2),t.Oqu(e.brand),t.xp6(2),t.hij("",e.price," $"),t.xp6(15),t.Q6J("ngModel",e.title),t.xp6(3),t.Q6J("ngModel",e.price)}}const Z=function(o){return{itemsPerPage:9,currentPage:o}};let m=(()=>{class o{constructor(e,n){this._ProductsService=e,this._FormBuilder=n,this.data={},this.total=0,this.products=[],this.p=1}ngOnInit(){this.form=this._FormBuilder.group({title:["",[r.kI.required]],brand:["",[r.kI.required]],price:["",[r.kI.required]],image:["",[r.kI.required]]}),this.getAllProducts()}getAllProducts(){this._ProductsService.getProducts().subscribe({next:e=>{this.products=e.products},error:e=>{alert(e.message)}})}addproduct(){this._ProductsService.addProduct(this.form.value).subscribe({next:()=>{this.form.reset(),alert("Added Successfully")}})}updateProduct(e){this._ProductsService.updateProduct(e.id,e).subscribe({next:()=>{this.success()},error:n=>{console.log(n)}})}deleteProduct(e){this._ProductsService.deleteProduct(e.id).subscribe({next:()=>{alert("product( "+e.title+" )deleted !")}})}success(){alert("updated success!")}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(b.s),t.Y36(r.qu))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-product"]],decls:60,vars:9,consts:[[1,"container"],[1,"cartBox"],[1,"tex-danger"],[1,"headCart"],[1,"lead"],[1,"text-info"],["data-bs-toggle","modal","data-bs-target","#staticBackdrop2",1,"btn","btn-success"],["id","staticBackdrop2","data-bs-backdrop","static","data-bs-keyboard","false","tabindex","-1","aria-labelledby","staticBackdropLabel","aria-hidden","true",1,"modal","fade"],[1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],["id","staticBackdropLabel",1,"modal-title","text-dark","fs-5"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"btn-close"],[1,"modal-body"],[1,"row","g-3","text-dark",3,"formGroup"],[1,"col-md-6"],["for","",1,"form-label","text-dark"],["type","text","formControlName","title","id","title",1,"form-control"],["for","",1,"form-label"],["type","text","formControlName","brand","id","brand",1,"form-control"],[1,"col-md-4"],["type","number","formControlName","price","id","price",1,"form-control"],[1,"col-md-8"],["type","file","formControlName","image","id","image",1,"form-control"],[1,"modal-footer"],["type","button","data-bs-dismiss","modal",1,"btn","btn-secondary"],["type","button",1,"btn","btn-primary",3,"disabled","click"],[1,"table","table-striped"],[4,"ngFor","ngForOf"],[1,"text-center","my-5",3,"pageChange"],["alt","",3,"src"],["data-bs-toggle","modal","data-bs-target","#staticBackdrop",1,"btn","btn-info","mx-3",3,"click"],["id","staticBackdrop","data-bs-backdrop","static","data-bs-keyboard","false","tabindex","-1","aria-labelledby","staticBackdropLabel","aria-hidden","true",1,"modal","fade"],["id","staticBackdropLabel2",1,"modal-title","text-dark","fs-5"],["for","",1,"text-dark"],["placeholder","","name","name",1,"form-control","my-2",3,"ngModel","ngModelChange"],["placeholder","","name","price",1,"form-control","my-2",3,"ngModel","ngModelChange"],["type","button","data-bs-dismiss","modal",1,"btn","btn-primary",3,"click"],[1,"btn","btn-danger",3,"click"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h1",2),t._uU(3,"Products"),t.qZA(),t.TgZ(4,"div",3)(5,"p",4),t._uU(6,"we have "),t.TgZ(7,"label",5),t._uU(8),t.qZA(),t._uU(9," product"),t.qZA(),t.TgZ(10,"button",6),t._uU(11,"Add"),t.qZA(),t.TgZ(12,"div",7)(13,"div",8)(14,"div",9)(15,"div",10)(16,"h1",11),t._uU(17,"Add Product"),t.qZA(),t._UZ(18,"button",12),t.qZA(),t.TgZ(19,"div",13)(20,"form",14)(21,"div",15)(22,"label",16),t._uU(23,"Title"),t.qZA(),t._UZ(24,"input",17),t.qZA(),t.TgZ(25,"div",15)(26,"label",18),t._uU(27,"Brand"),t.qZA(),t._UZ(28,"input",19),t.qZA(),t.TgZ(29,"div",20)(30,"label",18),t._uU(31,"Price"),t.qZA(),t._UZ(32,"input",21),t.qZA(),t.TgZ(33,"div",22)(34,"label",18),t._uU(35,"Image"),t.qZA(),t._UZ(36,"input",23),t.qZA()()(),t.TgZ(37,"div",24)(38,"button",25),t._uU(39,"Close"),t.qZA(),t.TgZ(40,"button",26),t.NdJ("click",function(){return n.addproduct()}),t._uU(41,"Add"),t.qZA()()()()()(),t.TgZ(42,"table",27)(43,"thead")(44,"tr")(45,"th"),t._uU(46,"id"),t.qZA(),t.TgZ(47,"th"),t._uU(48,"image"),t.qZA(),t.TgZ(49,"th"),t._uU(50,"Name"),t.qZA(),t.TgZ(51,"th"),t._uU(52,"brand"),t.qZA(),t.TgZ(53,"th"),t._uU(54,"price"),t.qZA(),t._UZ(55,"th"),t.qZA()(),t.TgZ(56,"tbody"),t.YNc(57,_,37,7,"tr",28),t.ALo(58,"paginate"),t.qZA()(),t.TgZ(59,"pagination-controls",29),t.NdJ("pageChange",function(c){return n.p=c}),t.qZA()()()),2&e&&(t.xp6(8),t.Oqu(n.products.length),t.xp6(12),t.Q6J("formGroup",n.form),t.xp6(20),t.Q6J("disabled",!n.form.valid),t.xp6(17),t.Q6J("ngForOf",t.xi3(58,4,n.products,t.VKq(7,Z,n.p))))},dependencies:[p.sg,l.LS,r._Y,r.Fj,r.wV,r.JJ,r.JL,r.sg,r.u,r.On,r.F,l._s],styles:[".cartBox[_ngcontent-%COMP%]{border:1px solid #ddd;border-radius:5px;-webkit-border-radius:5px;-moz-border-radius:5px;-ms-border-radius:5px;-o-border-radius:5px;padding:0 20px;margin:50px 0}.cartBox[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]{border-top:1px solid #c61d21;border-bottom:1px solid #c61d21}.cartBox[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-bottom:0;vertical-align:middle;color:#fff}.cartBox[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:80px;height:80px;border-radius:50%;-webkit-border-radius:50%;-moz-border-radius:50%;-ms-border-radius:50%;-o-border-radius:50%}.cartBox[_ngcontent-%COMP%]   .headCart[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.cartBox[_ngcontent-%COMP%]   .headCart[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:16px;padding:10px;cursor:pointer;transition:all .3s ease-in-out;-webkit-transition:all .3s ease-in-out;-moz-transition:all .3s ease-in-out;-ms-transition:all .3s ease-in-out;-o-transition:all .3s ease-in-out}.cartBox[_ngcontent-%COMP%]   .headCart[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover{background-color:#e67779;color:#fff!important;box-shadow:0 5px 10px #ffffff4d}"]}),o})();const f=[{path:"",component:m},{path:"dashboard",component:m}];let C=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[g.Bz.forChild(f),g.Bz]}),o})(),P=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[p.ez,C,l.JX,r.UX,r.u5]}),o})()}}]);