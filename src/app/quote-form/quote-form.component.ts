import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Quotes} from '../items'
@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
public showQuote: boolean;

newQuote=new Quotes( 0,'','','');
@Output() addQuote=new EventEmitter<Quotes>();



submitQuote(){
  this.addQuote.emit(this.newQuote);
}


quoteInfo(){
  this.showQuote= !this.showQuote;
}


  constructor() {
  this.showQuote= false }

  ngOnInit() {
  }

}
