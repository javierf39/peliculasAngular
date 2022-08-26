import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { PeliculaService } from 'src/app/services/pelicula.service';
import { Pelicula } from 'src/app/models/pelicula.model';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-editar-pelicula',
  templateUrl: '../crear-pelicula/crear-pelicula.component.html',
  styleUrls: ['./editar-pelicula.component.css']
})
export class EditarPeliculaComponent implements OnInit {

  pelicula!: Pelicula[]
  id_pelicula!:number;
  imgObtenida!: string | ArrayBuffer;
  categorias:any;

  constructor(private activeRouter:ActivatedRoute, private peliculasv: PeliculaService, private router: Router) { }

  ngOnInit(): void {
    this.peliculasv.getCategorias().subscribe(
      categoria => this.categorias = categoria
    );

    this.activeRouter.params.subscribe(paramas => {
      this.id_pelicula = paramas['id']
      console.log(this.id_pelicula)
      this.getPelicula(this.id_pelicula)
    });
  }

  getPelicula(id:any){
    this.peliculasv.getPelicula(id).pipe(
      tap((pelicula:Pelicula[]) => {
        console.log('editar ', pelicula[0])
        this.pelicula = pelicula
      })
    ).subscribe();
  };

  imgSelected(event:any):any{
    this.pelicula[0].img = <File>event.target.files[0];
    const reader = new FileReader();
    reader.onload = e => this.imgObtenida = reader.result as string;
    reader.readAsDataURL(this.pelicula[0].img)
  };

  onSubmit(event:any){
    if(this.pelicula[0].id_pelicula == 0){
      const formData = new FormData(event.currentTarget);
      console.log(JSON.stringify(formData))
      this.peliculasv.postPelicula(formData).subscribe(
        data => console.log(data)
      );
      this.router.navigate(['/']);
    }else{
      const formData = new FormData(event.currentTarget);
      console.log(JSON.stringify(formData))
      this.peliculasv.putPelicula(formData,this.id_pelicula).subscribe(
        data => console.log(data)
      );
      this.router.navigate([`/detalle-pelicula/${this.pelicula[0].id_pelicula}`]);
    }
    
  };

}
