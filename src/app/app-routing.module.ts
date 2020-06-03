import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './Templates/header/header.component';
import { MenuComponent } from './Templates/menu/menu.component';
import { DashboardComponent } from './Templates/dashboard/dashboard.component';
import { PatientComponent } from './Pages/patient/patient.component';
import { HistoriqueComponent } from './Pages/historique/historique.component';
import { LoginComponent } from './Templates/login/login.component';
import { AccueilComponent } from './Pages/accueil/accueil.component';
import { DetailhistoriqueComponent } from './Pages/detailhistorique/detailhistorique.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    //templates user
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'header', component: HeaderComponent },
      { path: 'menu', component: MenuComponent },
      { path: 'patient', component: PatientComponent },
      { path: 'historique', component: HistoriqueComponent },
      { path: 'accueil', component: AccueilComponent },
      { path: 'detail/:id', component: DetailhistoriqueComponent },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
