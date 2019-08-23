import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'cliente', loadChildren: './cliente/cliente.module#ClientePageModule' },
  { path: 'profissional', loadChildren: './profissional/profissional.module#ProfissionalPageModule' },
  { path: 'listacliente', loadChildren: './listacliente/listacliente.module#ListaclientePageModule' },  { path: 'listarprofissional', loadChildren: './listarprofissional/listarprofissional.module#ListarprofissionalPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
