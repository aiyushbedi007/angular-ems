import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestApiService } from '../shared/rest-api.service';
import { TokenStorageService } from '../_services/token-storage.service';


@Component({
  selector: 'app-enquiry-list',
  templateUrl: './enquiry-list.component.html',
  styleUrls: ['./enquiry-list.component.css']
})
export class EnquiryListComponent implements OnInit {

  Enquiry: any = [];
  isLoggedIn = false;
  role = '';
  email: string;
  public searchText: string;

  constructor(
    private tokenStorageService: TokenStorageService,
    public router: Router,
    public restApi: RestApiService
  ) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (!this.isLoggedIn) {
      this.router.navigate(['/login']);
    }
    else {
      const user = this.tokenStorageService.getUser();
      this.role = user.user.role;
      this.email = user.user.email;
      this.loadEnquirys();
    }
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
