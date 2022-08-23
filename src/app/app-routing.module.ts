import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
const routes: Routes = [
  {
    path: 'product',
    component: ProductComponent,
  },
  {
    path: 'about/:id',
    loadChildren: () =>
      import('./about/about.module').then((m) => m.AboutModule),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
