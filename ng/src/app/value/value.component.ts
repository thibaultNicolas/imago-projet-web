import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-value',
  templateUrl: './value.component.html',
  styleUrls: ['./value.component.scss']
})
export class ValueComponent implements OnInit {
  configUrl = 'http://localhost:3000/clients';
  values: any;
  constructor(private http: HttpClient) {

  }


  ngOnInit(): void {
    this.getValues();
  }

  getValues() {
    return this.http.get(this.configUrl).subscribe(response => {
      console.log(response);
      this.values = response;
    }, error => {
      console.log(error);
    });
  }

}
