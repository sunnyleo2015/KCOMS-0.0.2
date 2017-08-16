import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { RebirthNGModule } from 'rebirth-ng';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';

import { routing} from './app.route';

import { LayoutModule } from './layout/layout.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RebirthNGModule.forRoot(),
    BrowserAnimationsModule,
    routing,
    LayoutModule,
  ],
  exports: [
    LayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
