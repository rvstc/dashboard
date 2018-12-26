import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {DashboardModule} from '../modules/dashboard/dashboard.module'
import {DashboardComponent} from '../modules/dashboard/pages/dashboard.component'

import {AboutModule} from '../modules/about/about.module';
import {AboutComponent} from '../modules/about/pages/about.component';

import {SettingsModule} from '../modules/settings/settings.module';
import {SettingsComponent} from '../modules/settings/pages/settings.component';

import {ErrorModule} from '../modules/error/error.module';
import {PageNotFoundComponent} from '../modules/error/pages/page-not-found.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'about', component: AboutComponent},
  {path: 'settings', component: SettingsComponent},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [
    DashboardModule,
    SettingsModule,
    AboutModule,
    ErrorModule,

    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
