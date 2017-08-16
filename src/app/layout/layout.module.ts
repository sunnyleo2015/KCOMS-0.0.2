import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';

import { FormsModule } from '@angular/forms';
import { RebirthNGModule } from 'rebirth-ng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RebirthNGModule,
  ],
  exports: [
    LayoutComponent,
  ],
  declarations: [
    LayoutComponent,
  ]
})
export class LayoutModule { }
