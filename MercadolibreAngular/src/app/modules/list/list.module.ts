import { CommonModule } from '@angular/common';
import { BreadcrumbModule } from '@modules/breadcrumb/breadcrumb.module';
import { FormsModule } from '@angular/forms';
import { ListComponent } from './list.component';
import { ListRouting } from './list.router';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SearchModule } from '@modules/search/search.module';


const components = [ListComponent];

const imports = [
  CommonModule,
  FormsModule,
  ListRouting,
  BreadcrumbModule,
  SearchModule,
  RouterModule,
];

@NgModule({
  declarations: components,
  exports: components,
  imports: imports,
  providers: [],
})
export class ListModule {}
