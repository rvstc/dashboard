import {NgModule} from '@angular/core';
import {
  MatGridListModule,
} from '@angular/material';

import {SettingsComponent} from './pages/settings.component';

@NgModule({
  imports: [
    MatGridListModule,
  ],
  providers: [],
  declarations: [
    SettingsComponent,
  ],
  exports: [],
})
export class SettingsModule {}
