import { EventEmitter, Injectable } from '@angular/core';
import { LoggingService } from './loggin.service'; //using a service within a service

@Injectable({ //metadata that tells Angular that sercices can be injected into it. you add@injectable to the service where you wnat to inject something
  providedIn: 'root'
})
export class AccountsService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  statusUpdated = new EventEmitter<string>();

  constructor(private logginService: LoggingService) { }//using a service within a service


  addAccount(name: string, status: string){
    this.accounts.push({name: name, status: status});
  }
  updateStatus(id: number, status: string){
    this.accounts[id].status = status;
  }
}
