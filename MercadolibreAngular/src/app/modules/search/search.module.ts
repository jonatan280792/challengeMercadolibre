import {
  NgModule, NO_ERRORS_SCHEMA
} from '@angular/core';
import { SearchComponent } from './search.component';
import { CommonModule } from '@angular/common';
import { SearchRouting } from './search.routing';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {
  MatFormFieldModule,
  MatSelectModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatTabsModule,
  MatPaginatorModule,
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceUtils } from '@services/services-utils';
import { SessionService } from '@services/session-service';

const components = [
  SearchComponent
];

const imports = [
  CommonModule,
  FormsModule,
  HttpClientModule,
  MatFormFieldModule,
  MatInputModule,
  
  
  SearchRouting,
  RouterModule
];

const providers = [
  ServiceUtils,
  SessionService
];

@NgModule({
  declarations: components,
  exports: components,
  imports: imports,
  providers: providers,
  schemas: [NO_ERRORS_SCHEMA]
})
export class SearchModule {}
