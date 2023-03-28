import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HederComponent } from './heder/heder.component';
import { FuterComponent } from './futer/futer.component';
import { SomosComponent } from './somos/somos.component';
import { EstablecimientosComponent } from './establecimientos/establecimientos.component';
import { ReservasComponent } from './reservas/reservas.component';
import { LoginComponent } from './login/login.component';
LoginComponent




const routes: Routes = [];
const appRoutes=[ {
  path: '/somos', component: SomosComponent, pathMatch: 'full'
}];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
