import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Country } from '../interfaces/country.interface';


@Injectable({
  providedIn: 'root'
}) 
export class CountryService {

  private apiUrl: string ="https://restcountries.eu/rest/v2";



  constructor(private http: HttpClient) {

   }
   
   searchCountry(param: string): Observable<Country[]>{
     const url = `${this.apiUrl}/name/${param}`;

    return this.http.get<Country[]>(url);

    

    // .pipe(
    //   catchError(err => of(['Hello Word']))
    // );

   }
   searchCapital(param: string): Observable<Country[]>{
     //https://restcountries.eu/rest/v2/capital/{capital}
    const url = `${this.apiUrl}/capital/${param}`;
    return this.http.get<Country[]>(url);
   }

   searchRegion(param: string): Observable<Country[]>{
    const url = `${this.apiUrl}/region/${param}`;
    return this.http.get<Country[]>(url);
   }

   searchByAlpha(param: string): Observable<Country>{
    //https://restcountries.eu/rest/v2/capital/{capital}
   const url = `${this.apiUrl}/alpha/${param}`;
   return this.http.get<Country>(url);
  }

   



}
