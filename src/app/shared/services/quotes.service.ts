import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";

export interface Quote {
    quote: string,
    author: string,
    category: string
}

@Injectable({
    providedIn: 'root'
})
export class QuotesService {
    endpoint = 'https://api.api-ninjas.com/v1/quotes?category=inspirational';
    constructor(private http: HttpClient) {}

    getQuote(): Observable<Quote> {
        return this.http
        .get<Quote[]>(this.endpoint, { headers: {'X-Api-Key' : 'b3bImX0DGPfxoitMCdzqcw==f60odVvkEIx4FNy0'}})
        .pipe(map(quotes => quotes[0]));
    }
}