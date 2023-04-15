import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

export function canActivateFn(
  authService: AuthService,
  router: Router
): (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => boolean | Observable<boolean> | Promise<boolean> {
  return (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean => {
    let authRouter = authService.checkAccess();
    if (!authRouter) {router.navigate(['/login']);}
    return authRouter;
  };
}

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate = canActivateFn(this.authService, this.router);
}
