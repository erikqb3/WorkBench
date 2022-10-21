import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};
  paramsSubscription: Subscription; //physical manifestation of subscription via variable

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = { //get user from URL params 
      id: this.route.snapshot.params['id'],
      name:this.route.snapshot.params['name'],
    }
    this.paramsSubscription = this.route.params //if route url is changed unexpectedly, this observes the changes and applies changes from provided from subscrition
      .subscribe(
        (params: Params) =>{
          this.user.id = params['id'];
          this.user.name = params['name'];
        }
      )
  }
  ngOnDestroy(){ //when component is destroyed
    this.paramsSubscription.unsubscribe(); //not always necesisary unless you make your own observable
  }

}
