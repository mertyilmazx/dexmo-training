import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IQueryParams } from 'src/models/IQueryParams';

@Component({
  selector: 'app-HomePage',
  templateUrl: './HomePage.component.html',
  styleUrls: ['./HomePage.component.css']
})
export class HomePageComponent implements OnInit {
  text: string;
  constructor(private router: Router) {
    this.text = '';
  }

  ngOnInit() {}

  navigate(path: string) {
    const params: IQueryParams = {
      name: this.text
    };
    this.router.navigateByUrl(path, {
      queryParams: params
    });
  }
}
