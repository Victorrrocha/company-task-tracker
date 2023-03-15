import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Quote, QuotesService } from 'src/app/shared/services/quotes.service';

@Component({
  selector: 'app-unselected-page',
  templateUrl: './unselected-page.component.html',
  styleUrls: ['./unselected-page.component.scss']
})
export class UnselectedPageComponent implements OnInit {
  // quote?: Quote;
  quote$?: Observable<Quote>;
  constructor(private activatedRoute: ActivatedRoute, private quotesService: QuotesService) {}  

  ngOnInit(): void {
    this.quote$ = this.quotesService.getQuote();
    // this.activatedRoute.data.subscribe(({quote}) => {
    //   this.quote = quote;
    // })
  }
}
