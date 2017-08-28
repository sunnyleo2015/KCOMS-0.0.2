import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgZorroAntdModule, NZ_NOTIFICATION_CONFIG } from 'ng-zorro-antd';
import { AppComponent } from './app.component';
import { routing} from './app.route';
import { LayoutModule } from './layout/layout.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgZorroAntdModule.forRoot(),
    BrowserAnimationsModule,
    routing,
    LayoutModule,
    HttpModule,
  ],
  exports: [
    LayoutModule,
  ],
  providers: [
    { provide: NZ_NOTIFICATION_CONFIG, useValue: { nzTop: '75px', nzRight: '-15px'}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
