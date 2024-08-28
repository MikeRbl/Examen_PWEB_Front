import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/components/login/login.component';
import { NavComponent } from './pokemon/components/nav/nav.component';
import { VistaPrincipalComponent } from './pokemon/components/vista-principal/vista-principal.component';
import { CrearComponent } from './pokemon/components/crear/crear.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent,
    VistaPrincipalComponent,
    CrearComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
