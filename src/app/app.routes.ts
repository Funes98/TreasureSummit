import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RankingComponent } from './ranking/ranking.component';
import { ContactComponent } from './contact/contact.component';
import { GameComponent } from './game/game.component';
import { VictoryComponent } from './game/victory/victory.component';
import { DefeatComponent } from './game/defeat/defeat.component';
import { gameGuard } from './guards/game.guard';
import { victoryGuard } from './guards/victory.guard';
import { defeatGuard } from './guards/defeat.guard';
import { PrivacyComponent } from './privacy/privacy.component';

export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'ranking',component:RankingComponent},
    {path:'contact',component:ContactComponent},
    {path:'game',component:GameComponent,canActivate: [gameGuard]},
    {path:'victory',component:VictoryComponent,canActivate: [victoryGuard]},
    {path:'defeat',component:DefeatComponent,canActivate: [defeatGuard]},
    {path: 'privacy',component: PrivacyComponent},
    { path: '**', redirectTo: '' }

];
