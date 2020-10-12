import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceUtils } from './services-utils';
import { buildRoute, ServicesRoutes } from './services-routes';

@Injectable({
  providedIn: 'root',
})
export class MercadoLibreService {
  constructor(private serviceUtils: ServiceUtils) {}

  public getBuscador(data): Observable<any> {
    return this.serviceUtils.buildRequest(ServicesRoutes.getSearch, 'get', data);
  }

  public getItemDetail(data): Observable<any> {
    // return this.serviceUtils.buildRequest(ServicesRoutes.getSearch, 'get', data);
    return this.serviceUtils.buildRequest(buildRoute(ServicesRoutes.getDetail, {id: data.id}), 'get');
  }
}
