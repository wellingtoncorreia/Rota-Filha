import { Routes } from '@angular/router';
import { ContatoComponent } from './contato/contato.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { SobreComponent } from './sobre/sobre.component';

export const routes: Routes = [
    { path: '', component: LoginComponent }, // Rota para login
  {
    path: 'admin',
    component: MainLayoutComponent, // Layout principal
    children: [
      { path: '', component: HomeComponent }, // Rota padrão
      { path: 'sobre', component: SobreComponent },
      { path: 'contato', component: ContatoComponent },
    ],
  },
  { path: '**', redirectTo: 'login' }, // Rota para páginas não encontradas
];
