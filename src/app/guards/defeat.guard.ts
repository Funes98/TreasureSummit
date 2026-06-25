import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const defeatGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);

  const lastResult = localStorage.getItem('treasure_last_result');
  const lastStatus = localStorage.getItem('treasure_last_status');

  if (lastResult && lastStatus === 'failed') {
    return true;
  }

  return router.createUrlTree(['/ranking']);


};
