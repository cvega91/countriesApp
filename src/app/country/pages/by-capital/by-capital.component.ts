import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [
  ]
})
export class ByCapitalComponent  {


  @Input()
  countries : Country[]=[];

  param: string="";
  //error message
  isError: boolean = false;
 
  constructor(private countryService: CountryService) { }
  //encontrar
  find(event : string){
    this.isError=false;
    this.param = event;
    
    this.countryService.searchCapital(event)
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
  //suggestions

  

}
