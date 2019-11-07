import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IQueryParams } from 'src/models/IQueryParams';

@Component({
  selector: 'app-SecondPage',
  templateUrl: './SecondPage.component.html',
  styleUrls: ['./SecondPage.component.css']
})
export class SecondPageComponent implements OnInit {
  name: string;
  parameters: IQueryParams;

  constructor(private router: Router) {
    this.parameters = this.router.getCurrentNavigation().extras
      .queryParams as IQueryParams;
  }

  ngOnInit() {
    this.name = this.parameters.name;
  }
  navigate(path: string) {
    this.router.navigateByUrl(path, {});
  }
}
