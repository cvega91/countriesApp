import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

// import {} from '';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styles: [
  ]
})
export class CountryInputComponent implements OnInit{

 
@Output() onEnter: EventEmitter<string> = new EventEmitter();
 
@Output() onDebounce: EventEmitter<string> = new EventEmitter();

@Input() placeholder: string;

  debouncer: Subject<string>= new Subject();

  param: string="";

   
  ngOnInit() {
      this.debouncer
      .pipe( debounceTime(450))
      .subscribe( item =>{
        this.onDebounce.emit(item);
      });
  }



  find(){
   this.onEnter.emit(this.param);
   
  }

  keyPressed(event: any){
    this.debouncer.next(this.param);
    // let value= event.target.value;
    // console.log(value);
    // console.log(this.param);
    
  }
}


