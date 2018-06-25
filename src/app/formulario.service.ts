import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable()
export class FormularioService {

  constructor(private http:Http) { }
  

  enviarpost(data){
    return this.http.post("php/script/formularioagregar.php",data); //enviar por post un "data" al php "formularioagregar.php"
  };
  listarpost(){
    return this.http.get("php/script/listarenformulario.php") //recibe por get un "data" del php "listarenformulario.php"
  };
  editPost(data){
    return this.http.post("php/script/formularioedit.php",data); //enviar por post un "data" al php "formularioagregar.php"
  };
  delete( id: number){
    return this.http.get('php/script/borrar.php?id='+id);
  }
  getJsonForID(id, json){
    return of(json.find((tomarjson => tomarjson.au_id === id)));
  };
}
 