import {
  NgModule,
  NO_ERRORS_SCHEMA
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbModule } from '@modules/breadcrumb/breadcrumb.module';
import { HttpClientModule } from '@angular/common/http';
import { ItemComponent } from './item.component';
import { ItemRouting } from './item.routing';
import { RouterModule } from '@angular/router';
import { SearchModule } from '@modules/search/search.module';
import { ServiceUtils } from '@services/services-utils';
import { SessionService } from '@services/session-service';

const components = [ItemComponent];

const imports = [
  CommonModule,
  HttpClientModule,
  ItemRouting,
  BreadcrumbModule,
  SearchModule,
  RouterModule,
];

const providers = [ServiceUtils, SessionService];

@NgModule({
  declarations: components,
  exports: components,
  imports: imports,
  providers: providers,
  schemas: [NO_ERRORS_SCHEMA],
})
export class ItemModule {}
