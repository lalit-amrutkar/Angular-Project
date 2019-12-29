import { Component } from '@angular/core';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.css']
})
export class ShoppingComponent  {

public categories=['select Category','Electronics','Shoes'];
public electronics=['Salect Electronic Product','Samsung TV','Mobile'];
public shoes=['Select Shoe','Nike Shoes','Sparx Shoe'];
public selectCategory='';
public selectedProduct=[];
public selectProduct='';
public searchResult=[];
public prodName='';
public prodPrice=0;
public prodPhoto='';
public cartItem=[];
public cartItemCount=0
public isCardVisible=false;

public CategoryChanged(){
  switch(this.selectCategory){
    case 'Electronics': this.selectedProduct=this.electronics;
    break;

    case 'Shoes':this.selectedProduct= this.shoes;
    break;
  }
}

public productData=[
  {Name:'Samsung TV',Price:34567.00 , Photo:'assets/tv.jpg'},
  {Name:'Mobile',Price:34567.00 , Photo:'assets/mobile.jpg'},

  {Name:'Nike Shoes',Price:34567.00 , Photo:'assets/tv.jpg'},
  {Name:'Sparx Shoes',Price:34567.00 , Photo:'assets/tv.jpg'}


]
public ProductChanged(){
 this.searchResult= this.productData.filter(x=>x.Name==this.selectProduct);

 this.prodName=this.searchResult[0].Name;
 this.prodPrice=this.searchResult[0].Price;
 this.prodPhoto=this.searchResult[0].Photo;
}

public AddtoCart(){
  this.cartItem.push(this.searchResult[0]);
  this.cartItemCount=this.cartItem.length;
}
public DeleteClick(index){
  var status=confirm("Are you sure you want to Delete Item?");
  if(status==true){
    this.cartItem.splice(index,1);
    this.cartItemCount=this.cartItem.length;

  }
} 
public showCart(){
  this.isCardVisible=(this.isCardVisible==false)? true:false;
}
}

