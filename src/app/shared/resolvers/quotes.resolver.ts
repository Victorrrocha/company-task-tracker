import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { QuotesService } from "../services/quotes.service";

@Injectable({
    providedIn: 'root'
})
export class QuotesResolver {
    constructor(private quotesService: QuotesService) {}

    resolve(): Observable<any> {
        return this.quotesService.getQuote();
    }
}