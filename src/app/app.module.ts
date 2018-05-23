import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { GridsterModule } from 'angular-gridster2';


import { AppComponent } from './app.component';
import { CchGristerComponent } from './components/cch-grister/cch-grister.component';
import { CchGridsterConfigService } from './services/gridster-config/gridster-config.service';
import { WidgetContainerComponent } from './components/widget-container/widget-container.component';


@NgModule({
  declarations: [
    AppComponent,
    CchGristerComponent,
    WidgetContainerComponent
  ],
  imports: [
    BrowserModule,
    GridsterModule 
  ],
  providers: [CchGridsterConfigService],
  bootstrap: [AppComponent],
  exports:[]
})
export class AppModule { }
