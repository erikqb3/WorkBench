import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server was created";
  serverName = "Test Server";
  serverCreated = false;
  servers = ["Server1","Server2"];

  constructor() { 
    setTimeout(()=>{
      this.allowNewServer = true;
    }, 2000)
  }
  ngOnInit(): void {
  }
  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server was created: Name is " + this.serverName;
  }
  onUpdateServerName(event: any){
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value //<HTMLInputElement> is not necessary some times, just shows more specificity
  }


}
