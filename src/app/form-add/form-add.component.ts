import { Component, OnInit, Input } from '@angular/core';
import { FormularioService } from '../formulario.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import { catchError, map, tap } from 'rxjs/operators';
import { isNull } from 'util';


@Component({
  selector: 'app-form-add',
  templateUrl: './form-add.component.html',
  styleUrls: ['./form-add.component.css']
})
export class FormAddComponent implements OnInit {

  @Input('flag') flagAdd;
  @Input('auto') auto;

  constructor(FormularioService:FormularioService) { }

  ngOnInit() {
  }


  pivot;
  flagsOFF(){
    this.flagAdd = false; //desactivar inputs en el html para agregar elementos al formulario
    // this.flagEdit = false; //desactivar inputs en el html para editar elementos en formulario
  };
  formAdd(){
    this.flagsOFF(); // desactivar visibilidad de inputs
    this.pivot = document.getElementById("nombre");
    this.auto["nombre"] = this.pivot.value;  //leer nombre y guardar en el objeto
    this.pivot = document.getElementById("marca");
    this.auto["marca"] = this.pivot.value;//leer marca y guardar en el objeto
    this.pivot = document.getElementById("modelo");
    this.auto["modelo"] = this.pivot.value;//leer modelo y guardar en el objeto

    // this.FormularioService.enviarpost(this.auto) //enviar el objeto a metodo del servicio

    //.subscribe((data) => {
      //console.log(data); //checkear funcionamiento
      // this.listarenformulario();
    //});  
  };


}
