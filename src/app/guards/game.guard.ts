import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const gameGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);

  const playerName = localStorage.getItem('treasure_player_name');
  const canStartGame = localStorage.getItem('treasure_can_start_game') === 'true';

  if (playerName && canStartGame) {
    return true;
  }

  return router.createUrlTree(['/']);
};
