import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {

  public studentname='';
  public email='';
  public mobile='';
  public coursename='';
  public trainername='';
  public courseduration=0;
  public fees=0;
  public paidfees=0;
  public index=0;
  public views=['StudentReg','CourseView','FeesView'];
  public bal=0;
  public balance(){
    this.bal= this.fees - this.paidfees;
  }
   
  public name='';
  public mail='';
  public mob='';
  public cname='';
  public tname='';
  public dur=0;
  public fee=0;
  public pay=0;
  
  public summary=false;
  public selectedView='StudentReg';
  public chooseview(obj){
    this.selectedView=obj.target.value;
  };
 
  public ShowCart(event){
    this.summary=(this.summary==false)?true:false;
      
    
    


    
  }

  
 
  public Next(){
    this.index++;
    this.selectedView =this.views[this.index];
  }

  public Previous(){
    this.index--;
    this.selectedView =this.views[this.index];

  }
  public Print(){
    window.print();
  }
}
