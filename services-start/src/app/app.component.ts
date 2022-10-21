import { Component, OnInit } from '@angular/core';
import { AccountsService } from './services/accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //providers: [AccountsService] //tells angular how to create the AccountsService type by targeting the classes in the services
  // use providers:[AccountsService] in the app.module.ts
})
export class AppComponent implements OnInit{
  accounts: {name: string, status:string}[] = []; //the type of the accounts is an array of objects

  constructor(private accountsService: AccountsService){}

  ngOnInit(){ //most initialization should not be done in the constructor be there.
    this.accounts = this.accountsService.accounts; //accessing the exact same array that's in the service
  }


  // onAccountAdded(newAccount: {name: string, status: string}) {
  //   // this.accounts.push(newAccount); //moved to accounts.services.ts
  // }

  // onStatusChanged(updateInfo: {id: number, newStatus: string}) {
  //   // this.accounts[updateInfo.id].status = updateInfo.newStatus; //moved to accounts.services.ts
  // }
}
