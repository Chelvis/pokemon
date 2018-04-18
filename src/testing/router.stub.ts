import { of } from 'rxjs/observable/of';
import { NavigationEnd } from '@angular/router';

export class RouterStub {

    events = of({ NavigationEnd });

    createUrlTree(commands, navExtras = {}) {
      return '';
    }

    serializeUrl(url) {
      return '';
    }
}
