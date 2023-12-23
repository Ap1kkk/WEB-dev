// admin.guard.ts
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticatedGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log(this.authService.isAuthenticated())
    if(this.authService.isAuthenticated())
    {
        console.log("logged in")
        return true;
    }
    console.log("not logged in")
    this.router.navigate(['/login']);
    return false;
  }
}
