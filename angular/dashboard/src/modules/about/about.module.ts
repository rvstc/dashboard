import {NgModule} from '@angular/core';
import {
  MatCardModule,
  MatGridListModule,
} from '@angular/material';

import {AboutComponent} from './pages/about.component';

@NgModule({
  imports: [
    MatCardModule,
    MatGridListModule,
  ],
  providers: [],
  declarations: [
    AboutComponent,
  ],
  exports: [],
})
export class AboutModule {}
