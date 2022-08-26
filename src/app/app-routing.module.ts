import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearPeliculaComponent } from './components/crear-pelicula/crear-pelicula.component';
import { DetallePeliculaComponent } from './components/detalle-pelicula/detalle-pelicula.component';
import { EditarPeliculaComponent } from './components/editar-pelicula/editar-pelicula.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';

const routes: Routes = [
  {path: '', component:PeliculasComponent},
  {path:'crear-pelicula', component:CrearPeliculaComponent},
  {path:'editar-pelicula/:id', component: EditarPeliculaComponent},
  {path:'detalle-pelicula/:id', component:DetallePeliculaComponent},
  // {path: '**', redirectTo:'', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }