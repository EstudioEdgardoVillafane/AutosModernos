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
  selector: 'app-form-add',
  templateUrl: './form-add.component.html',
  styleUrls: ['./form-add.component.css']
})
export class FormAddComponent implements OnInit {

  constructor(private FormularioService:FormularioService, private _activatedRoute:ActivatedRoute, private _location:Location) { }

  ngOnInit() {
  }

  auto = new Object;
  pivot;
  formAdd(){
    this.pivot = document.getElementById("nombre");
    this.auto["nombre"] = this.pivot.value;  //leer nombre y guardar en el objeto
    this.pivot = document.getElementById("marca");
    this.auto["marca"] = this.pivot.value;//leer marca y guardar en el objeto
    this.pivot = document.getElementById("modelo");
    this.auto["modelo"] = this.pivot.value;//leer modelo y guardar en el objeto
 
     this.FormularioService.enviarpost(this.auto) //enviar el objeto a metodo del servicio

     .subscribe((data) => { // respuesta del servidor
      location.href = "/home"; // cuando hay respuesta vuelve a la home.
      console.log(data);
    });  
  };


}
