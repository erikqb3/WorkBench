import { Injectable } from "@angular/core";

@Injectable({  //we won't inject anything into here, but it's good practice to always have this in a service
  providedIn: 'root'
})
export class LoggingService{
  logStatusChange(status: string){
    console.log('A server status changed, new status: ' + status);
  }
}