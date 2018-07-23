import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";

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
import { WidgetGalleryComponent } from './components/widget-gallery/widget-gallery.component';
import { WidgetGalleryCardComponent } from './components/widget-gallery-card/widget-gallery-card.component';
import { AppRouteModule } from './app.route.module';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    CchGristerComponent,
    WidgetContainerComponent,
    WidgetHeaderComponent,
    SlideInComponent,
    IframeWrapperDirective,
    WidgetGalleryComponent,
    WidgetGalleryCardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    SharedModule,
    AppRouteModule,
    NgbModule.forRoot(),
    GridsterModule,
    BridgeModule 
  ],
  providers: [CchGridsterConfigService,SlideInService],
  bootstrap: [AppComponent],
  exports:[]
})
export class AppModule { }
