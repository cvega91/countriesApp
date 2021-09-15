import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { Country } from '../../interfaces/country.interface';

import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-view-country',
  templateUrl: './view-country.component.html'
})
export class ViewCountryComponent implements OnInit {

  country!: Country;

  constructor(private activatedRoute: ActivatedRoute,
    private countryService: CountryService) { }

  ngOnInit(): void {

    this.activatedRoute.params
    .pipe( 
      switchMap( (param) => this.countryService.searchByAlpha(param.id)),
      tap(console.log)
      
      )
    .subscribe( resp => {
      this.country = resp;
    
    })

    // this.activatedRoute.params.subscribe( ({id}) => {

    //     this.countryService.searchByAlpha(id).subscribe( item =>{

    //   })
    // })

  }

}
