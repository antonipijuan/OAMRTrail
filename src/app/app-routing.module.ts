import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent }   from './main/main.component';
import { AuthGuard } from './core/guards/auth.guard';
import { AdministracioModule } from './administracio/administracio.module';
import { AvaluacioRoutes } from './avaluacio/avaluacio.routing';

const appRoutes: Routes = [
   {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
   },
   {	
      path: 'session',
      loadChildren: () => import('./session/session.module').then(m => m.SessionModule)
   },
   {
      path: '',
      component: MainComponent,
      canActivate: [AuthGuard],
      runGuardsAndResolvers: 'always',
      children: [
         {  path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)},
         {  path: 'administracio', loadChildren: () => import('./administracio/administracio.module').then(m => m.AdministracioModule)},
         {  path: 'avaluacio', loadChildren: () => import('./avaluacio/avaluacio.module').then(m => m.AvaluacioModule)}
      ]
   },
   {
      path: '**',
      redirectTo: 'session/loginV2'
   }
]

@NgModule({
  	imports: [RouterModule.forRoot(appRoutes)],
 	exports: [RouterModule],
  	providers: []
})
export class RoutingModule { }
