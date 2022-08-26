import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pelicula } from 'src/app/models/pelicula.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  url='http://localhost:3000'

  constructor(private http: HttpClient) { }

  getCategorias():Observable<any>{
    return this.http.get(`${this.url}/categorias`)
  };

  getPeliculas():Observable<Pelicula[]>{
    return this.http.get<Pelicula[]>(`${this.url}/peliculas`)
  };

  getPelicula(id:any):Observable<Pelicula[]>{
    return this.http.get<Pelicula[]>(`${this.url}/pelicula/${id}`);
  };

  postPelicula(pelicula:any):Observable<any>{
    return this.http.post<any>(`${this.url}/enviar_pelicula`, pelicula);
  };

  putPelicula(pelicula:any, id:number):Observable<any>{
    return this.http.put<any>(`${this.url}/actualizar_pelicula/${id}`, pelicula);
  };

  deletePelicula(id:any):Observable<any>{
    return this.http.delete<any>(`${this.url}/eliminar_pelicula/${id}`);
  };
}
