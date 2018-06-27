import { Component, OnInit, Input } from '@angular/core';
import { FormularioService } from '../formulario.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import { catchError, map, tap } from 'rxjs/operators';
import { isNull } from 'util';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form-edit.component.css']
})
export class FormEditComponent implements OnInit {

  constructor(private FormularioService:FormularioService, private _activatedRoute:ActivatedRoute, private _location:Location) { }
  auto = new Object();
  ngOnInit() {
    
    this.listarenformulario();
  }

 
  listaFiltrada;
  listarenformulario(){
    this.FormularioService.listarpost() // llamar a "listarpost()" del servicio
    .map((Response) => Response.json()) //transformar a json
    .subscribe((data) => {
      const id = this._activatedRoute.snapshot.paramMap.get('id');
      this.FormularioService.getJsonForID(id,data)
      .subscribe((data) => {
        this.listaFiltrada = data;
        console.log(this.listaFiltrada);
      })
    });
  };
  pivot;
  formEdit(){
    this.auto["id"] = this.listaFiltrada.au_id;
    this.pivot = document.getElementById("nombreEditar");
    this.auto["nombre"] = this.pivot.value;  //leer nombre y guardar en el objeto
    this.pivot = document.getElementById("marcaEditar");
    this.auto["marca"] = this.pivot.value;//leer marca y guardar en el objeto
    this.pivot = document.getElementById("modeloEditar");
    this.auto["modelo"] = this.pivot.value;
// se tomo lops valores de los inputs
    this.FormularioService.editPost(this.auto) // se envio el objeto para ser editado
    .subscribe((data) => { // respuesta del servidor
      location.href = "/home"; // cuando hay respuesta vuelve a la home.
      console.log(data);
    })
  }  

}
