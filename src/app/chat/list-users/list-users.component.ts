import { Component , ViewChild, ElementRef} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MyServiceService } from 'src/app/my-service.service';

import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent {

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
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions!: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}
