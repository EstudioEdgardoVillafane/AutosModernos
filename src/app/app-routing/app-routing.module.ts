import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule} from '@angular/router';

//Componentes                       
import {FormularioComponent} from '../formulario/formulario.component' 
import { FormEditComponent } from '../form-edit/form-edit.component';
import { FormAddComponent } from '../form-add/form-add.component';

/*                Rutas                             */

// Rutas                             
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: FormularioComponent },
  { path: 'editar/:id', component: FormEditComponent },
  { path: 'agregar', component: FormAddComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
],
  declarations: []
})

export class AppRoutingModule {}
