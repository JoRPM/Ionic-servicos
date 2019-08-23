import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListarprofissionalPage } from './listarprofissional.page';

const routes: Routes = [
  {
    path: '',
    component: ListarprofissionalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListarprofissionalPage]
})
export class ListarprofissionalPageModule {}
