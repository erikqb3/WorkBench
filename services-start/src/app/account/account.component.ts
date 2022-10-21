import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountsService } from '../services/accounts.service';
import { LoggingService } from '../services/loggin.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  //providers: [LoggingService, AccountsService] //informs Angular how to create the logging service
  // providers: [LoggingService] //calling AccountsService here messings things up, use the one higher up in the hierchary tree (in app.module.ts)
  //We'll just use the instances from the app.module
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  //KEEP INPUT CUZ WE ARE RECEIVING OUTSIDE DATA, BUT TOSS OUTPUT
  // @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  constructor(private loggingService: LoggingService,
              private accountsService: AccountsService){} //type has to be the class you want to get injected

  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status);
    this.accountsService.statusUpdated.emit(status) //injecting event emitter from service
    // this.loggingService.logStatusChange(status);
    // this.statusChanged.emit({id: this.id, newStatus: status});
    // console.log('A server status changed, new status: ' + status);
  }
}
