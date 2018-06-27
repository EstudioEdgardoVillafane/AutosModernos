import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http } from '@angular/http';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { HttpModule } from '@angular/http';
import { HttpClientModule }    from '@angular/common/http';


import { AppComponent } from './app.component';
import { FormularioComponent } from './formulario/formulario.component';
import { FormularioService } from './formulario.service';
import { AppRoutingModule} from './app-routing/app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { BannerComponent } from './banner/banner.component';
import { FormAddComponent } from './form-add/form-add.component';
import { FormEditComponent } from './form-edit/form-edit.component'

@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    NavbarComponent,
    BannerComponent,
    FormAddComponent,
    FormEditComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [FormularioService],
  bootstrap: [AppComponent]
})
export class AppModule { }

