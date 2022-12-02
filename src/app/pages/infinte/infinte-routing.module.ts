import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfintePage } from './infinte.page';

const routes: Routes = [
  {
    path: '',
    component: InfintePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfintePageRoutingModule {}
