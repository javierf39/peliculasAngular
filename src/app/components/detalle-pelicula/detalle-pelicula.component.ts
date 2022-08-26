import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Pelicula } from 'src/app/models/pelicula.model';
import { PeliculaService } from 'src/app/services/pelicula.service';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.css']
})
export class DetallePeliculaComponent implements OnInit {

  movie!:Pelicula[]

  constructor(private activeRouter: ActivatedRoute, private pelicuasv: PeliculaService, private router:Router) { }

  ngOnInit(): void {
    this.activeRouter.params.subscribe(params => {
      let id = params['id'];
      this.getPelicula(id);
      console.log(this.movie)
    });
  };

  getPelicula(id:any){
    this.pelicuasv.getPelicula(id).pipe(
      tap((pelicula:Pelicula[]) => {
        console.log(pelicula)
        this.movie = pelicula
      })
    ).subscribe();
  };

  eliminarPelicula(id:any){
    this.pelicuasv.deletePelicula(id).subscribe(
      response => {
        if(response){
          this.router.navigate(['/'])
        }
      }
    );
  };

}
