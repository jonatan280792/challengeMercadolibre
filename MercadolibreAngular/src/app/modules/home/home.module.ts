import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRouting } from './home.router';
import { MatCardModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SearchModule } from '@modules/search/search.module';

const components = [HomeComponent];

const imports = [
  CommonModule,
  MatCardModule,
  SearchModule,
  HomeRouting,
  RouterModule,
];

@NgModule({
  declarations: components,
  exports: components,
  imports: imports,
  providers: [],
})
export class HomeModule {}
