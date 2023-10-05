import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Usuario } from 'src/app/model/Usuario';

@Component({
  selector: 'app-correo',
  templateUrl: './correo.page.html',
  styleUrls: ['./correo.page.scss'],
})
export class CorreoPage implements OnInit {

  public correo: string = '';

  constructor(private router: Router) { }

  ngOnInit() {
  }
  public IngresarPaginaValidarRespuesta(): void{
    const usuario = new Usuario('','','','','','');
    const usuarioEncontrado = usuario.buscarUsuarioValidoCorreo(this.correo);
    if(!usuarioEncontrado){
      alert('CORREO INVALIDO');
    }else{    
      
      const navigationExtras: NavigationExtras = {
        state: {
        usuario: usuarioEncontrado
        }
      };
    this.router.navigate(['/respuesta'], navigationExtras);
  }
    }
}
