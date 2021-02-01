import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { EnquirysService } from '../service/enquirys.service';

@Component({
  selector: 'app-enquirys',
  templateUrl: './enquirys.component.html',
  styleUrls: ['./enquirys.component.css']
})
export class EnquirysComponent implements OnInit {

  @Input()
  result$: Observable<any>;

  constructor(private enquirysService: EnquirysService) {
    this.result$ = enquirysService.resolveEnquirys();
  }

  ngOnInit() {}

}
