import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProfissionalPage } from './profissional.page';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component: ProfissionalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProfissionalPage]
})
export class ProfissionalPageModule {}
