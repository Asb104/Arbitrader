import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SupportedCrytocurrencyPage } from './supported-crytocurrency.page';

const routes: Routes = [
  {
    path: '',
    component: SupportedCrytocurrencyPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SupportedCrytocurrencyPage]
})
export class SupportedCrytocurrencyPageModule {}
