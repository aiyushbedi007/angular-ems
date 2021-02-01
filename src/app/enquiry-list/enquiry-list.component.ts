import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";

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

  ngOnInit() {
    this.loadEnquirys()
  }

  // Get Enquirys list
  loadEnquirys() {
    return this.restApi.getEnquirys().subscribe((data: {}) => {
      this.Enquiry = data;
    })
  }

  // Delete Enquiry
  deleteEnquiry(id) {
    if (window.confirm('Are you sure, you want to delete?')){
      this.restApi.deleteEnquiry(id).subscribe(data => {
        this.loadEnquirys()
      })
    }
  }  

}
