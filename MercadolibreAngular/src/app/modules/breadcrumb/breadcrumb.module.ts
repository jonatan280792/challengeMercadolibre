import {
    NgModule, NO_ERRORS_SCHEMA
  } from '@angular/core';
  import { BreadcrumbComponent } from './breadcrumb.component';
  import { CommonModule } from '@angular/common';
  import { BreadcrumbRouting } from './breadcrumb.routing';
  import { RouterModule } from '@angular/router';
  import { HttpClient, HttpClientModule } from '@angular/common/http';
  import { FormsModule, ReactiveFormsModule } from '@angular/forms';
  import { MatFormFieldModule, MatSelectModule, MatCardModule, MatIconModule,
    MatInputModule, MatTabsModule, MatPaginatorModule, MatSortModule, MatTableModule } from '@angular/material';
  import { ServiceUtils } from '@services/services-utils';
  import { SessionService } from '@services/session-service';
  import { CustomIconService } from '@common/custom-icons/custom-icon.service';
  
  const components = [
    BreadcrumbComponent
  ];
  
  const imports = [
    CommonModule,
    HttpClientModule,
    MatIconModule,
    BreadcrumbRouting,
    RouterModule
  ];
  
  const providers = [
    ServiceUtils,
    SessionService,
    CustomIconService
  ];
  
  @NgModule({
    declarations: components,
    exports: components,
    imports: imports,
    providers: providers,
    schemas: [NO_ERRORS_SCHEMA]
  })
  export class BreadcrumbModule {}
  