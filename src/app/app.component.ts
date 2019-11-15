import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
  defaultPageTitle = 'Pokedex';

  comboReady = true;
  pokemonReady = true;

  public constructor(private titleService: Title) { }

  public setTitle(newTitle?) {
    this.titleService.setTitle(newTitle ? (this.defaultPageTitle + ' | ' + newTitle) : this.defaultPageTitle);
  }

}

