import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerResolver } from './servers/server/server-resolver.service';

// const appRoutes: Routes = [
//   { path: '', component: HomeComponent, pathMatch: 'full'},
//   // { path: 'users', component: UsersComponent}, //multiuser, when path is reached, a certain component is loaded 
//   // { path: 'users/:id/:name', component: UserComponent}, // single user, /: tells angular next part is dynamic
//   { path: 'users', component: UsersComponent, children: [
//     { path: ':id/:name', component: UserComponent}
//   ]},

//   // { path: 'servers', component: ServersComponent},
//   // { path: 'servers/:id', component:ServerComponent}, 
//   // { path: 'servers/:id/edit', component:EditServerComponent} 
//   { path: 'servers', component: ServersComponent, children: [ //children allows route nesting
//     { path: ':id', component:ServerComponent}, 
//     { path: ':id/edit', component:EditServerComponent} 
//   ]},
//   { path: "Error404", component: PageNotFoundComponent},
//   { path: "**", redirectTo: '/Error404'} // ** = wildcard = anything that's not defined; must be last route in array of routes
// ]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent,
    PageNotFoundComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule //imported
    //RouterModule.forRoot(appRoutes) //registers the plugged in routes into the app
  ],
  providers: [ServersService, AuthService, AuthGuard, CanDeactivateGuard, ServerResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
