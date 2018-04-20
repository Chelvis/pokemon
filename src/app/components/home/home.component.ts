import { Component, OnInit } from '@angular/core';
import { AppRoutingModule } from './../../app-routing.module';
import { ActivatedRoute, Router, NavigationEnd, NavigationStart } from '@angular/router';


import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  url: any;

  constructor(
    private appComponent: AppComponent,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    // Executa o método loadPage() ao último evento de troca de rota
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.loadPage();
      }
      // Se o usuário iniciar uma troca de rota, exibe a camada de carregamento
      if (event instanceof NavigationStart) {
        this.appComponent.loadingPage = true;
      }
    });
  }

  ngOnInit() {
    this.loadPage();
  }

  // Método que carrega todos os dados da página
  loadPage() {

    // Evita que a troca de rota execute o método loadPage mais de uma vez
    const newUrl = this.activatedRoute.snapshot.url.join('/');
    if (this.url === newUrl) { return; }
    this.url = newUrl;

    this.appComponent.loadingPage = false; // Apaga a camada de carregamento

  }

}
