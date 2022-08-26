import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula.model';
import { PeliculaService } from 'src/app/services/pelicula.service';
import { tap } from 'rxjs';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  peliculas!: Pelicula[]

  constructor(private peliculasv: PeliculaService) { }

  ngOnInit(): void {
    this.peliculasv.getPeliculas().pipe(
      tap((pelicula:Pelicula[]) => {
        console.log(pelicula)
        this.peliculas = pelicula
        console.log('lista ',this.peliculas)
      })
    ).subscribe()
  }

}
