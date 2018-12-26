import {NgModule} from '@angular/core';
import {
  MatCardModule,
  MatGridListModule,
} from '@angular/material';

import {DashboardComponent} from './pages/dashboard.component';

@NgModule({
  imports: [
    MatCardModule,
    MatGridListModule,
  ],
  providers: [],
  declarations: [
    DashboardComponent,
  ],
  exports: [],
})
export class DashboardModule {}
