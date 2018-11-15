import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OverviewComponent} from './overview/overview.component';
import {PhotosComponent} from './photos/photos.component'

const routes: Routes = [
  {path: 'overview', component: OverviewComponent},
  {path: 'photos', component: PhotosComponent},
  { path: '', redirectTo: '/overview', pathMatch: 'full' },
  {path: '**', component: OverviewComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
