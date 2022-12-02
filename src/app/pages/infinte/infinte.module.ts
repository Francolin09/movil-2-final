import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfintePageRoutingModule } from './infinte-routing.module';

import { InfintePage } from './infinte.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfintePageRoutingModule,
    ComponentsModule
  ],
  declarations: [InfintePage]
})
export class InfintePageModule {}
