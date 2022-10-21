import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {
  errorMessage: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    // this.errorMessage = this.route.snapshot.data['message']; //data is in the app-router.module.ts
    this.route.data.subscribe(
      (data: Data) => {
        this.errorMessage = data['message']; //message is the key in the key/value object and is in the app-router.module.ts
      }
    )
  }

}
