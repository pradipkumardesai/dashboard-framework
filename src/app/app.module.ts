import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { GridsterModule } from 'angular-gridster2';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { CchGristerComponent } from './components/cch-grister/cch-grister.component';
import { CchGridsterConfigService } from './services/gridster-config/gridster-config.service';
import { WidgetContainerComponent } from './components/widget-container/widget-container.component';
import { WidgetHeaderComponent } from './components/widget-header/widget-header.component';
import { SlideInService } from './services/slide-in/slide-in.service';
import { SlideInComponent } from './components/slide-in/slide-in.component';
import { IframeWrapperDirective } from './directives/iframe/iframe-wrapper.directive';
import { BridgeModule } from './bridge/bridge.module';


@NgModule({
  declarations: [
    AppComponent,
    CchGristerComponent,
    WidgetContainerComponent,
    WidgetHeaderComponent,
    SlideInComponent,
    IframeWrapperDirective
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    GridsterModule,
    BridgeModule 
  ],
  providers: [CchGridsterConfigService,SlideInService],
  bootstrap: [AppComponent],
  exports:[]
})
export class AppModule { }
