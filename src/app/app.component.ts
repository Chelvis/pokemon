import { Component } from '@angular/core';
import { RouterEvent } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  term = '';
  menu: any;
  menuFooter: any;
  categories: any;
  language = 'pt';

  public constructor(private titleService: Title,  private metaService: Meta) { }

  public menuRewrite(menu) {
    this.menu = menu;
  }
  public menuFooterRewrite(menuFooter) {
    this.menuFooter = menuFooter;
  }
  public setTitle( newTitle: string = 'Eucatex') {
    this.titleService.setTitle(newTitle + (newTitle !== 'Eucatex' ? ' | Eucatex' : ''));
  }
  public setDescription(description: string) {
    this.metaService.updateTag({name: 'description', content: description});
  }

}

