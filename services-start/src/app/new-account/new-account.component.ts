import { Component, EventEmitter, Output } from '@angular/core';
import { AccountsService } from '../services/accounts.service';
import { LoggingService } from '../services/loggin.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
   //providers: [LoggingService, AccountsService] //informs Angular how to create the logging service
  //  providers: [LoggingService] //calling AccountsService here messings things up, use the one higher up in the hierchary tree (in app.module.ts)
  //We'll just use the instances from the app.module
})
export class NewAccountComponent {
  //NOT LISTINING TO THESE EVENTS RIGHT NOW
  // @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private loggingService: LoggingService,
              private accountService: AccountsService){
                this.accountService.statusUpdated.subscribe(
                  (status:string) => alert("New Status: " + status)
                );
              } //type has to be the class you want to get injected

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus); //see addAccount method in accounts.service.ts
    // this.loggingService.logStatusChange(accountStatus);
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // });
    // console.log('A server status changed, new status: ' + accountStatus);
  }
}
