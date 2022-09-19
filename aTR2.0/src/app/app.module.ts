import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import  {ServerComponent} from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { component3Component } from './component3/component3.component'; //if you create component in terminal (ng g c [name]), this stuff will be created automatically

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    component3Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
