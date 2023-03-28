import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FuterComponent } from './futer/futer.component';
import { HederComponent } from './heder/heder.component';
import { LoginComponent } from './login/login.component';
import { SomosComponent } from './somos/somos.component';
import { EstablecimientosComponent } from './establecimientos/establecimientos.component';
import { ReservasComponent } from './reservas/reservas.component';
import { ContactoComponent } from './contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    FuterComponent,
    HederComponent,
    LoginComponent,
    SomosComponent,
    EstablecimientosComponent,
    ReservasComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
