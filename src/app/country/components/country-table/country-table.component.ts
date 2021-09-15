import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-country-table',
  templateUrl: './country-table.component.html',
  styleUrls: ['./country-table.component.css']
})
export class CountryTableComponent  {

  

  constructor(private countryService: CountryService) { }

  @Input()
  countries : Country[]=[];
  
  
}
