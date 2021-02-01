import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-enquiry-edit',
  templateUrl: './enquiry-edit.component.html',
  styleUrls: ['./enquiry-edit.component.css']
})
export class EnquiryEditComponent implements OnInit {

  id = this.actRoute.snapshot.params['id'];
  enquiryData: any = {};

  constructor(
    public restApi: RestApiService,
    public actRoute: ActivatedRoute,
    public router: Router
  ) { 
  }

  ngOnInit() { 
    this.restApi.getEnquiry(this.id).subscribe((data: {}) => {
      this.enquiryData = data;
    })
  }

  // Update enquiry data
  updateEnquiry() {
    if(window.confirm('Are you sure, you want to update?')){
      this.restApi.updateEnquiry(this.id, this.enquiryData).subscribe(data => {
        this.router.navigate(['/enquiry-list'])
      })
    }
  }

}
