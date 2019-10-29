import { Component } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent{

  upVotes: number = 0;
  downVotes: number = 0;

  quotes = [
    new Quote(1, "Mart Damon", "Life is what happens when your busy making plans", "18/2/1990"),
    new Quote(2, "Mark Lawrence", "Friends show their love in times of trouble not in happiness", "14/8/1990"),
    new Quote(3, "Damien Marley", "Put your heart ,mind and soul into even your smallest acts.This is the secret of success", "12/8/1890"),
  ]
  upVote() {
    let here = confirm(`should you upvote`)
    if (here) {
       this.upVotes += 1;
    }
  }

    downVote() {
      let now = confirm(`should you downvote`)
      if (now) {
        this.downVotes += 1;
      }
    }

    addNewQuote(Quote) {
      this.quotes.push(Quote)

    }

    quoteDelete(index){
      let toDelete = confirm(`Are you sure you want to delete this quote`)
      if (toDelete) {
        this.quotes.splice(index, 1)
      }
    }

  }
