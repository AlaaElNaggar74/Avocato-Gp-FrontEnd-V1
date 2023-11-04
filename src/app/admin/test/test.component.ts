import { Component , inject} from '@angular/core';
import { MyServiceService } from 'src/app/my-service.service';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  data!:any
  constructor(private MyService: MyServiceService) { }
  ngOnInit() {
    this.getData();
  }
  getData() {
    this.MyService.get('cities')
      .subscribe(response => {
        // Handle the response data here
        this.data=response.data
        // console.log(this.data);
      });
  }
}
