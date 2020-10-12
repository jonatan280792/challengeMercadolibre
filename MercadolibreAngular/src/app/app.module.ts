import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutes } from './app-routes';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchComponent } from './modules/search/search.component';
import { ListComponent } from './modules/list/list.component';
import { ItemComponent } from './modules/item/item.component';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { MatFormFieldModule, MatSelectModule, MatCardModule, MatIconModule,
  MatInputModule, MatTabsModule, MatPaginatorModule } from '@angular/material';
import { ServiceUtils } from '@services/services-utils';
import { SessionService } from '@services/session-service';
import { CustomIconService } from '@common/custom-icons/custom-icon.service';
import { HomeComponent } from './modules/home/home.component';
import { SearchModule } from '@modules/search/search.module';
import { BreadcrumbComponent } from './modules/breadcrumb/breadcrumb.component';
import { BreadcrumbModule } from '@modules/breadcrumb/breadcrumb.module';

@NgModule({
  declarations: [
    AppComponent,
    // BreadcrumbComponent,
    // SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    CommonModule,
    // BreadcrumbModule,
    // SearchComponent,
    // MatFormFieldModule,
    // MatInputModule,
    // // MatSelectModule,
    HttpClientModule,
    // SearchModule,
    // // MatCardModule,
    // // MatIconModule,
    // // MatTabsModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    ServiceUtils,
    SessionService,
    // CustomIconService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
