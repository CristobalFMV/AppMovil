import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/model/Usuario';

@Component({
  selector: 'app-correcto',
  templateUrl: './correcto.page.html',
  styleUrls: ['./correcto.page.scss'],
})
export class CorrectoPage implements OnInit {

  password = '';

  constructor(private router: Router, private activateRoute: ActivatedRoute) {

    this.activateRoute.queryParams.subscribe(params => {
      const nav = this.router.getCurrentNavigation();
      if (nav) {
        if (nav.extras.state) {
          const usuario: Usuario = nav.extras.state['usuario'];
          this.password = usuario.password;
          return;
        }
      } else {
      this.router.navigate(['/login']);
      }
  
    });

  }

  ngOnInit() {
  }

}
