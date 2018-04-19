import { Component } from '@angular/core';
import { RouterEvent } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
  defaultPageTitle = 'Pokémon Database';
  loadingPage = true;

  public constructor(private titleService: Title) { }


  public setTitle(newTitle?) {
    this.titleService.setTitle(newTitle ? (this.defaultPageTitle + ' | ' + newTitle) : this.defaultPageTitle);
  }

}

