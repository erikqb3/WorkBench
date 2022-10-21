import { Observable } from 'rxjs/Observable';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';


export interface CanComponentDeactivate {
  candDeactivate: () => Observable<boolean> | Promise<boolean> | boolean; //this is what we will acutally implement the logic checking wheter we aer allowed to leave or not because we need the connection between our guard and the component
}

export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> { 
  canDeactivate(
    component: CanComponentDeactivate, 
    currentRoute: ActivatedRouteSnapshot, 
    currentState: RouterStateSnapshot, 
    nextState?: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      return component.candDeactivate(); 
      //enables Angular to activate canDeactivate in our service and can rely on the fact that the  component we're currently on has the canDeactivatev too
      //wraps our own interface, so it will wrap an interface which forces some component or some class to implement the canDeactivate method.
  }
}