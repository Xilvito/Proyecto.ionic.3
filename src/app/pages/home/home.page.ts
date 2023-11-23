import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { ApiService } from '../../servicios/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  mensaje: string = "";
  episodios: any[] = [];
  mostrarEpisodios: boolean = false;

  constructor( private rutaActiva : ActivatedRoute, private storage: Storage, private api: ApiService) { 
    this.rutaActiva.queryParams.subscribe(params =>{
      if(params['rutUsuario'])
      {
        this.mensaje = params['rutUsuario'];

      }
    })
  }

  ngOnInit() {
  }

  async verStorage()
  {
    let nombre = await this.storage.get("nombreUsuario")
    console.log("El nombre guardado es: "+ nombre)

  }

  async  mostrarEpisodiosDeOnePiece() {
    this.api.obtenerEpisodios().subscribe((respuesta: any) => {
      // Convertir el objeto a una matriz usando Object.values()
      console.log(Object.values(respuesta)[1])
      this.episodios = Object.values(respuesta);
      this.mostrarEpisodios = true;
    });
}
}
