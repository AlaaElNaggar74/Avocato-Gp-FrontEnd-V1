import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mydates',
  templateUrl: './mydates.component.html',
  styleUrls: ['./mydates.component.css'],
})
export class MydatesComponent {
  showForm = false;
  day = '';
  start = '';
  end = '';
  id = '';

  dateForm: FormGroup = new FormGroup({
    day: new FormControl(this.day, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(8),
    ]),
    start_from: new FormControl(this.start, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    end_to: new FormControl(this.end, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
  });

  editDate(formData: any) {}

  showFormFun(id: any, day: any, start: any, end: any) {
    this.showForm = !this.showForm;
    this.id = id;
    this.day = day;
    this.start = start;
    this.end = end;
  }
  closeWindow() {
    this.showForm = !this.showForm;
  }
}
