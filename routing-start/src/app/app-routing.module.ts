import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from "./auth-guard.service";
import { CanDeactivateGuard } from "./servers/edit-server/can-deactivate-guard.service";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { ServerResolver } from "./servers/server/server-resolver.service";


const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'users', component: UsersComponent, children: [
    { path: ':id/:name', component: UserComponent}
  ]},
  { path: 'servers', 
    // canActivate: [AuthGuard], 
    canActivateChild: [AuthGuard],
    component: ServersComponent, 
    children: [ //children allows route nesting
    { path: ':id', component:ServerComponent, resolve: {myServer: ServerResolver}}, 
    { path: ':id/edit', component:EditServerComponent, canDeactivate: [CanDeactivateGuard]} 
  ]},
  // { path: "Error404", component: PageNotFoundComponent},
  { path: "Error404", 
    component: ErrorPageComponent,
    data: {message: "Page not found"}}, //data allows us to pass any key/value pair
  { path: "**", redirectTo: '/Error404'} // ** = wildcard = anything that's not defined; must be last route in array of routes
];

@NgModule({
  imports: [
    // RouterModule.forRoot(appRoutes, {useHash: true}) //used for older systems
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule] //from this module, if I were to add this module to the imports of another module, what should be accessible to this module which imports this module
})

export class AppRoutingModule {

}