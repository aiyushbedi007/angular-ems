import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../shared/rest-api.service';
import { TokenStorageService } from '../_services/token-storage.service';


@Component({
  selector: 'app-enquiry-create',
  templateUrl: './enquiry-create.component.html',
  styleUrls: ['./enquiry-create.component.css']
})
export class EnquiryCreateComponent implements OnInit {

  isLoggedIn = false;

  @Input() enquiryDetails = { title: '', snippet: '', body: '', raisedby: ''};

  constructor(
    private tokenStorageService: TokenStorageService,
    public restApi: RestApiService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (!this.isLoggedIn) {
      this.router.navigate(['/login']);
    }
  }

  addEnquiry(): void {
      const user = this.tokenStorageService.getUser();
      this.enquiryDetails.raisedby = user.user.email;
      this.restApi.createEnquiry(this.enquiryDetails).subscribe((data: {}) => {
      this.router.navigate(['/enquiry-list']);
      });
  }
}
