import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html'
})
export class ByCountryComponent  {

  param: string="";
  //error message
  isError: boolean = false;
  countries : Country []=[];

  //Search results
  

  constructor(private countryService: CountryService) {

   }


  find(event : string){
    this.isError=false;
    this.param = event;
    
    this.countryService.searchCountry(event)
    .subscribe( country =>{
      for (let i = 0; i < country.length; i++) {
        this.countries.unshift(country[i]);
      }
      console.log(country);

    }, err => {
      this.isError= true;
      this.countries=[];
    })

  }
  
  suggestions(event: any){
    this.isError=false;
    //todo: create suggestions
  }
 
}
