import { Component , ViewChild, ElementRef} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MyServiceService } from 'src/app/my-service.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent {
  data:any
  constructor( private location: Location,private MyService: MyServiceService,private http: HttpClient,private router: Router) {
    this.getData()
   }
 
  // nameFilter = new FormControl('');
  // names: string[] = [];
  // filteredNames: string[] = [];

  // constructor(private dataService: MyServiceService) {
  //   this.names = this.dataService.getNames();
  //   this.filteredNames = this.names;

  //   this.nameFilter.valueChanges.subscribe((value) => {
  //     this.filteredNames = this.filterNames(value);
  //   });
  // }

  // private filterNames(value: string| null): string[] {
  //   const filterValue = (value || '').toLowerCase();
  //   return this.names.filter(
  //     (name) =>
  //       name.toLowerCase().includes(filterValue) ||
  //       filterValue.includes(name.toLowerCase())
  //   );
  // }
  myControl = new FormControl('');
  options: string[] = [];
  filteredOptions!: Observable<string[]>;

  ngOnInit() {
   
  //   this.filteredOptions = this.myControl.valueChanges.pipe(
  //     startWith(''),
  //     map(value => this._filter(value || '')),
  //   );
  // }

  // private _filter(value: string): string[] {
  //   const filterValue = value.toLowerCase();

  //   return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  getData() {
    this.MyService.get('users')
      .subscribe(response => {
        // Handle the response data here
        this.data=response.data
        for (const userObj of this.data) {
          this.options.push(userObj.name)
        }
       
        console.log(this.options);
      });
      this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value || '')),
      );
    }
  
    private _filter(value: string): string[] {
      const filterValue = value.toLowerCase();
  
      return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  onOptionSelected(event: any): void {
    // Access the selected value using event.option.value
    const selectedOption = event.option.value;
    // Call your logging function or perform any other action here
    this.logSelectedOption(selectedOption);
  }

  logSelectedOption(selectedOption: string): void {
    // Log the selected option to the console
    console.log(`Selected option: ${selectedOption}`);
  }
}
