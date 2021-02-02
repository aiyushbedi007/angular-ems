import { Component, OnInit } from '@angular/core';
import { RestApiService } from '../shared/rest-api.service';

@Component({
  selector: 'app-enquiry-list',
  templateUrl: './enquiry-list.component.html',
  styleUrls: ['./enquiry-list.component.css']
})
export class EnquiryListComponent implements OnInit {

  Enquiry: any = [];

  constructor(
    public restApi: RestApiService
  ) { }

  ngOnInit(): void {
    this.loadEnquirys();
  }

  // Get Enquirys list
  loadEnquirys(): any {
    return this.restApi.getEnquirys().subscribe((data: {}) => {
      this.Enquiry = data;
    });
  }

  // Delete Enquiry
  deleteEnquiry(id: any): void {
    if (window.confirm('Are you sure, you want to delete?')){
      this.restApi.deleteEnquiry(id).subscribe(data => {
        this.loadEnquirys();
      });
    }
  }

}
