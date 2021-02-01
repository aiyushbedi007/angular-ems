import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from "../shared/rest-api.service";

@Component({
  selector: 'app-enquiry-create',
  templateUrl: './enquiry-create.component.html',
  styleUrls: ['./enquiry-create.component.css']
})
export class EnquiryCreateComponent implements OnInit {

  @Input() enquiryDetails = { title: '', snippet: '', body: '', email: ''}

  constructor(
    public restApi: RestApiService, 
    public router: Router
  ) { }

  ngOnInit() { }

  addEnquiry(dataEnquiry) {
    this.restApi.createEnquiry(this.enquiryDetails).subscribe((data: {}) => {
      this.router.navigate(['/enquiry-list'])
    })
  }

}
