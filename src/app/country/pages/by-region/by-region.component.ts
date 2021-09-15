import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html'
})
export class ByRegionComponent implements OnInit {
  param: string="";
  //error message
  isError: boolean = false;

  countries : Country []=[];

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
  }

  find(event : string){
    this.isError=false;
    this.param = event;
    
    this.countryService.searchRegion(event)
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

}
