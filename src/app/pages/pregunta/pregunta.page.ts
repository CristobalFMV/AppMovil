import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/model/Usuario';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.page.html',
  styleUrls: ['./pregunta.page.scss'],
})
export class PreguntaPage implements OnInit {
  

  public usuario: Usuario;
  public respuesta: string = '';
  
  constructor(
    private activeroute: ActivatedRoute
  , private router: Router) {

  this.activeroute.queryParams.subscribe(params => {      
    if(this.router.getCurrentNavigation().extras.state){
      this.usuario = this.router.getCurrentNavigation().extras.state.usuario;
      } else {
        this.router.navigate(['/qr']);
      }
    });
  }

  public validarRespuesta():void{
    if(this.usuario.respuestaSecreta===this.respuesta){
      //navigationextras
      this.router.navigate(['/correcto']);
    }else{
      this.router.navigate(['/incorrecto']);
    }
  }

  ngOnInit() {
  }

  }