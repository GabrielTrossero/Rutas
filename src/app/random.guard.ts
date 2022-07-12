import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //genero un num aleatorio. Si es true puedo acceder a la página, sino no
    const numAleatorio = Math.random();
    console.log(numAleatorio);
    if (numAleatorio > 0.5) {
      return true;
    }
    else return false;
  }
  
}
