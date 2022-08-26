export interface Pelicula {
    id_pelicula:number;
    nombre:string;
    anno:number;
    director:string;
    img?:File;
    id_categoria:number;
    descripcion?:string
}
