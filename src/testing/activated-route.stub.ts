import { of } from 'rxjs/observable/of';

export class ActivatedRouteStub {

  params = of({});

  snapshot = { url: ['teste'] };
}
