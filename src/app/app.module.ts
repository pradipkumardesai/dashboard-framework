import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { GridsterModule } from 'angular-gridster2';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { CchGristerComponent } from './components/cch-grister/cch-grister.component';
import { CchGridsterConfigService } from './services/gridster-config/gridster-config.service';
import { WidgetContainerComponent } from './components/widget-container/widget-container.component';
import { WidgetHeaderComponent } from './components/widget-header/widget-header.component';


@NgModule({
  declarations: [
    AppComponent,
    CchGristerComponent,
    WidgetContainerComponent,
    WidgetHeaderComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    GridsterModule 
  ],
  providers: [CchGridsterConfigService],
  bootstrap: [AppComponent],
  exports:[]
})
export class AppModule { }
