import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from '@modules/list/list.component';



const routes: Routes = [
  {
    // component: ListComponent,
    loadChildren: () => import('@modules/home/home.module').then(m => m.HomeModule),
    path: '',
  },
  {
    // component: ListComponent,
    loadChildren: () => import('@modules/list/list.module').then(m => m.ListModule),
    path: 'items',
  },
  {
    // component: ListComponent,
    loadChildren: () => import('@modules/item/item.module').then(m => m.ItemModule),
    path: 'items/:id',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutes { }