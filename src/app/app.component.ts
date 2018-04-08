import { HttpClient } from '@angular/common/http';
import {Component} from '@angular/core';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Simple request';
  private apiUrl = 'https://address-book-demo.herokuapp.com/api/contacts';
 // private apiUrl = 'http://scadevjobs.com/api/Locations';
 // private apiUrl = 'https://scadevjobs.com/api/Locations';
  data: any = {};

  constructor(private http: HttpClient) {
    console.log('Hello');
    this.getApiData();
    this.getData();
  }

  getData() {
    return this.http.get(this.apiUrl);
  }

  getApiData() {
    this.getData().subscribe(data => {
      console.log(data);
      this.data = data;
    });
  }
}
