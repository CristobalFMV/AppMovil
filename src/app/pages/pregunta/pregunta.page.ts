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
    private activeroute: ActivatedRoute,
    private router: Router)

  {this.usuario = new Usuario('', '', '', '', '', '',); 
  
  }

  public ValidarRespuesta(): void{    
    if (this.usuario.respuestaSecreta === this.respuesta) {      
      alert ('Su contraseña es ' + this.usuario.password);
    }
    else{
      alert('Respuesta incorreta');
    }
  }

  ngOnInit() {
  }

}