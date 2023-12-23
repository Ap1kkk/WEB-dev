// admin.guard.ts
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivate } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // Проверяем, является ли пользователь администратором 
    console.log(this.authService.isUserAdmin())
    if (this.authService.isUserAdmin()) {
        console.log("admin")
        return true;
    } else {
        console.log("not admin")
      // Если не администратор, перенаправляем на другую страницу (например, страницу входа)
      this.router.navigate(['/system/main']);
      return false;
    }
  }
}
