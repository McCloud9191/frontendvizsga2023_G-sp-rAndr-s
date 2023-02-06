import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HumorComponent } from './humor/humor.component';
import { MainComponent } from './main/main.component';
import { ScifiComponent } from './scifi/scifi.component';



export const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: 'main', component: MainComponent},
  {path: 'scifi', component: ScifiComponent},
  {path: 'humor', component: HumorComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
