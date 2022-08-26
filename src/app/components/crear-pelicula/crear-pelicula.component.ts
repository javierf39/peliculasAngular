import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeliculaService } from 'src/app/services/pelicula.service';
import { Pelicula } from 'src/app/models/pelicula.model';


@Component({
  selector: 'app-crear-pelicula',
  templateUrl: './crear-pelicula.component.html',
  styleUrls: ['./crear-pelicula.component.css']
})
export class CrearPeliculaComponent implements OnInit {

  categorias:Array<any> = []; 
  pelicula!: Pelicula[];

  imgObtenida!: string | ArrayBuffer;

  constructor(private peliculasv: PeliculaService, private router:Router) { 
    this.pelicula = [{
      id_pelicula:0,
      nombre:'',
      anno:0,
      director:'',
      id_categoria:0
    }]

  }

  ngOnInit(): void {
    this.peliculasv.getCategorias().subscribe(
      categoria => this.categorias = categoria
    );

    
  };

  

  imgSelected(event:any):any{
    this.pelicula[0].img = <File>event.target.files[0];
    const reader = new FileReader();
    reader.onload = e => this.imgObtenida = reader.result as string;
    reader.readAsDataURL(this.pelicula[0].img)
  }

  onSubmit(event:any){
    const formData = new FormData(event.currentTarget);
    console.log(JSON.stringify(formData))
    this.peliculasv.postPelicula(formData).subscribe(
      data => console.log(data)
    );
    this.router.navigate(['/'])
  };

}
